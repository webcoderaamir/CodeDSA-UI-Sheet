'use client'

import { useState, useEffect } from 'react'
import QuestionList from './components/QuestionList'
import CategoryFilter from './components/CategoryFilter'
import DifficultyFilter from './components/DifficultyFilter'
import SearchBar from './components/SearchBar'
import Pagination from './components/Pagination'
import UserProfile from './components/UserProfile'
import CodeEditor from './components/CodeEditor'
import { Button } from '@/components/ui/button'
import { getQuestions, categories } from './data/questionData'
import { useAuth } from './contexts/AuthContext'
import type { Question } from './data/questionData'

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [category, setCategory] = useState('All')
  const [subcategory, setSubcategory] = useState('All')
  const [difficulty, setDifficulty] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [questionsPerPage] = useState(10)
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null)

  const auth = useAuth()

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = await getQuestions()
      setQuestions(fetchedQuestions)
    }
    fetchQuestions()
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [category, subcategory, difficulty, searchTerm])

  const filteredQuestions = questions.filter(q => 
    (category === 'All' || q.category === category) &&
    (subcategory === 'All' || q.subcategory === subcategory) &&
    (difficulty === 'All' || q.difficulty === difficulty) &&
    (q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     q.problem.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const indexOfLastQuestion = currentPage * questionsPerPage
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * filteredQuestions.length)
    const randomQuestion = filteredQuestions[randomIndex]
    setSelectedQuestion(randomQuestion)
    setCurrentPage(Math.floor(randomIndex / questionsPerPage) + 1)
  }

  const handleCodeSubmit = (code: string) => {
    console.log('Submitted code:', code)
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <h1 className="text-4xl font-bold text-primary">DSA Question Bank</h1>
        {auth && auth.user && <UserProfile />}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <CategoryFilter 
            categories={categories} 
            currentCategory={category} 
            currentSubcategory={subcategory}
            onCategoryChange={setCategory}
            onSubcategoryChange={setSubcategory}
          />
          <DifficultyFilter
            currentDifficulty={difficulty}
            onDifficultyChange={setDifficulty}
          />
        </div>
        <div className="flex gap-4">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <Button onClick={getRandomQuestion} variant="outline">Random Question</Button>
        </div>
      </div>
      {selectedQuestion && (
        <div className="mb-8 p-6 bg-card rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-primary">{selectedQuestion.title}</h2>
          <p className="mb-4 text-foreground">{selectedQuestion.problem}</p>
          <CodeEditor 
            initialCode={selectedQuestion.code || '// Write your solution here'} 
            onSubmit={handleCodeSubmit}
          />
        </div>
      )}
      <QuestionList questions={currentQuestions} />
      <Pagination
        questionsPerPage={questionsPerPage}
        totalQuestions={filteredQuestions.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

