
let express = require('express');
let app = express();

app.get('/', function(request, response){
    response.send('primeira rota com express');
});

app.get('/teste', function(request, response){
    response.send('reiniciando rota com express');
});


app.listen(3000, function(){
    console.log('A aplicaco esta escutando na porta 3000');
})