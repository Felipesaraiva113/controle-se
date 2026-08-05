import {SlWallet} from 'react-icons/sl';
function PrimeiroComponente() {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-br')
    return (
        <header>
            <h1>CONTROLE-SE < SlWallet /></h1>
            <h3>{dataFormatada}</h3>
        </header>
    );
}

export default PrimeiroComponente;