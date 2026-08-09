import { FaTrash } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import classes from './List.module.css';

function TransactionList({ transactions, onDeleteTransaction }) {
    return (<div className={classes.div_listagem}>
        <ul>
            {transactions.map((transaction) =>
            ( <li key={transaction.id}>
                {transaction.description} R${Math.abs(transaction.amount)}
                    {transaction.amount > 0 ? <MdKeyboardDoubleArrowUp />
                    : <MdKeyboardDoubleArrowDown />} {transaction.date}
            <span onClick={() => onDeleteTransaction(transaction.id)} className="lixeiras">
                <FaTrash />
            </span>
            </li>))}
        </ul>
        
    </div>
    );
}
 
export default TransactionList;