import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img className={s.content__image} src="https://luatkhoa.org/wp-content/uploads/2014/10/blue-header-foocamp21.png" alt="Hero" />
			</div>
			<div>
				Ava + description
			</div>
			<div>
				My posts
				<div>New post</div>
				<div className={s.posts}>
					<div className={s.item}>post 1</div>
					<div className={s.item}>post 2</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;