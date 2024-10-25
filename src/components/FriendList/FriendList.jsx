import s from './FriendList.module.css'

import FriendListItem from "../FriendListItem/FriendListItem"

const FriendList = ({ friends }) => {
	return (
		<ul className={s.list}>
			{friends.map((friend) => {
				return (
					<li className={s.item} key={friend.id}><FriendListItem friend={friend} /></li>
				)
			})}
		</ul>
	)
}

export default FriendList
