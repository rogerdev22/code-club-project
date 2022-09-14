// Aula 15 Route params

// Arquivo index-15.js = Aula 15
// Rota : meusite.com/users?name=rogerioo&=35


const express=require('express')

     const app=express()

     
     app.get('/users:',(request,response)=> {
          
      //  const name=request.query.name
      //  const age=request.query.age
     //   console.log(name,age)
     //   console.log(request.query)
     console.log(request)

          return response.send('hello route params')
     })
  
          app.listen (3000)