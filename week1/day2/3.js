module.exports = function is(val,check){
  if (val <= 1)
    return false
  if(check === 1)
    return true
  else if ( val % check === 0)
    return false
  else
    return is(val, check-1)

}
