/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const strN = n.toString();
    const nums = strN.split('');
    let product = 1;
    let sum = 0;
    
    nums.forEach(num => {
        num = Number(num);
        product = product * num;
        sum += num;
    });
    
    return product - sum;
};

/*
I: integer
O: integer 
C: none 
E: n > 1, so no edge cases 

first get the product of the digits
second is the sum of the digits 
result is difference of product and sum

-- have to break up the digits in order to take product/sum 
turn the number into a string 
string - can split it up into an array of these string numbers 
Then I can perform the multiplication and summation 
** turn the string numbers back into numbers before doing this 

-- pseudocoding 
variable to hold the number to string string
then split that string variable into an array of number strings 
** can use reduce
product variable = 1
sum variable = 0

iterate over the array 
convert the current element back to a number
Multiply it by the product variable
As well as adding it to the sum variable 

return the value of the product variable - sum variable 
*/