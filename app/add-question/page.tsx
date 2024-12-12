'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import QuestionForm from '../components/QuestionForm'
import { addQuestion } from '../data/questionData'

export default function AddQuestionPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (questionData) => {
    setIsSubmitting(true)
    await addQuestion(questionData)
    setIsSubmitting(false)
    router.push('/')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Question</h1>
      <QuestionForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  )
}

