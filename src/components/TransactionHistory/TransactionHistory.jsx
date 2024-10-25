import s from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
	return (
		<table className={s.table}>
			<thead className={s.header}>
				<tr className={s["header-row"]}>
					<th className={s["header-cell"]}>Type</th>
					<th className={s["header-cell"]}>Amount</th>
					<th className={s["header-cell"]}>Currency</th>
				</tr>
			</thead>

			<tbody className={s.body}>
				{items.map((transaction) => {
					return (
						<tr className={s["body-row"]} key={transaction.id}>
							<td className={s["body-cell"]}>{transaction.type}</td>
							<td className={s["body-cell"]}>{transaction.amount}</td>
							<td className={s["body-cell"]}>{transaction.currency}</td>
						</tr>
					)
				})}
			</tbody>
		</table >

	)
}

export default TransactionHistory
