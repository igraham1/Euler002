//** Values do not exceed 4 Mil, sum of even values*/
let display;
display = document.getElementById('answer002');

let answer = [1, 2];

for (let i = 2; answer[i - 2] + answer[i - 1] < 4000000; i++) {
    answer[i] = answer[i - 2] + answer[i - 1]
}


console.log("The answer is", answer)

let evens = []
let total = 0

for (let i = 0; i < answer.length; i = i + 1) {
    if (answer[i] % 2 === 0) {
        // console.log(answer[i])
        evens.push(answer[i])
        total = total + answer[i];

    }
}
console.log("The evens are", evens)
console.log('the totla is ', total)

display.innerText = "total: " + total