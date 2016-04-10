module.exports = function is_npm_v3 () {
  var regu =/^3$/;
  var str = require('child_process').execSync('npm -v').toString()
  var re = new RegExp(regu)
  
  if (re.test(str)) {
    return true;
  }else{
    return false;
  }
}
