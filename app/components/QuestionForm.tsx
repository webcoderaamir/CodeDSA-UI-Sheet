import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "../data/questionData";
import type { Question } from "../data/questionData";
import Label from "@/components/ui/Label"; // Import the Label component

type QuestionFormProps = {
  onSubmit: (question: Omit<Question, "id">) => void;
  isSubmitting: boolean;
};

function QuestionForm({ onSubmit, isSubmitting }: QuestionFormProps) {
  const [question, setQuestion] = useState<Omit<Question, "id">>({
    category: "",
    subcategory: "",
    difficulty: "Easy",
    title: "",
    problem: "",
    solution: "",
    code: "",
    timeComplexity: "",
    spaceComplexity: "",
    tags: [],
    sampleInput: "",
    sampleOutput: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(question);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setQuestion((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Split the input value by commas, trim spaces, and filter out empty values
    const tags = inputValue
      .split(",")
      .map((tag) => tag.trim()) // Remove spaces around tags
      .filter((tag) => tag !== ""); // Remove empty tags

    setQuestion((prev) => ({ ...prev, tags }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="category" className="text-gray-700">
            Category
          </Label>
          <Select
            name="category"
            onValueChange={handleSelectChange("category")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.name} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {question.category &&
          categories.find((c) => c.name === question.category)
            ?.subcategories && (
            <div>
              <Label htmlFor="subcategory" className="text-gray-700">
                Subcategory
              </Label>
              <Select
                name="subcategory"
                onValueChange={handleSelectChange("subcategory")}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a subcategory" />
                </SelectTrigger>
                <SelectContent>
                  {categories
                    .find((c) => c.name === question.category)
                    ?.subcategories?.map((subcategory) => (
                      <SelectItem key={subcategory} value={subcategory}>
                        {subcategory}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          )}

        <div>
          <Label htmlFor="difficulty" className="text-gray-700">
            Difficulty
          </Label>
          <Select
            name="difficulty"
            onValueChange={handleSelectChange("difficulty")}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="title" className="text-gray-700">
            Title
          </Label>
          <Input
            id="title"
            name="title"
            value={question.title}
            onChange={handleChange}
            placeholder="Enter the question title"
            required
            className="w-full"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="problem" className="text-gray-700">
          Problem
        </Label>
        <Textarea
          id="problem"
          name="problem"
          value={question.problem}
          onChange={handleChange}
          placeholder="Describe the problem"
          required
          className="w-full h-32"
        />
      </div>

      <div>
        <Label htmlFor="solution" className="text-gray-700">
          Solution
        </Label>
        <Textarea
          id="solution"
          name="solution"
          value={question.solution}
          onChange={handleChange}
          placeholder="Explain the solution"
          required
          className="w-full h-32"
        />
      </div>

      <div>
        <Label htmlFor="code" className="text-gray-700">
          Code
        </Label>
        <Textarea
          id="code"
          name="code"
          value={question.code}
          onChange={handleChange}
          placeholder="Enter the code solution"
          className="w-full h-48 font-mono"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="timeComplexity" className="text-gray-700">
            Time Complexity
          </Label>
          <Input
            id="timeComplexity"
            name="timeComplexity"
            value={question.timeComplexity}
            onChange={handleChange}
            placeholder="e.g., O(n)"
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="spaceComplexity" className="text-gray-700">
            Space Complexity
          </Label>
          <Input
            id="spaceComplexity"
            name="spaceComplexity"
            value={question.spaceComplexity}
            onChange={handleChange}
            placeholder="e.g., O(1)"
            className="w-full"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="tags" className="text-gray-700">
          Tags
        </Label>
        <Input
          id="tags"
          name="tags"
          value={question.tags?.join(", ") || ""} // Safely handle undefined
          onChange={handleTagsChange}
          placeholder="Enter tags separated by commas"
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="sampleInput" className="text-gray-700">
            Sample Input
          </Label>
          <Input
            id="sampleInput"
            name="sampleInput"
            value={question.sampleInput}
            onChange={handleChange}
            placeholder="Sample Input"
            className="w-full"
          />
        </div>

        <div>
          <Label htmlFor="sampleOutput" className="text-gray-700">
            Sample Output
          </Label>
          <Input
            id="sampleOutput"
            name="sampleOutput"
            value={question.sampleOutput}
            onChange={handleChange}
            placeholder="Sample Output"
            className="w-full"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        {isSubmitting ? "Adding Question..." : "Add Question"}
      </Button>
    </form>
  );
}

export default QuestionForm;
