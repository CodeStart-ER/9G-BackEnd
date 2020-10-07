
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Petición Entrante ------------' + request.url)
    console.log('Method: ', request.method)

        if(request.url === '/hola') {
            response.write('hola koder, bienvenido. ')}
                else if(request.url === '/adios') {
                    response.write('hasta la vista baby. ')
                } else {
                    response.write('ninguna de las anteriores. ')
                }

        if(request.method === 'POST' && request.url === '/hola') {
            response.write('hola koder, estas intentando crear')}
                else if(request.method === 'GET' && request.url === '/hola') {
                    response.write('hola koder, estas intentando obtener') } 
                else if(request.method === 'POST' && request.url === '/adios') {
                    response.write('hasta la vista baby con un POST')}
                else if(request.method === 'GET' && request.url === '/adios') {
                    response.write('hasta la vista baby con un POST')

                } else {
                    response.write('ninguna de las anteriores.')
                }
                
                response.end()
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

/*Práctica 2
    hacer que las rutas hola y adios reaccionen a los diferentes métodos (GET , POST)
    POST /hola -> hola koders, estas intentando crear
    GET /hola -> hola koders, estas intentando obtener
    POST /adios -> hasta la vista baby con un post
    GET /adios -> hasta la vista baby con un GET
*/

/*Práctica 3
    - Investigar como cambiar el Header Content Type de la repsuesta

    - Cambiar el header content type de la respuesa por el MIMEType de html

*/
