const express = requi('express');

const app = express();

app.use(express.static('public')); 

app.listen(3000, () => {
    console.log('servidor en el puerto 3000 ');
}); 