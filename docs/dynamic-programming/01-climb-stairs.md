# 70 Climb stairs

## Question

Given an m x n matrix, return all elements of the matrix in spiral order.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

## Answer

Algorithm: fibonacci (number of stairs + 1)

DP equation: array[ i ] = array[i - 1] + array[i - 2]

Time complexity: O(n)
Space complexity: O(1)