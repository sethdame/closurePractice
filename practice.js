//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function() {
    var name = 'Tyler';
    return function() {
      return 'The original name was ' + name;
    }
  }
  //Above you're given a function that returns another function which has a closure over 
  //the name variable.
  //Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();



//Next problem



var callFriend = function() {
  var friend = 'Jake';

  function callF(number) {
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 
//435-215-9248' in your console.

var callMeMaybe = callFriend();

callMeMaybe('435-215-9248');



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function() {
  var number = 0;

  return function() {
    return number += 1;
  };
};

var count = makeCounter();
count(); // 1
count(); // 2
count(); // 3
count(); // 4  Are these calls of the variable or should all of these print out at once?



//Next Problem

/*
  Write a function that accepts another function as it's first argument
   and returns a new function (callback function)(which invokes the original function 
   //that was passed in) that can only ever be executed once.  */

// Do I need to have cb in the function argument space on this code below ?

var first = function(cb) {
  var n = 1;
  return function() {
    cb();
  }
}

first(function() {
  return n;
});


function howdydoody(fn) {
  return function() {
    fn();
  };
}

var test = howdydoody(function() {
  console.log('foo');
})

test();

/*  Once completed, add a second arguments (i.e. function(cb, N)) that allows the 
  function to be invoked N number of times.  After the function has been called N number 
  //of times, console.log('STAHHP');
*/

var first = function(cb, n) {
  var n = 0;
  return function() {
    cb();
    return function() {
      return number += 1;
    };
    return console.log('STAHHP');
  }
}

num(function() {
  return n;
})

var second = first();

second();