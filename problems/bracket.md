Problem: Check Valid Parentheses

Requirements:
Given a string just containing `(` and `)`. Determine an input string is valid.
An input string is valid if:
- Open brackets must be closed by the same type of bracket
- Open brackets must be closed in the correct order

sample:
"()" -> true
"(())" -> true
"()()" -> true
"(()" -> false

Given additional parentheses are added `{`, `}`, `[` and `]`. Determine an input string is valid.
sample:
"()[]{}" -> true
"(]" -> false
"([)]" -> false
"{[]} -> true
