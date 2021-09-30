
let num = [5, 8, 0, 1, 9, 11, 5, 16];

console.log("Original numbers list: ", num)

for(let i = 0; i < num.length; i++) {
    for(let j=i+1; j < num.length; j++) {
        if(num[i] > num[j]) {
            const temp = num[i];
            num[i] = num[j];
            num[j] = temp;        
        }
    }
}

console.log("Numbers list after Asc sorting:: ", num);


for(let i = 0 ; i < num.length ; i++)
{
    for(let j = 0 ; j < num.length - 1 ; j++)
    {
        if(num[i] < num[j + 1])
        {
            const temp = num[j];
            num[j] = num[j + 1]
            num[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", num)

//TODO: Try to figure out the issue of the sorting algorithm, and fix it to work as expected. 
// Done

//TODO: Change the code to be well-designed and well-styled.
// Done 

//TODO: The “numbers” array in the code is mutable!, change a little bit in the code to keep the original one as-it (immutable) and print the new one.
// Done

//TODO: Read the numbers list from data.txt file, sort it in ASC order, then store it in a new file called output.txt
// Working on it...