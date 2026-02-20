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

    //  uppper case to lower case 

    const tolowercase = (str) => {
        let vowel = 0;
        let consonant = 0;
        str = str.toLowerCase();

        for ( let char of str ){
            if ( char >= 'a ' && char <= 'z'){
               vowel++;
            }
             else{
               consonant++;
            }
        }
         return {
            vowel ,
            consonant
         }
        


    }

    console.log( tolowercase ( "jahid hasan   "))


    //  duplicate character in string  mane kono word ak ba akadik bar letter use hole remeve kore dei 

     const duplicate = ( str ) =>{
         let charCuont = "";
           for ( let char of str ){
              if ( !charCuont.includes(char)){
                 charCuont+=char
              }
              else{
                 
              }
           }
           return charCuont;
      }

      console.log( duplicate("programming"))

      //   check anagram    এটার  মানে হলো দুাইটা শব্দের আক্ষর গুলে্া েএক রকম কি না 


       const anagrma =   ( str1,str2) => {

        if ( str1.length !== str2.length){
           return false ;
        }

         let sorted1 = str1.toLowerCase().split("").sort().join("");
         let sorted2 = str2.toLowerCase().split("").sort().join("");

           return sorted1 === sorted2 ;
           
       }

         console.log( anagrma ( " jahid ", "hasan")) // false 

         console.log( anagrma ( "listen", "silent")) //true 