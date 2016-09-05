module.exports = function toStringArray(arryay){
  var stringyArray = []
  for (var i = 0; i < arryay.length; i++)
    current = arryay[i]
    stringyArray = arryay.map(function(current){
      return String(current)
    })
    return stringyArray
}
