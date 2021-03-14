# Two sum

## Question

Given an unsorted integer array nums, find the smallest missing positive integer.

Input: nums = [1,2,0]
Output: 3

## Answer

Data Structure:
- hashtable: maintain a mapping of each element in the array to its index

Algorithm: Two-pass Hash Table
1. In the first iteration, add each element's value and its index to the table.
2. In the second iteration, check if each element's complement (target - nums[i]) exists in the table.
3. Beware that the complement must not be nums[i] itself.

Time complexity: O(n)
Space complexity: O(n)
