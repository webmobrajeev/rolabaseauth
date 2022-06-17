import http from 'http'
import app from './app.js'
// including dotenv file
import dotenv from 'dotenv'
dotenv.config()


// initilized server
const server=http.createServer(app)


// initilized socket.io
// const {Server}= require('socket.io')
// const io= new  Server(server)

// io.on('connection', (socket) => {
//     console.log('a user connected');
//   });

const port = process.env.PORT || 3008
server.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})


