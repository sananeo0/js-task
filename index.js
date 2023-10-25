// Task 1 

// function string_to_array(string) {

//     return string.split(" ")
// }

// console.log(string_to_array("Robin Singh"));


// Task 2 

// function truncate_string(string, number) {

//     return string.substring(0, number)
// }

// console.log(truncate_string("Robin Singh", 4));


// Task 3 

// function protect_email(email) {

//     let dot = "...@"

//     let splitEmail = email.split('@')

//     let newFormat = splitEmail[0].substring(0, 4)

//     let concat = newFormat.concat(dot)

//     return concat.concat(splitEmail[1])

// }

// console.log(protect_email("robin_singh@example.com"));


// Task 4 



// function repeat_string(string, count) {

//     if ((string == null) || (count == null)) {

//         return ('Error in string or count.')
//     }
//     else {

//         return string.padStart(count, string)
//     }

// }

// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));








// TASK 5

// function search_word(text, word) {

//     var punctuation = /[\.,?!]/g;
//     var newText = text.replace(punctuation, "");

//     let arr = newText.split(" ")

//     let counter = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] === word) {
//             counter++;
//         }
//     }

//     return counter;

// }

// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));