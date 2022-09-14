// Aula 16 Body params

// Arquivo index-16.js = Aula 16
// Rota : meusite.com/users?name=rogerio&=35

// Usar app.use :Sempre antes das rotas , pois o node, express leem de cima para baixo.

const express=require('express')

const port=3000
const app=express()


  app.use(express.json())
        
    app.get('/users',(request,response)=> {
    
        console.log(request.body)

     return response.json({message:"ok 05-09 body"})   
     //  const name=request.query.name
    //   const age=request.query.age
     //  console.log(name,age)
     //   console.log(request.query)
     //console.log(request)

     })
        app.listen(3000)       
         // app.listen (port,()=> {
         //   console.log('server started on port${port}')
          
        
