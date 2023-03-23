Assignment 1:
A string is balanced if it consists of exactly two different characters and both of those characters appear exactly the same number of times. For example: "aabbab" is balanced (both 'a' and 'b' occur three times) but "aabba" is not balanced ('a' occurs three times, 'b' occurs two times). String "aabbcc" is also not balanced (it contains three different letters).A substring of string S is a string that consists of consecutive letters in S. For example: "ompu" is a substring of "computer" but "cmptr" is not.Write a function solution called getBalancedSubstrings(List<String> S) that, given a string S, returns an array of the longest balanced substring of S.

To run with default string  input value  = abababa
```npm run balanced```


To run with custom string  input value  update the balancedSubString.js
``` let str=process.env.npm_config_input || "inputtt";```


Assignment 2:
AYou're given 3 plates (A, B, C) and an N number of rings labelled according to the diameter of each ring. For instance, Ring 5 has 5cm diameter and hence is larger than Ring 4 (4cm diameter) and Ring 3 (3cm diameter) etc.Write a function solution named "migrateRings(N, A, B, C)" that accepts a positive integer input; N denoting the number of Rings labelled from 1 to N as their respective diameter sizes. These provided Rings are sorted in ascending order on Plate A denoted by the input A. The task is to move all the rings from Plate A to Plate B using Plate C as help for auxillary holder. The function should return an array of the steps required to migrate N Rings from Plate A to Plate B.

To run with default string  input value  = 2
```npm run tower```


To run with custom string  input value  update the balancedSubString.js
``` let n=process.env.npm_config_n || 4;```
