import { Input } from '@/components/ui/input'

type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <Input
      type="text"
      placeholder="Search by topic or question..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="max-w-xs"
    />
  )
}

