import styles from './NewsBanner.module.css'
import Image from '../Image/Image'
import { formTimeAgo } from '../../helpers/formatTimeAgo'

const NewsBanner = ({ item }) => {
	console.log(item)

	return (
		<div className={styles.banner}>
			<Image image={item?.image} />

			<h3 className={styles.title}>{item.title}</h3>
			<p className={styles.extra}>
				{formTimeAgo(item.published)} by {item.author}
			</p>
		</div>
	)
}

export default NewsBanner
