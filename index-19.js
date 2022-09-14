// Aula 19 : Projeto Node pt-03
// Rota : meusite.com/users?name=rogerio&=35
// Usar app.use :Sempre antes das rotas , pois o node, express leem de cima para baixo.
// Verbos http : DELETE- Ecluindo um usuario 
const express = require('express')

const app=express()

const uuid=require('uuid')

const port=3000



app.use(express.json())
const users=[]

app.get('/users',(request,response)=> {
        console.log("Rota de Get chamada")
        return response.json(users)    

})
app.post('/users',(request,response)=> {
    const {name,age}=request.body
    const user={id:uuid.v4(),name,age}

    users.push(user)
    console.log("Rota de POST chamada")
    return response.status(201).json(user)

})

app.put('/users/:id',(request,response)=>{
   const{id}=request.params
   const{name,age}=request.body
   const updateUser={id,name,age}
   
   const index=users.findIndex(user=>user.id===id)
       
 
       if (index<0){
          return response.status(404).json({mensage:"User not Found"})
       }
       users[index]=updateUser
       console.log("Rota Put- alteracao")
       return response.json(updateUser)
         
         
         
 })


app.delete('/users/:id',(request,response)=>{
    const{id}=request.params

    const index=users.findIndex(user=>user.id===id)

    if (index<0){
        return response.status(404).json({mensage:"User not Found"})
     }
     users.splice(index,1)
     console.log("Rota de DEL chamada")
     return response.status(204).json()
})

app.listen(3000)       
  // app.listen (port,()=> {
 //  console.log('server started on port${port}')