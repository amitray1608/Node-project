var events = require('events');

// var myEmitter = new events.EventEmitter();
// myEmitter.on('something', function(mssg) {
//     console.log(mssg);
// });

// myEmitter.emit('something', 'the event will initiate');
var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var amit = new Person('amit');
var sumit = new Person('sumit');
var bumit = new Person('bumit');

var arr = [amit, sumit, bumit];

arr.forEach(function(person){
    person.on('speak', function(mssg) {
        console.log(person.name + ' said ' + mssg);
    });
});

amit.emit('speak', 'is this even working');