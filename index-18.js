// Aula 18 : Projeto Node pt-02
// Rota : meusite.com/users?name=rogerio&=35
// Usar app.use :Sempre antes das rotas , pois o node, express leem de cima para baixo.
// Verbos http : PUT - Alterado usuarios 

const express=require('express')

const uuid=require('uuid')

const port=3000

const app=express()

app.use(express.json())
const users=[]

app.get('/users',(request,response)=> {
        return response.json(users)    

})
app.post('/users',(request,response)=> {
    const {name,age}=request.body

    const user={id:uuid.v4(),name,age}

    users.push(user)
    return response.status(201).json(user)

})
app.put('/users/',(request,response)=>{
  const{id}=request.params
  const{name,age}=request.body

  const updateUser={name,age}
  
  const index=users.findIndex(user=>user.id===id)

        console.log(index)
        return response.json(updateUser)

  if (index<0){
     return response.status(404).json({mensage:"User not Found"})
  }
     users[index]=updateUser

     return response.json(updateUser)
})


app.listen(3000)       
  // app.listen (port,()=> {
 //  console.log('server started on port${port}')
 