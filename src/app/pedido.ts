import { Cliente } from "./cliente.js";

export class Pedido {
    private idPedido !: number;
    dataPedido !: Date;
    horaDoPedido !: Date;

    constructor(_DataPedido: Date, _HoraDoPedido: Date){
        this.dataPedido = _DataPedido;
        this.horaDoPedido = _HoraDoPedido;
    }
    
    get _IdPedido (): number {
        return this.idPedido;
    }
    set _IdPedido(_IdPedido: number){
        this.idPedido = _IdPedido;
    }

    public chamadaDoPedido (){
        
    }
}