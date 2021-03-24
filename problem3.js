let number = 600851475143
let factors = []

for(let i=2;i<=number;){
  if(number%i == 0){
    factors.push(i)
    number = number / i
  }else{
    i++
  }
}

console.log(factors)