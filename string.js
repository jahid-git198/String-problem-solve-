//   reverse a string

const str = "hello  ";
const reverse = str.split("").reverse().join("");
console.log(reverse);
//     reverse a string without using built in function

const strr = (jahid) => {
  let result = "";

  for (let i = jahid.length - 1; i >= 0; i--) {
    result += jahid[i];
  }

  return result;


};


 strr("jahid")

console.log(strr("jahid"));


//  next way to reverse a string without using built in function 

 const string = (hasan ) => {
      let all = "";

       for ( let char of hasan ){
          all = char + all;
       }

        return all;
 }

    console.log(string("hasan"));