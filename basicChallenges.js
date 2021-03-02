// Get 1 to 255 - Write code that returns an array with all the numbers from 1 to 255.

function get1to255(arr){
    var arr = []
    for (var i=1; i<256; i++){
        arr.push(i);
    }
    console.log(arr);
}
get1to255();

// Get even 1000 - Write code that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function geteven1000(){
    sum = 0
    for (var i=0; i<1001; i++){
        if (i%2==0){
            sum+=i;
        }
    }
    console.log(sum);
}

geteven1000();

// Sum odd 5000 - Write code that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumodd5000(){
    sum = 0
    for (var i=0; i<5001; i++){
        if (i%2!=0){
            sum+=i;
        }
    }
    console.log(sum);
}
sumodd5000();

// Iterate an array - Write code that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterateAnArray(arr){
    var sum = 0;
    for (var i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    console.log(sum)
}

iterateAnArray([-5,2,5,12])

// Find max - Given an array with multiple values, write code that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr){
    var max = arr[0];
    for (var i=0; i<arr.length; i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    console.log("max is: " + max);
}

findMax([-3,9,5,7]);

// Find average - Given an array with multiple values, write code that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAverage(arr){
    sum = 0
    for (var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    console.log("Average is: " + sum/arr.length);
}
findAverage([1,2,3,4]);

// Array odd - Write code that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function arrOdds(arr){
    var arr = []
    for (var i = 1;i<50; i++){
        if (i%2!=0){
            arr.push(i);
        }
    }
    console.log(arr)
}
arrOdds();

// Greater than Y - Given value of Y, write code that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your code will log 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr,y){
    var count = 0;
    for (var i = 0 ;i<arr.length; i++){
        if (arr[i]>y){
            count+=1;
        }
    }
    console.log(count)
}
greaterThanY([1, 4, 5, 7],3)
