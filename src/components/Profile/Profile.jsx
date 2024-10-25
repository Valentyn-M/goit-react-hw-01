import s from './Profile.module.css'

const Profile = ({ user }) => {
	const { username: name, tag, location, avatar: image, stats } = user;

	return (
		<div className={s.user}>
			<div className={s['user-wrap']}>
				<img className={s['user-img']} src={image} alt={name} />
				<p className={s['user-name']}>{name}</p>
				<p className={s['user-tag']}>@{tag}</p>
				<p className={s['user-location']}>{location}</p>
			</div>

			<ul className={s.list}>
				<li className={s.item}>
					<span className={s['item-name']}>Followers</span>
					<span className={s['item-value']}>{stats.followers}</span>
				</li>
				<li className={s.item}>
					<span className={s['item-name']}>Views</span>
					<span className={s['item-value']}>{stats.views}</span>
				</li>
				<li className={s.item}>
					<span className={s['item-name']}>Likes</span>
					<span className={s['item-value']}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	)
}

export default Profile
