import styles from './NewsList.module.css'
import NewsItem from '../NewsItem/NewsItem'
const NewsList = ({ newsList }) => {
	return (
		<ul className={styles.list}>
			{newsList.map(item => {
				return <NewsItem key={item.id} item={item} />
			})}
		</ul>
	)
}

export default NewsList
