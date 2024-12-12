import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { Category } from '../data/questionData'

type CategoryFilterProps = {
  categories: Category[];
  currentCategory: string;
  currentSubcategory: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
};

export default function CategoryFilter({
  categories,
  currentCategory,
  currentSubcategory,
  onCategoryChange,
  onSubcategoryChange
}: CategoryFilterProps) {
  const handleCategoryChange = (value: string) => {
    onCategoryChange(value);
    onSubcategoryChange('All');
  };

  const currentCategoryObj = categories.find(c => c.name === currentCategory);

  return (
    <div className="flex space-x-4">
      <Select value={currentCategory} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="All">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.name} value={category.name}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {currentCategoryObj && currentCategoryObj.subcategories && (
        <Select value={currentSubcategory} onValueChange={onSubcategoryChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select subcategory" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Subcategories</SelectItem>
            {currentCategoryObj.subcategories.map((subcategory) => (
              <SelectItem key={subcategory} value={subcategory}>
                {subcategory}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  )
}

