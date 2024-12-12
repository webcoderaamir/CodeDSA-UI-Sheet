"use strict";exports.id=104,exports.ids=[104],exports.modules={3072:(e,t,r)=>{r.d(t,{bd:()=>n,tI:()=>getQuestions,xL:()=>addQuestion}),r(9885);let n=[{name:"Arrays",subcategories:["1D Arrays","2D Arrays","Sliding Window","Two Pointers"]},{name:"Strings",subcategories:["Basic","Pattern Matching","Window"]},{name:"Linked List",subcategories:["Singly","Doubly","Circular"]},{name:"Stacks & Queues"},{name:"Trees",subcategories:["Binary Trees","Binary Search Trees","Heaps"]},{name:"Graphs",subcategories:["DFS","BFS","Topological Sort"]},{name:"Dynamic Programming"},{name:"Greedy"},{name:"Recursion"},{name:"Backtracking"},{name:"Bit Manipulation"}],i=[{id:1,category:"Arrays",subcategory:"1D Arrays",difficulty:"Easy",title:"Two Sum",problem:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",solution:"Use a hash map to store complements and find the solution in one pass.",code:`function twoSum(nums: number[], target: number): number[] {
      const map = new Map();
      for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
          return [map.get(complement), i];
        }
        map.set(nums[i], i);
      }
      return [];
    }`,timeComplexity:"O(n)",spaceComplexity:"O(n)",tags:["Hash Table","Array"],sampleInput:"nums = [2,7,11,15], target = 9",sampleOutput:"[0,1]"},{id:2,category:"Arrays",subcategory:"Sliding Window",difficulty:"Medium",title:"Longest Substring Without Repeating Characters",problem:"Given a string s, find the length of the longest substring without repeating characters.",solution:"Use a sliding window approach with a hash set to keep track of characters in the current window.",code:`function lengthOfLongestSubstring(s: string): number {
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
    }`,timeComplexity:"O(n)",spaceComplexity:"O(min(m,n))",tags:["Hash Table","String","Sliding Window"],sampleInput:'s = "abcabcbb"',sampleOutput:"3"},{id:3,category:"Arrays",subcategory:"Binary Search",difficulty:"Medium",title:"Binary Search",problem:"Given a sorted array of integers, find the index of a target element using binary search.",solution:"Use binary search to efficiently find the target in the sorted array by halving the search range in each step.",code:`function binarySearch(arr: number[], target: number): number {
      let left = 0;
      let right = arr.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
          return mid;
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }

      return -1; // Target not found
    }`,timeComplexity:"O(log n)",spaceComplexity:"O(1)",tags:["Binary Search","Array"],sampleInput:"arr = [1, 2, 3, 4, 5], target = 3",sampleOutput:"2"},{id:4,category:"Strings",subcategory:"Basic",difficulty:"Easy",title:"Reverse String",problem:"Write a function that reverses a string.",solution:"Iterate through the string from the end to the start and build a new string.",code:`function reverseString(s: string): string {
      let result = '';
      for (let i = s.length - 1; i >= 0; i--) {
        result += s[i];
      }
      return result;
    }`,timeComplexity:"O(n)",spaceComplexity:"O(n)",tags:["String"],sampleInput:'s = "hello"',sampleOutput:'"olleh"'},{id:5,category:"Linked List",subcategory:"Singly",difficulty:"Medium",title:"Reverse Linked List",problem:"Given a singly linked list, reverse the list.",solution:"Use three pointers (prev, current, next) to reverse the links in the list.",code:`function reverseLinkedList(head: ListNode | null): ListNode | null {
      let prev = null;
      let current = head;

      while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }

      return prev;
    }`,timeComplexity:"O(n)",spaceComplexity:"O(1)",tags:["Linked List"],sampleInput:"head = [1, 2, 3, 4, 5]",sampleOutput:"[5, 4, 3, 2, 1]"},{id:6,category:"Stacks & Queues",difficulty:"Medium",title:"Valid Parentheses",problem:'Given a string containing just the characters "(", ")", "{", "}", "[", "]", determine if the input string is valid.',solution:"Use a stack to keep track of opening parentheses and match them with closing parentheses.",code:`function isValid(s: string): boolean {
      const stack: string[] = [];
      const map = {
        '(': ')',
        '{': '}',
        '[': ']',
      };

      for (let char of s) {
        if (map[char]) {
          stack.push(char);
        } else if (Object.values(map).includes(char)) {
          if (map[stack.pop()] !== char) {
            return false;
          }
        }
      }

      return stack.length === 0;
    }`,timeComplexity:"O(n)",spaceComplexity:"O(n)",tags:["Stack","Parentheses"],sampleInput:'s = "()"',sampleOutput:"true"},{id:7,category:"Trees",subcategory:"Binary Trees",difficulty:"Medium",title:"Inorder Traversal of Binary Tree",problem:"Given a binary tree, return the inorder traversal of its nodes' values.",solution:"Use recursion or stack to traverse the tree in inorder.",code:`function inorderTraversal(root: TreeNode | null): number[] {
      const result: number[] = [];
      function inorder(node: TreeNode | null) {
        if (node === null) return;
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
      }
      inorder(root);
      return result;
    }`,timeComplexity:"O(n)",spaceComplexity:"O(n)",tags:["Binary Tree","Traversal"],sampleInput:"root = [1,null,2,3]",sampleOutput:"[1, 3, 2]"},{id:8,category:"Graphs",subcategory:"DFS",difficulty:"Medium",title:"Number of Islands",problem:'Given a 2D grid of "1"s (land) and "0"s (water), count the number of islands.',solution:"Use Depth First Search (DFS) to explore each island and mark visited cells.",code:`function numIslands(grid: string[][]): number {
      const rows = grid.length;
      const cols = grid[0].length;
      let count = 0;

      function dfs(r: number, c: number) {
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') return;
        grid[r][c] = '0'; // Mark the cell as visited
        dfs(r - 1, c); // up
        dfs(r + 1, c); // down
        dfs(r, c - 1); // left
        dfs(r, c + 1); // right
      }

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r][c] === '1') {
            count++;
            dfs(r, c);
          }
        }
      }

      return count;
    }`,timeComplexity:"O(m * n)",spaceComplexity:"O(m * n)",tags:["DFS","Graph"],sampleInput:'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',sampleOutput:"1"},{id:9,category:"Dynamic Programming",difficulty:"Medium",title:"Climbing Stairs",problem:"You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you reach the top?",solution:"Use dynamic programming to solve this problem by calculating the number of ways to reach each step.",code:`function climbStairs(n: number): number {
      if (n <= 2) return n;
      let first = 1;
      let second = 2;
      
      for (let i = 3; i <= n; i++) {
        const temp = first + second;
        first = second;
        second = temp;
      }
      
      return second;
    }`,timeComplexity:"O(n)",spaceComplexity:"O(1)",tags:["Dynamic Programming"],sampleInput:"n = 3",sampleOutput:"3"},{id:10,category:"Arrays",subcategory:"2D Arrays",difficulty:"Medium",title:"Rotate Image",problem:"You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise).",solution:"Transpose the matrix and then reverse each row.",code:`function rotate(matrix: number[][]): void {
      const n = matrix.length;
      // Transpose the matrix
      for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
      }
      // Reverse each row
      for (let i = 0; i < n; i++) {
        matrix[i].reverse();
      }
    }`,timeComplexity:"O(n^2)",spaceComplexity:"O(1)",tags:["Matrix","Array"],sampleInput:"matrix = [[1,2,3],[4,5,6],[7,8,9]]",sampleOutput:"[[7,4,1],[8,5,2],[9,6,3]]"},{id:11,category:"Strings",subcategory:"Pattern Matching",difficulty:"Medium",title:"KMP Pattern Matching",problem:"Implement the KMP (Knuth-Morris-Pratt) string matching algorithm to find the first occurrence of a pattern in a string.",solution:"Use the partial match table (LPS array) to skip unnecessary comparisons.",code:`function kmpPatternMatching(text: string, pattern: string): number {
      const lps: number[] = buildLpsArray(pattern);
      let i = 0, j = 0;
      
      while (i < text.length) {
        if (text[i] === pattern[j]) {
          i++;
          j++;
        }
        
        if (j === pattern.length) {
          return i - j; // Match found
        } else if (i < text.length && text[i] !== pattern[j]) {
          if (j !== 0) {
            j = lps[j - 1];
          } else {
            i++;
          }
        }
      }
      
      return -1; // No match
    }
    
    function buildLpsArray(pattern: string): number[] {
      const lps: number[] = [0];
      let length = 0, i = 1;
      
      while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
          length++;
          lps[i] = length;
          i++;
        } else {
          if (length !== 0) {
            length = lps[length - 1];
          } else {
            lps[i] = 0;
            i++;
          }
        }
      }
      return lps;
    }`,timeComplexity:"O(n + m)",spaceComplexity:"O(m)",tags:["Pattern Matching","String"],sampleInput:'text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"',sampleOutput:"10"},{id:12,category:"Linked List",subcategory:"Doubly",difficulty:"Medium",title:"Flatten a Doubly Linked List",problem:"Given a doubly linked list, flatten it so that all the nodes appear in a single-level doubly linked list.",solution:"Use recursion to flatten the sublists while maintaining the structure of the doubly linked list.",code:`function flatten(head: Node | null): Node | null {
      if (!head) return null;

      let current = head;
      while (current) {
        if (current.child) {
          const child = current.child;
          current.child = null;

          let temp = current.next;
          current.next = child;
          child.prev = current;

          while (child.next) child = child.next;
          child.next = temp;
          if (temp) temp.prev = child;
        }
        current = current.next;
      }

      return head;
    }`,timeComplexity:"O(n)",spaceComplexity:"O(1)",tags:["Doubly Linked List"],sampleInput:"head = [1,2,3,null,null,4,5]",sampleOutput:"[1,2,3,4,5]"},{id:13,category:"Stacks & Queues",difficulty:"Easy",title:"Implement Stack Using Queues",problem:"Implement a stack using two queues.",solution:"Use two queues: one to store elements and the other to perform operations.",code:`class MyStack {
      private queue1: number[] = [];
      private queue2: number[] = [];

      push(x: number): void {
        this.queue1.push(x);
      }

      pop(): number {
        while (this.queue1.length > 1) {
          this.queue2.push(this.queue1.shift()!);
        }
        const poppedElement = this.queue1.shift()!;
        [this.queue1, this.queue2] = [this.queue2, this.queue1]; // Swap the queues
        return poppedElement;
      }

      top(): number {
        return this.queue1[this.queue1.length - 1];
      }

      empty(): boolean {
        return this.queue1.length === 0;
      }
    }`,timeComplexity:"O(n) for pop, O(1) for push",spaceComplexity:"O(n)",tags:["Queue","Stack"],sampleInput:"stack.push(1), stack.push(2), stack.pop()",sampleOutput:"2"},{id:14,category:"Trees",subcategory:"Binary Search Trees",difficulty:"Hard",title:"Validate Binary Search Tree",problem:"Given a binary tree, determine if it is a valid binary search tree.",solution:"Use recursion with bounds to check if the tree adheres to BST properties.",code:`function isValidBST(root: TreeNode | null): boolean {
      function helper(node: TreeNode | null, lower: number | null, upper: number | null): boolean {
        if (!node) return true;
        
        const val = node.val;
        if (lower !== null && val <= lower) return false;
        if (upper !== null && val >= upper) return false;
        
        if (!helper(node.left, lower, val)) return false;
        if (!helper(node.right, val, upper)) return false;
        
        return true;
      }

      return helper(root, null, null);
    }`,timeComplexity:"O(n)",spaceComplexity:"O(h)",tags:["Binary Search Tree","Tree"],sampleInput:"root = [2,1,3]",sampleOutput:"true"},{id:15,category:"Graphs",subcategory:"BFS",difficulty:"Medium",title:"Word Ladder",problem:"Given two words beginWord and endWord, and a dictionary, find the length of the shortest transformation sequence from beginWord to endWord, such that only one letter can be changed at a time and each transformed word must exist in the dictionary.",solution:"Use breadth-first search (BFS) to explore the word transformations.",code:`function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
      const wordSet = new Set(wordList);
      if (!wordSet.has(endWord)) return 0;
      
      let queue: [string, number][] = [[beginWord, 1]]; // word, level
      while (queue.length > 0) {
        const [word, level] = queue.shift()!;
        
        for (let i = 0; i < word.length; i++) {
          const newWord = word.slice(0, i) + '*' + word.slice(i + 1);
          for (let candidate of wordSet) {
            if (candidate === newWord && candidate !== word) {
              if (candidate === endWord) return level + 1;
              queue.push([candidate, level + 1]);
              wordSet.delete(candidate);
            }
          }
        }
      }
      
      return 0;
    }`,timeComplexity:"O(n * m)",spaceComplexity:"O(n * m)",tags:["Graph","BFS"],sampleInput:'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',sampleOutput:"5"},{id:16,category:"Backtracking",subcategory:"Combinations",difficulty:"Medium",title:"Combinations of N and K",problem:"Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].",solution:"Use recursion to generate combinations by building up the combination incrementally.",code:`function combine(n: number, k: number): number[][] {
      const result: number[][] = [];
      
      function backtrack(start: number, current: number[]) {
        if (current.length === k) {
          result.push([...current]);
          return;
        }
        
        for (let i = start; i <= n; i++) {
          current.push(i);
          backtrack(i + 1, current);
          current.pop();
        }
      }
      
      backtrack(1, []);
      return result;
    }`,timeComplexity:"O(n choose k)",spaceComplexity:"O(k)",tags:["Backtracking","Combinations"],sampleInput:"n = 4, k = 2",sampleOutput:"[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]"},{id:17,category:"Backtracking",subcategory:"Permutations",difficulty:"Medium",title:"Permutations of Unique Numbers",problem:"Given an array of unique integers, return all possible permutations.",solution:"Use recursion to generate all possible permutations by swapping elements in the array.",code:`function permute(nums: number[]): number[][] {
      const result: number[][] = [];
      
      function backtrack(start: number) {
        if (start === nums.length) {
          result.push([...nums]);
          return;
        }
        
        for (let i = start; i < nums.length; i++) {
          [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap
          backtrack(start + 1);
          [nums[start], nums[i]] = [nums[i], nums[start]]; // Swap back
        }
      }
      
      backtrack(0);
      return result;
    }`,timeComplexity:"O(n!)",spaceComplexity:"O(n)",tags:["Backtracking","Permutations"],sampleInput:"nums = [1,2,3]",sampleOutput:"[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"},{id:18,category:"Recursion",subcategory:"Tree Traversal",difficulty:"Easy",title:"Preorder Traversal of Binary Tree",problem:"Given the root of a binary tree, return the preorder traversal of its nodes' values.",solution:"Use recursion to traverse the tree in preorder (root, left, right).",code:`function preorderTraversal(root: TreeNode | null): number[] {
      const result: number[] = [];
      
      function dfs(node: TreeNode | null) {
        if (!node) return;
        
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
      }
      
      dfs(root);
      return result;
    }`,timeComplexity:"O(n)",spaceComplexity:"O(n)",tags:["Tree","Recursion","Preorder"],sampleInput:"root = [1,null,2,3]",sampleOutput:"[1,2,3]"},{id:19,category:"Backtracking",subcategory:"Sudoku Solver",difficulty:"Hard",title:"Solve Sudoku",problem:"Write a program to solve a Sudoku puzzle by filling the empty cells.",solution:"Use backtracking to fill the empty cells while checking for valid placements.",code:`function solveSudoku(board: string[][]): void {
      function isValid(board: string[][], row: number, col: number, num: string): boolean {
        for (let i = 0; i < 9; i++) {
          if (board[row][i] === num || board[i][col] === num) return false;
        }
        
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
          for (let j = startCol; j < startCol + 3; j++) {
            if (board[i][j] === num) return false;
          }
        }
        
        return true;
      }
      
      function backtrack(board: string[][]): boolean {
        for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') {
              for (let num = 1; num <= 9; num++) {
                const strNum = num.toString();
                if (isValid(board, row, col, strNum)) {
                  board[row][col] = strNum;
                  if (backtrack(board)) return true;
                  board[row][col] = '.'; // Backtrack
                }
              }
              return false; // No valid number found
            }
          }
        }
        return true; // Solved
      }
      
      backtrack(board);
    }`,timeComplexity:"O(9^(m*n))",spaceComplexity:"O(m*n)",tags:["Backtracking","Sudoku"],sampleInput:'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".","",".",".","8",".",".","7","9"],[".","8",".",".",".",".",".","2","5"]] ',sampleOutput:'[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]] '},{id:20,category:"Recursion",subcategory:"Fibonacci",difficulty:"Easy",title:"Fibonacci Sequence",problem:"Write a function to compute the nth Fibonacci number using recursion.",solution:"Use the recursive definition of Fibonacci to calculate the result.",code:`function fib(n: number): number {
      if (n <= 1) return n;
      return fib(n - 1) + fib(n - 2);
    }`,timeComplexity:"O(2^n)",spaceComplexity:"O(n)",tags:["Recursion","Fibonacci"],sampleInput:"n = 5",sampleOutput:"5"},{id:21,category:"Backtracking",subcategory:"N-Queens",difficulty:"Hard",title:"N-Queens Problem",problem:"Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution is represented as a 2D board where queens are placed on different rows, and no two queens can share the same column or diagonal.",solution:"Use backtracking to try placing queens row by row while checking for valid positions.",code:`function solveNQueens(n: number): string[][] {
      const result: string[][] = [];
      const board: string[] = Array(n).fill('.'.repeat(n));
      
      function isValid(board: string[], row: number, col: number): boolean {
        for (let i = 0; i < row; i++) {
          if (board[i][col] === 'Q') return false;
          if (col - (row - i) >= 0 && board[i][col - (row - i)] === 'Q') return false;
          if (col + (row - i) < n && board[i][col + (row - i)] === 'Q') return false;
        }
        return true;
      }

      function backtrack(row: number) {
        if (row === n) {
          result.push([...board]);
          return;
        }

        for (let col = 0; col < n; col++) {
          if (isValid(board, row, col)) {
            board[row] = board[row].slice(0, col) + 'Q' + board[row].slice(col + 1);
            backtrack(row + 1);
            board[row] = board[row].slice(0, col) + '.' + board[row].slice(col + 1);
          }
        }
      }

      backtrack(0);
      return result;
    }`,timeComplexity:"O(n!)",spaceComplexity:"O(n)",tags:["Backtracking","N-Queens"],sampleInput:"n = 4",sampleOutput:'[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] '},{id:29,category:"Bit Manipulation",subcategory:"Advanced Operations",difficulty:"Hard",title:"Find the Two Non-Repeated Numbers",problem:"Given an array of integers where every element appears twice except for two, find the two elements that appear only once.",solution:"Use XOR to find the combined XOR of the two unique elements, then use bit manipulation to separate them based on the set bit.",code:`function singleNumber(nums: number[]): number[] {
      let xor = 0;
      for (const num of nums) {
        xor ^= num; // XOR all elements together
      }

      const rightmostSetBit = xor & (-xor); // Find rightmost set bit
      let num1 = 0, num2 = 0;

      for (const num of nums) {
        if (num & rightmostSetBit) {
          num1 ^= num; // Group 1
        } else {
          num2 ^= num; // Group 2
        }
      }

      return [num1, num2];
    }`,timeComplexity:"O(n)",spaceComplexity:"O(1)",tags:["Bit Manipulation","XOR"],sampleInput:"nums = [1, 2, 1, 3, 2, 5]",sampleOutput:"[3, 5]"}],getQuestions=async()=>(await new Promise(e=>setTimeout(e,1e3)),i),addQuestion=async e=>{await new Promise(e=>setTimeout(e,1e3));let t=i.length+1;i=[...i,{id:t,...e}]}},3770:(e,t,r)=>{r.d(t,{I:()=>a});var n=r(784),i=r(9885),o=r(8699);let a=i.forwardRef(({className:e,type:t,...r},i)=>n.jsx("input",{type:t,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:i,...r}));a.displayName="Input"},4723:(e,t,r)=>{r.d(t,{Bw:()=>m,Ph:()=>u,Ql:()=>f,i4:()=>d,ki:()=>c});var n=r(784),i=r(9885),o=r(8421),a=r(9458),s=r(1264),l=r(8699);let u=o.fC;o.ZA;let c=o.B4,d=i.forwardRef(({className:e,children:t,...r},i)=>(0,n.jsxs)(o.xz,{ref:i,className:(0,l.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),...r,children:[t,n.jsx(o.JO,{asChild:!0,children:n.jsx(a.Z,{className:"h-4 w-4 opacity-50"})})]}));d.displayName=o.xz.displayName;let m=i.forwardRef(({className:e,children:t,position:r="popper",...i},a)=>n.jsx(o.h_,{children:n.jsx(o.VY,{ref:a,className:(0,l.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...i,children:n.jsx(o.l_,{className:(0,l.cn)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t})})}));m.displayName=o.VY.displayName;let p=i.forwardRef(({className:e,...t},r)=>n.jsx(o.__,{ref:r,className:(0,l.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));p.displayName=o.__.displayName;let f=i.forwardRef(({className:e,children:t,...r},i)=>(0,n.jsxs)(o.ck,{ref:i,className:(0,l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...r,children:[n.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:n.jsx(o.wU,{children:n.jsx(s.Z,{className:"h-4 w-4"})})}),n.jsx(o.eT,{children:t})]}));f.displayName=o.ck.displayName;let h=i.forwardRef(({className:e,...t},r)=>n.jsx(o.Z0,{ref:r,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",e),...t}));h.displayName=o.Z0.displayName},7878:(e,t,r)=>{r.d(t,{g:()=>a});var n=r(784),i=r(9885),o=r(8699);let a=i.forwardRef(({className:e,...t},r)=>n.jsx("textarea",{className:(0,o.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));a.displayName="Textarea"}};