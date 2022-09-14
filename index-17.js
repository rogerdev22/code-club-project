// Aula 17 : Projeto Node pt-01
// Rota : meusite.com/users?name=rogerio&=35
// Usar app.use :Sempre antes das rotas , pois o node, express leem de cima para baixo.
// Verbos http : GET , POST

const express=require('express')

const uuid=require('uuid')

const port=3000

const app=express()

app.use(json())
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


app.listen(3000)       
  // app.listen (port,()=> {
 //  console.log('server started on port${port}')
 //  })