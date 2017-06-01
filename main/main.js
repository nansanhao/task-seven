module.exports = main
function main(email, suffixes) {
  var index = email.lastIndexOf("@");
  var ext = email.substr(index+1);
  if(ext == suffixes) {
    return true;
  }
  else return false;
  // Write your code here
};

console.log(main('tom@qq.com', ['qq.com']))
