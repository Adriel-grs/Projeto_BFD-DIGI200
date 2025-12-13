class Fornecedor {
    private idFornecedor !: number;
    private cnpj !: number;
    private enderecoFornedor !: String;
    private nomeFornecedor !: String;
    private telefoneFornecedor !: number;

    //Getters e Setters
    get _IdFornecedor (): number{
        return this.idFornecedor;
    }
    set _IdFornecedor (_IdFornedor){
        this.idFornecedor = _IdFornedor;
    }

    get _cnpj ():number{
        return this.cnpj;
    }
    set _cnpj (_cnpj : number ){
        this.cnpj = _cnpj;
    }

    get _EnderecoFornecedor (): String {
        return this.enderecoFornedor;
    }
    set _EnderecoFornecedor (_EnderecoFornecedor : String){
        this.enderecoFornedor = _EnderecoFornecedor;
    }

    get _NomeFornecedor (): String {
        return this.nomeFornecedor;
    }
    set _NomeFornecedor (_NomeForncedor : String){
        this.nomeFornecedor = _NomeForncedor;
    }

    get _TelefoneForncedor (): number{
        return this.telefoneFornecedor;
    }
    set _TelefoneFornecedor (_TelefoneFornecedor : number){
        this.telefoneFornecedor = _TelefoneFornecedor;
    }
}