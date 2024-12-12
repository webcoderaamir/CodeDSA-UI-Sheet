import { Button } from '@/components/ui/button'

export default function TopicFilter({ topics, currentFilter, onFilterChange }) {
  return (
    <div className="mb-4 space-x-2">
      {topics.map((topic) => (
        <Button
          key={topic}
          onClick={() => onFilterChange(topic)}
          variant={currentFilter === topic ? 'default' : 'outline'}
        >
          {topic}
        </Button>
      ))}
    </div>
  )
}

