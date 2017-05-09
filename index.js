var swarm = require('discovery-swarm')

var sw = swarm()

sw.listen(3000)
sw.join('my-key-for-the-swarm') // can be any id/name/hash

sw.on('connection', function (connection) {
  console.log('found + connected to peer')
})