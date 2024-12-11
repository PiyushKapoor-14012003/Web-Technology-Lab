const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
// Register an onclick event using EventEmitter
const handleClick = () => {
    console.log('Button clicked!');
};

// Assign the handleClick function to the 'click' event
eventEmitter.on('click', handleClick);

// Simulate a button click event
eventEmitter.emit('click');