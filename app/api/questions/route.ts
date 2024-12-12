import { NextResponse } from 'next/server'
import { EventEmitter } from 'events'
import { Question } from '../../types'

const questionEmitter = new EventEmitter()
let questions: Question[] = []

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      const listener = (data: Question[]) => {
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`)
      }
      questionEmitter.on('update', listener)
      controller.enqueue(`data: ${JSON.stringify(questions)}\n\n`)
    },
    cancel() {
      questionEmitter.removeAllListeners('update')
    },
  })

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  })
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const newQuestion: Question = {
    id: questions.length + 1,
    topic: formData.get('topic') as string,
    question: formData.get('question') as string,
    answer: formData.get('answer') as string,
    sampleInput: formData.get('sampleInput') as string,
    sampleOutput: formData.get('sampleOutput') as string,
    image: null,
  }

  const image = formData.get('image') as File
  if (image) {
    // In a real application, you would upload this to a file storage service
    // and store the URL. For this example, we'll just store the file name.
    newQuestion.image = image.name
  }

  questions.push(newQuestion)
  questionEmitter.emit('update', questions)

  return NextResponse.json({ success: true })
}

