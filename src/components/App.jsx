import './App.css'
import Profile from './Profile/Profile'
import userData from '../assets/userData.json'
import friends from '../assets/friends.json'
import transactions from '../assets/transactions.json'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'

function App() {

	return (
		<>
			<Profile user={userData} />
			<FriendList friends={friends} />
			<TransactionHistory items={transactions} />
		</>
	)
}

export default App
