import { useState } from "react";
import { v4 as uuidv4} from 'uuid';

function TransactionForm({ onAddTransaction, dataFormatada }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('entrada');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim() === '') {
            alert('Por favor, digite um valor válido');
            return;
        }
        if (amount === '' || isNaN(amount) || Number(amount) <= 0) {
            alert('Por favor, digite uma quantia válida');
            return;
        }
        const newTransaction = {
            id: uuidv4(),
            description: description.trim(),
            amount: type === 'entrada' ? Number(amount) : -Number(amount),
            type: type,
            date: dataFormatada,
        };
        onAddTransaction(newTransaction);
        setDescription('');
        setAmount('');
        setType('entrada');
    };
    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <h3>Nova Transação</h3>
            <input 
                type="text" 
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value='entrada'>Entrada</option>
                <option value='saida'>Saída</option>
            </select>
            <input type="number" placeholder="Quantia em R$"
                step='0.01'
                min='0'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
} 

export default TransactionForm;