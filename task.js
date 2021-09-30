let numbers = [5, 8, 0, 1, 9, 11, 5, 16];

console.log("Original numbers list: ", numbers)

let ascOrder = [...numbers];


for(let i = 0; i < ascOrder.length; i++) {
    for(let j=0; j < ascOrder.length; j++) {
        if(ascOrder[i] < ascOrder[j])  {
            const temp = ascOrder[i];
            ascOrder[i] = ascOrder[j];
            ascOrder[j] = temp;        
        }
    }
}

console.log("Numbers list after Asc sorting:: ", ascOrder);

let descOrder = [...numbers];

for(let i = 0; i < descOrder.length; i++) {
    for(let j=0; j < descOrder.length; j++) {
        if(descOrder[i] > descOrder[j]) {
            const temp = descOrder[i];
            descOrder[i] = descOrder[j];
            descOrder[j] = temp;        
        }
    }
}
console.log("Numbers list After Desc sorting: ", descOrder)

//TODO: Try to figure out the issue of the sorting algorithm, and fix it to work as expected. 
// Done

//TODO: Change the code to be well-designed and well-styled.
// Done 

//TODO: The “numbers” array in the code is mutable!, change a little bit in the code to keep the original one as-it (immutable) and print the new one.
// Done

//TODO: Read the numbers list from data.txt file, sort it in ASC order, then store it in a new file called output.txt
// Done