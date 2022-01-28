// Kisses Shannen Reyes
// WD 201
// 2075 - WCServer

module.exports = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function(){
    return this.firstName + ' ' + this.lastName;
  }
}