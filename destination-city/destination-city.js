/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let cities = new Map(paths);
    let outgoingCities = paths.map(path => path[1]);
    let destination = '';
    
    outgoingCities.forEach(city => {
        if (cities.has(city) === false) {
            destination = city;
        }
    })
    
    return destination;
};

/*
I: an array of arrays with paths
O: a destination city, one without a path
C: the two cities w/i a path will not equal each other
E: none, always guaranteed a destination city

need to add each path into a map
then add each outgoing city into another array
Then check for each outgoing city in the map
return the city that does not exist in map's keys
*/