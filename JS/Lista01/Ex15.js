let n1 = 0
let n2 = 1
let nn = 0

for(let i = 1; i <= 10; i++) {
    nn = n1 + n2
    n1 = n2
    n2 = nn
    console.log(n1)
}