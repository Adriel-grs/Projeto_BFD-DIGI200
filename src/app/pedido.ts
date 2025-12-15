import { Cliente } from "./cliente.js";

export class Pedido {
    private idPedido !: number;
    private dataPedido !: Date;
    private !: Date;
    
    get _IdPedido (): number {
        return this.idPedido;
    }
    set _IdPedido(_IdPedido: number){
        this.idPedido = _IdPedido;
    }

    public fazerPedido (){
        const pedido = new Pedido;
        pedido.fazerPedido ();
    }
}