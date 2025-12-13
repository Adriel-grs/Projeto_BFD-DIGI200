class Cliente {
    private idCliente !: String;
    private cpf !: number;
    private nomeCliente !: String;
    private enderecoCliente !: String;
    private telefoneCliente !: number;
    
    //Getters e Setters
    get _IdCliente():String {
        return this.idCliente;
    }
    set _IdCliente ( _IdCliente : String) {
        this.idCliente = _IdCliente;
    }

    get _cpf ():number {
        return this.cpf;
    }
    set _cpf (_cpf: number){
        this.cpf = _cpf;
    }

    get _NomeCliente (): String {
        return this.nomeCliente;
    }
    set _NomeCliente (_NomeCliente: String){
        this.nomeCliente = _NomeCliente;
    }

    get _EnderecoCliente (): String {
        return this.enderecoCliente;
    }
    set _EnderecoCliente (_EnderecoCliente : String ){
        this.enderecoCliente = _EnderecoCliente;
    }

    get _TelefoneCliente ():number{
        return this.telefoneCliente;
    }
    set _TelefoneClinete (_TelefoneCliente: number){
        this.telefoneCliente = _TelefoneCliente;
    }
}