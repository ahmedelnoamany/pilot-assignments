module.exports = function arrflatterer9000(bunchOArrays){
  swagArray = []
  for (var i = 0; i < bunchOArrays.length; i++){
    current = bunchOArrays[i]
    swagArray = bunchOArrays.reduce(function(previousIt, currentIt) {
      return previousIt.concat(currentIt);
    })
    return swagArray
  }
}
