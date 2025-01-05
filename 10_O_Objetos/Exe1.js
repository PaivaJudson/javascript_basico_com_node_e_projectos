
class Conta {

    constructor(saldo){
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor; 
    }

    sacar(valor){
        if(valor > this.saldo)
            return false;
        this.saldo -= valor;
        return true;
    }
}


const c1 = new Conta(10000000);
console.log(c1);
c1.depositar(20000000);
console.log(c1);
console.log(c1.sacar(1500000));
console.log(c1);



