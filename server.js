import {auth} from './firebase.js'
import http from 'http'

const listAllUsers =(res)=>{
    auth.listUsers(1000)
    .then((listUserResult)=>{
            let record=[]
            listUserResult.users.forEach((userRecord)=>{
                const recordJSON =  userRecord.toJSON()
                record.push(recordJSON)
            })
            const recordString = JSON.stringify(record)
            res.end(recordString);

        }
    ).catch((error)=>{console.log(error)})
}
const port = 8080
export const server = http.createServer()
        
server.on('request',(req,res)=>{
    if (req.url === '/'){
        res.end("server running")
    }
    else if(req.url === '/user'){
        res.writeHead(200,{
            'Access-Control-Allow-Origin':"*",
            'Access-Control-Allow-Method':"OPTIONS,POST,GET",
            'Access-Control-MAX-AGE':"2592000",

        })
        
         listAllUsers(res)
         
        // console.log( listAllUsers())
        // res.write(listAllUsers(res))
        // res.end(listAllUsers(res))
        
    }
})
server.listen(port,console.log('connected'))

