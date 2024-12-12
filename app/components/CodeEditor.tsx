'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

type CodeEditorProps = {
  initialCode: string;
  onSubmit: (code: string) => void;
};

export default function CodeEditor({ initialCode, onSubmit }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)

  const handleSubmit = () => {
    onSubmit(code)
  }

  return (
    <div className="space-y-4">
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="font-mono h-64"
        placeholder="Write your code here..."
      />
      <Button onClick={handleSubmit}>Submit Solution</Button>
    </div>
  )
}

