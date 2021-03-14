# 70 Climb stairs

## Question

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct
ways can you climb to the top?

## Answer

Algorithm: fibonacci (number of stairs + 1)

DP equation: array[ i ] = array[i - 1] + array[i - 2]

Time complexity: O(n)
Space complexity: O(1)