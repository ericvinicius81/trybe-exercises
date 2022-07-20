import Cliente from "./Cliente";
import Item from "./Item";

class Pedido {
  private _cliente: Cliente;
  private _itens: Item[];
  private _formaPagamento: string = '';
  private _desconto?: number = 0;

  constructor(cliente: Cliente, itens: Item[], formaPagamento: string, desconto: number) {
    this._cliente = cliente;
    this._itens = itens;
    this._formaPagamento = formaPagamento;
  }

  get cliente() : Cliente {
    return this._cliente;
  }

  set cliente(cliente: Cliente) {
    this._cliente = cliente;
  }
  
}
