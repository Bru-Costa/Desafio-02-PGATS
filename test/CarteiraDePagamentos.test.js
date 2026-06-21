import CarteiraDePagamentos from '../src/CarteiraDePagamentos.js';
import assert from 'node:assert';

describe('Carteira de Pagamentos', () => {

    it('Deve classificar pagamento acima de 100 como "cara"', () => {
        const carteira = new CarteiraDePagamentos();

        carteira.pagar('1111-2222-3333', 'Empresa A', 150.00);

        const ultimo = carteira.consultarUltimoPagamento();

        assert.equal(ultimo.categoria, 'cara');
        assert.equal(ultimo.valor, 150.00);
    });

    it('Deve classificar pagamento até 100 como "padrão"', () => {
        const carteira = new CarteiraDePagamentos();

        carteira.pagar('4444-5555-6666', 'Empresa B', 80.00);

        const ultimo = carteira.consultarUltimoPagamento();

        assert.equal(ultimo.categoria, 'padrão');
        assert.equal(ultimo.valor, 80.00);
    });

    it('Deve retornar o último pagamento registrado', () => {
        const carteira = new CarteiraDePagamentos();

        carteira.pagar('1111-1111-1111', 'A', 50);
        carteira.pagar('2222-2222-2222', 'B', 120);

        const ultimo = carteira.consultarUltimoPagamento();

        assert.equal(ultimo.codigoBarras, '2222-2222-2222');
        assert.equal(ultimo.empresa, 'B');
        assert.equal(ultimo.valor, 120);
    });

    it('Deve lançar erro ao consultar sem pagamentos', () => {
        const carteira = new CarteiraDePagamentos();

        assert.throws(() => {
            carteira.consultarUltimoPagamento();
        }, {
            message: 'Nenhum pagamento realizado, por favor verificar.'
        });
    });

    it('Deve lançar erro para valor inválido', () => {
        const carteira = new CarteiraDePagamentos();

        assert.throws(() => {
            carteira.pagar('9999-9999-9999', 'Empresa X', 0);
        }, {
            message: 'Valor inválido, por favor verificar.'
        });
    });

});
