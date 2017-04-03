### 276 Assignment 1 -- GPA Calculator

### Introduction
- Design a GPA calculator website for students in SFU.
- Make reasonable guesses on fonts, colors and measurements for user experience.
- Add additional HTML elements such as "delete activity" button and "add activity" button.
 
### Features
- GPA calculator allows users to choose to produce a calculated “Mean of grade” or “Weighted grades”.
- The Percentage column (the percentage of the corresponding activity) should be updated as the user is typing the into the “Grade” Column.  
```
Mean of grades 
The sum of all grades divided by the total number of grades 
A1 70/100, A2 20/80, A3 10/10: 
(0.7 + 0.25 + 1.0)/3 = 0.65 -> 65/100 
```
```
Weighted grades 
Each grade item can be given a weight, which is then used in the arithmetic mean aggregation to influence the importance of each item in the overall mean. In simple terms, the category "total" will be equal to the sum of the scores in each grade item, these scores being multiplied by the grade items' weights, and that sum being finally divided by the sum of the weights, as shown in this example. 
A1 70/100 weight 10, A2 20/80 weight 5, A3 10/10 
weight 3: (0.7*10 + 0.25*5 + 1.0*3)/18 = 0.625 -> 62.5/100 
```
