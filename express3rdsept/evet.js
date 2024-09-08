const { Console } = require('console');
const EventEmitter = require('events');
const customEmitter = new EventEmitter

customEmitter.on("res",(name,id)=>{
   console.log(`Data received ${name} and ${id}`)
})
customEmitter.on('res',()=>{
   console.log('Some other logic here')
})
customEmitter.emit('res','john',37)