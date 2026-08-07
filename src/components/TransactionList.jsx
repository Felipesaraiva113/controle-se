import { FaTrash } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function TransactionList({ transactions, onDeleteTransaction }) {
    return (<div>
        <ul>
            {transactions.map((transaction) =>
            ( <li key={transaction.id}>
                {transaction.description} | {transaction.amount} | {transaction.amount > 0 ? <MdKeyboardDoubleArrowUp />
: <MdKeyboardDoubleArrowDown />} | {transaction.date} |
            <span onClick={() => onDeleteTransaction(transaction.id)}>
                <FaTrash />
            </span>
            </li>))}
        </ul>
        
    </div>
    );
}
 
export default TransactionList;