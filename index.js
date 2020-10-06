
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Petición Entrante ------------' + request.url)
        if(request.url == '/hola') {
            response.write('hol koder, bienvenido') 
            response.end()}
                else if(request.url == '/adios') {
                    response.write('hasta la vista baby')
                    response.end()
                } else {}
                
            })
            
    //response.write('Hola desde node')
  
            

server.listen(8080, () => {
    console.log('El servidor está escuchando en el puerto 8080')
})

/*Práctica
    Responder diferente en cada ruta 

    /hola   => hola koder, bienvenido
    /adios  => hasta la vista babe
*/
