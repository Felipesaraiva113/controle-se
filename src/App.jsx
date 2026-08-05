import { useState, useEffect } from 'react'
import PrimeiroComponente from './components/PrimeiroComponente';
import TransactionForm from './components/TransactionForm';
import './styles/global.css';
import TransactionList from './components/TransactionList';
import GraficoFinanceiro from './components/PieChart';

function App() {
  const [transactions, SetTransactions] = useState(() => {
    const dadosSalvos = localStorage.getItem('my_transactions');
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });
  const addTransaction = (newTransaction) => {
    SetTransactions([...transactions, newTransaction]);
  };
  const deleteTransaction = (id) => {
    SetTransactions(transactions.filter(transaction => transaction.id !== id));
  };
  const calcularSaldoTotal = transactions.reduce((contador, transaction) => contador + transaction.amount, 0); 
  useEffect(() => {
    localStorage.setItem('my_transactions', JSON.stringify(transactions));
  }, [transactions]);
  return (
    <div className='app'>
      <PrimeiroComponente />
      <div className='grid-layout'>
        <div className='painel-esquerdo'>
          <h2>Saldo Total: {calcularSaldoTotal}</h2>
          <GraficoFinanceiro transactions={transactions} />
        </div>
        <div className='painel-direito'>
          <h2>Controle Financeiro</h2>
          <TransactionForm onAddTransaction={addTransaction} />
          <TransactionList 
            transactions={transactions}
            onDeleteTransaction={deleteTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
