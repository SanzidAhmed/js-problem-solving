function romanToInteger(s) {
    const romanToInt = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanToInt[s[i]];
        const nextValue = romanToInt[s[i + 1]];
        if (currentValue < nextValue) {
            result -= currentValue;
        }
        else {
            result += currentValue;
        }
    }

    return result;
}
console.log(romanToInteger("V"));
