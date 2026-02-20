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


    //  count vowels and consonants is a stting 

    const countVowels = (srt) =>{
            let vowel  = 0;
            let consonant = 0 ;
             const vowels = "aeiouAEIOU";

             for ( let char of srt ){
                if ( /[a-zA-Z]/.test(char)){
                   if ( vowels.includes(char)){
                     vowel++;
                   }
                }
                else  {
                   consonant++; 
                }
             }
             return { vowel, consonant }
    }
    console.log(countVowels("how are you "))