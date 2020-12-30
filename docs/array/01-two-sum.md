# Two sum

## Question
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

[2, 7, 11, 15], 9 => [0, 1]

## Answer

Data Structure:
- hashtable: maintain a mapping of each element in the array to its index

Algorithm: Two-pass Hash Table
1. In the first iteration, add each element's value and its index to the table.
2. In the second iteration, check if each element's complement (target - nums[i]) exists in the table.
3. Beware that the complement must not be nums[i] itself.

Time complexity: O(n)
Space complexity: O(n)
