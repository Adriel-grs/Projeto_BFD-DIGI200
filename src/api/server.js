import express from "express";

const app = express();
const PORT = 6000;

app.listen(PORT, ()=> {
    console.log (`Apenas testando ${PORT}`);
});