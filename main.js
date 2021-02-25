function palindrome(str) {
    console.log(str.split("").reverse().join(""))
    return str.split("").map((x,i) => str[i]).join("")
  }
  
  
  
 console.log( palindrome("eye") );