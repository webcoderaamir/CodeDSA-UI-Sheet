import { useState, useEffect } from 'react'

export type Question = {
  id: number;
  category: string;
  subcategory?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  title: string;
  problem: string;
  solution: string;
  code?: string;
  timeComplexity?: string;
  spaceComplexity?: string;
  tags?: string[];
  sampleInput?: string;
  sampleOutput?: string;
  imageUrl?: string;
};

export type Category = {
  name: string;
  subcategories?: string[];
};

export const categories: Category[] = [
  { name: 'Arrays', subcategories: ['1D Arrays', '2D Arrays', 'Sliding Window', 'Two Pointers'] },
  { name: 'Strings', subcategories: ['Basic', 'Pattern Matching', 'Window'] },
  { name: 'Linked List', subcategories: ['Singly', 'Doubly', 'Circular'] },
  { name: 'Stacks & Queues' },
  { name: 'Trees', subcategories: ['Binary Trees', 'Binary Search Trees', 'Heaps'] },
  { name: 'Graphs', subcategories: ['DFS', 'BFS', 'Topological Sort'] },
  { name: 'Dynamic Programming' },
  { name: 'Greedy' },
  { name: 'Recursion & Backtracking' },
  { name: 'Bit Manipulation' },
];

let questions: Question[] = [
  {
    id: 1,
    category: 'Arrays',
    subcategory: '1D Arrays',
    difficulty: 'Easy',
    title: 'Two Sum',
    problem: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    solution: 'Use a hash map to store complements and find the solution in one pass.',
    code: `function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    tags: ['Hash Table', 'Array'],
    sampleInput: 'nums = [2,7,11,15], target = 9',
    sampleOutput: '[0,1]',
  },
  {
    id: 2,
    category: 'Arrays',
    subcategory: 'Sliding Window',
    difficulty: 'Medium',
    title: 'Longest Substring Without Repeating Characters',
    problem: 'Given a string s, find the length of the longest substring without repeating characters.',
    solution: 'Use a sliding window approach with a hash set to keep track of characters in the current window.',
    code: `function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let start = 0;
  const charSet = new Set();

  for (let end = 0; end < s.length; end++) {
    while (charSet.has(s[end])) {
      charSet.delete(s[start]);
      start++;
    }
    charSet.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}`,
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(min(m,n))', // where m is the size of the character set
    tags: ['Hash Table', 'String', 'Sliding Window'],
    sampleInput: 's = "abcabcbb"',
    sampleOutput: '3',
  }
];

export const getQuestions = async (): Promise<Question[]> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return questions;
}

export const addQuestion = async (newQuestion: Omit<Question, 'id'>): Promise<void> => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  const id = questions.length + 1;
  questions = [...questions, { id, ...newQuestion }];
}

export const useQuestions = () => {
  const [questionState, setQuestionState] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const fetchedQuestions = await getQuestions();
      setQuestionState(fetchedQuestions);
    };
    fetchQuestions();
  }, []);

  return questionState;
}

