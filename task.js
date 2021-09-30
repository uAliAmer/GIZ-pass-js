
let num = [5, 8, 0, 1, 9, 11, 5, 16];

console.log("Original numbers list: ", num)

for(var i = 0; i < num.length; i++) {
    for(let j=i+1; j < num.length; j++) {
        if(num[i] > num[j]) {
            var temp = num[i];
            num[i] = num[j];
            num[j] = temp;        
        }
    }
}

console.log("Numbers list after Asc sorting:: ", num);


for(var i = 0 ; i < num.length ; i++)
{
    for(let j = 0 ; j < num.length - 1 ; j++)
    {
        if(num[i] < num[j + 1])
        {
            var temp = num[j];
            num[j] = num[j + 1]
            num[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", num)


