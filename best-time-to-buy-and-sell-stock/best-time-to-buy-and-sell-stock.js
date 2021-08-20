/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } 
        if (prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }

    return profit;
};

/*
I: an array of prices
O: an integer of max profits you can achieve
C: 1 <= prices.length <= 105, 0 <= prices[i] <= 104
E: none, always guaranteed at least 1 price 

profit variable
min variable (the lowest possible buy price)
take difference between buy/sell days
if current profit is greater than profit, set profit to current profit
*/