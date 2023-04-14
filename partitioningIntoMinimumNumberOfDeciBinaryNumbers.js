/**
 * @param {string} n
 * @return {number}
 */
const minPartitions = (n) => {

    return Math.max(...n);
    
};

//input values
//PARAMETERS: A string representing an integer

// RESULT: a number which represents the minimum number of positive deci-binary numbers needed to add up to the input value  

// EXAMPLES: 
// Input:n = '32'
// 10,11,11
// Output:3 

// Input:n = '400'
// 100 100 100 100
//Output:4 

//Input:n = '409'
// 101,101,101,101,1,1,1,1,1
//Output:9


// Need to indntify the max unit of the number