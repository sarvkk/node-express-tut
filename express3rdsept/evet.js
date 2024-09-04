const { Console } = require('console');
const EventEmitter = require('events');
const customEmitter = new EventEmitter

customEmitter.on("res",()=>{
   console.log(`Data received`)
})

customEmitter.emit('res')