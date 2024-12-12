import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
import { Bookmark, MessageSquare } from 'lucide-react'
import type { Question } from '../data/questionData'

type QuestionListProps = {
  questions: Question[];
};

export default function QuestionList({ questions }: QuestionListProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [bookmarks, setBookmarks] = useState<number[]>([])

  const toggleBookmark = (id: number) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(bookmarkId => bookmarkId !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <Card key={q.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
          <CardHeader className="bg-secondary">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl font-bold text-primary">{q.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{q.category} {q.subcategory ? `- ${q.subcategory}` : ''}</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                {/* <Badge className={`${
                  q.difficulty === 'Easy' ? 'bg-green-500' :
                  q.difficulty === 'Medium' ? 'bg-yellow-500' :
                  'bg-red-500'
                } text-white`}>
                  {q.difficulty}
                </Badge> */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleBookmark(q.id)}
                  className={bookmarks.includes(q.id) ? 'text-yellow-500' : 'text-muted-foreground'}
                >
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="mb-4 text-foreground">{q.problem}</p>
            <div className="flex justify-between items-center">
              <Button 
                onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                variant="outline"
                className="text-primary hover:text-primary-foreground hover:bg-primary"
              >
                {expandedId === q.id ? 'Hide Solution' : 'Show Solution'}
              </Button>
              <Button variant="ghost" className="flex items-center text-muted-foreground hover:text-primary">
                <MessageSquare className="h-5 w-5 mr-2" />
                Discuss
              </Button>
            </div>
            {expandedId === q.id && (
              <div className="mt-4 p-4 bg-secondary rounded-md">
                <h4 className="font-semibold text-primary">Solution:</h4>
                <p className="whitespace-pre-wrap text-foreground">{q.solution}</p>
                {q.code && (
                  <>
                    <h4 className="font-semibold mt-4 text-primary">Code:</h4>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      <code>{q.code}</code>
                    </pre>
                  </>
                )}
                {q.timeComplexity && (
                  <p className="mt-2 text-muted-foreground"><strong className="text-foreground">Time Complexity:</strong> {q.timeComplexity}</p>
                )}
                {q.spaceComplexity && (
                  <p className="text-muted-foreground"><strong className="text-foreground">Space Complexity:</strong> {q.spaceComplexity}</p>
                )}
                {q.tags && q.tags.length > 0 && (
                  <div className="mt-2">
                    <strong className="text-foreground">Tags:</strong> {q.tags.map(tag => (
                      <div key={tag} className="mr-1 bg-accent text-accent-foreground">{tag}</div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

