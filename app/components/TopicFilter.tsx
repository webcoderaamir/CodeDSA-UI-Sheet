import { Button } from '@/components/ui/button'

interface TopicFilterProps {
  topics: string[]; // Assuming topics is an array of strings
  currentFilter: string; // Assuming currentFilter is a string
  onFilterChange: (topic: string) => void; // onFilterChange is a function that takes a string argument
}

export default function TopicFilter({ topics, currentFilter, onFilterChange }: TopicFilterProps) {
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
