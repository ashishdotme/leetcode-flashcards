# Two sum

## Question

Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

## Answer

Data Structure:
- hashtable: maintain a mapping of each element in the array to its index

Algorithm: Two-pass Hash Table
1. In the first iteration, add each element's value and its index to the table.
2. In the second iteration, check if each element's complement (target - nums[i]) exists in the table.
3. Beware that the complement must not be nums[i] itself.

Time complexity: O(n)
Space complexity: O(n)
