module.exports = function is(val){
  if(val <= 1)
    return false
  for (var i = 2; i < val; i++){
    if( val % i === 0)
      return false
  }
  return true
}
