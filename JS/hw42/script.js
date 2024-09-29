// 1. Повторіть функцію калькулятор з лекції (та що з чайнінгом).
// Допишіть чайнінг дії на *, /

function calc(a, b, action) {
    let result = 0

    function pl(num) {
    result += num

    return {
        pl,
        min,
        multiply,
        divide,
        getResult
    }
    }

    function min(num) {
        result -= num

        return {
            pl,
            min,
            multiply,
            divide,
            getResult
        }
    }

    function multiply(num) {
        result *= num

        return {
            pl,
            min,
            multiply,
            divide,
            getResult
        }
    }

    function divide(num) {
        result /= num

        return {
            pl,
            min,
            multiply,
            divide,
            getResult
        }
    }

    function getResult() {
        return result
    }

    switch (action) {
        case '+': result = a + b
            break
        case '-': result = a - b
            break
        case '*': result = a * b
            break
        case '/': result = a / b
            break
            default: result = 0
    }
    return {
        result,
        pl,
        min,
        multiply,
        divide
    }
}
const res = calc(1, 1, '+').pl(10).min(2).divide(2).multiply(5).getResult()
console.log(res);

// 2. Встановіть TS


