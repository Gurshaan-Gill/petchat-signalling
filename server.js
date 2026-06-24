const { PeerServer } = require('peer')

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/',
  allow_discovery: false,
  proxied: true,
})

peerServer.on('connection', (client) => {
  console.log(`[PetChat] Client connected: ${client.getId()}`)
})

peerServer.on('disconnect', (client) => {
  console.log(`[PetChat] Client disconnected: ${client.getId()}`)
})

console.log('[PetChat] Signalling server running')
