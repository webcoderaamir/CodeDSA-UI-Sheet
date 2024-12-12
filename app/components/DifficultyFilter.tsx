import { Button } from '@/components/ui/button'

type DifficultyFilterProps = {
  currentDifficulty: string;
  onDifficultyChange: (difficulty: string) => void;
};

const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

export default function DifficultyFilter({ currentDifficulty, onDifficultyChange }: DifficultyFilterProps) {
  return (
    <div className="flex space-x-2">
      {difficulties.map((difficulty) => (
        <Button
          key={difficulty}
          onClick={() => onDifficultyChange(difficulty)}
          variant={currentDifficulty === difficulty ? 'default' : 'outline'}
          className={`${
            difficulty === 'Easy' ? 'text-green-500' :
            difficulty === 'Medium' ? 'text-yellow-500' :
            difficulty === 'Hard' ? 'text-red-500' :
            ''
          }`}
        >
          {difficulty}
        </Button>
      ))}
    </div>
  )
}

