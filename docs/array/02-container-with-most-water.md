# Container with most water

## Question
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.


## Answer
Initially we can assume the result is 0. Then we scan from both sides. If leftHeight < rightHeight, move right and find a value that is greater than leftHeight. Similarily, if leftHeight > rightHeight, move left and find a value that is greater than rightHeight. Additionally, keep tracking the max value.