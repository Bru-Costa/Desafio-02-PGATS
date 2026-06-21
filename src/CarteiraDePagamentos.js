export default class CarteiraDePagamentos {

    constructor() {
        this.listaDePagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) {
        if (typeof valor !== 'number' || valor <= 0) {
            throw new Error('Valor inválido, por favor verificar.');
        }

        this.listaDePagamentos.push({
            codigoBarras,
            empresa,
            valor,
            categoria: valor > 100.00 ? 'cara' : 'padrão'
        });

        return 'Pagamento realizado com sucesso.';
    }

    consultarUltimoPagamento() {
        if (this.listaDePagamentos.length === 0) {
            throw new Error('Nenhum pagamento realizado, por favor verificar.');
        }

        return this.listaDePagamentos[this.listaDePagamentos.length - 1];
    }
}
