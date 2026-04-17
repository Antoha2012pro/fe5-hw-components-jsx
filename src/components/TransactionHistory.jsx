import { TransactionHistoryStyled, TransactionHistoryTheadStyled } from "../styles/Main.styled";

const TransactionHistory = ({items}) => {
  return (
    <TransactionHistoryStyled className="transaction-history">
      <TransactionHistoryTheadStyled>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHistoryTheadStyled>

      <tbody>
        {items.map(({id, type, amount, currency}) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </TransactionHistoryStyled>
  );
};

export default TransactionHistory;
