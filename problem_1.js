function isValidParentheses(str) {
    let stack = [];
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test cases
console.log(isValidParentheses("()"));       // true
console.log(isValidParentheses("([)]"));     // false
console.log(isValidParentheses("{[]}"));     // true