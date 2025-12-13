import express from "express";

const app = express();
const PORT = 6000;

app.listen(PORT, ()=> {
    console.log (`Apenas testando ${PORT}`);
});

app.get ("/sensor", (request, response) => {
    console.log ("Coleta de nível");
})