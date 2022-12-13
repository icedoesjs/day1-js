//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// This is always going to match the last occurence in the string so I provided all matches as well as the word position
function findWords(string, names = []){
    let all_words = names.map(w => w.toLowerCase());
    let match = 0;
    let count = 0;
    if (all_words.length != 0) {
        let str_spl = string.toLowerCase().split(" ");
        str_spl.forEach(i => {
            if (i.includes(',') || i.includes('.') || i.includes('!')) i = i.replace(",", "").replace(".", "").replace("!", "");
            if (all_words.includes(i)) {
                if (match == 0) {
                    match = `Matched ${i} (Position in string: ${count + 1})\n`;
                    count++;
                } else {
                    match += `Matched ${i} (Position in string: ${count + 1})\n`;
                    count++;
                }
            } else {
                count++;
            }
        })
    } 
    return (match != 0) ? match : 'No Match'
}

console.log(findWords(dog_string, dog_names)); // Returns purple

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let input_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
    arr.forEach(i => {
        index = arr.indexOf(i);
        if (index % 2 === 0) arr.splice(arr.indexOf(i), 1, 'even index');
    });
    return arr
}

console.log(replaceEvens(input_arr))

/* Expected output
Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
*/