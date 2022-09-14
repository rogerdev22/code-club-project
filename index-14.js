// Aula 14 Query params

// Arquivo index-14.js = Aula 14
// Rota : meusite.com/users?name=rodolfo&=28



const express=require('express')

     const app=express()

     
     app.get('/users',(request,response)=> {
          
        const name=request.query.name
        const age=request.query.age
        console.log(name,age)
        console.log(request.query)


          return response.json({name:name,age:age})
     })
  
          app.listen (3000)
        