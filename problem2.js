let suma = 0
let fibonacci = [1,2]
let x = 0
while(x<4000000){
  x = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
  if(x<4000000){
    fibonacci.push(x)
  }
}

for(let i=0;i<fibonacci.length;i++){
  if(fibonacci[i]%2 ==0){
    suma+= fibonacci[i]
  }
}
console.log(fibonacci)
console.log("la suma es: ", suma)