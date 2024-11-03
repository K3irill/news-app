import styles from './Header.module.css'

const NewsBanner = ({ item }) => {
	return (
		<div className={styles.banner}>
			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.header}></p>
		</div>
	)
}

export default NewsBanner
