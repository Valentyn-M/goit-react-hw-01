import s from "./FriendListItem.module.css"
import clsx from "clsx"

const FriendListItem = ({ friend }) => {
	const { avatar, name, isOnline } = friend
	return (
		<>
			<img className={s.avatar} src={avatar} alt={name} width="48" />
			<p className={s.name}>{name}</p>
			<p className={clsx(s.status, isOnline ? s.online : s.offline)}>
				{isOnline ? "Online" : "Offline"}
			</p>
		</>

	)
}

export default FriendListItem
