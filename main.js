/*
  ...........YOUR MISSION...........

  Create an object with three keys
    1. firstName
    2. lastName
    3. greet

  The greet key should be a function that, when called,
  should output "Welcome {firstName} {lastName}"

*/


var greeting = {
	firstName: "Sally",
  lastName: "Fisher",
  greet: function() {
    console.log("Welcome " + this.firstName + " " + this.lastName);
  }
};

greeting.greet();



var bye = function() {
  console.log("Bye " + this.firstName + " " + this.lastName);
}

greeting.BYE = bye;
greeting.BYE();