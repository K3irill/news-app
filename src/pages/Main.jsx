import styles from './Main.module.css'
import NewsBanner from '../components/NewsBanner/NewsBanner'
import { useEffect } from 'react'
import { getNews } from '../api/apiNews'
import { useState } from 'react'
const Main = () => {
	const [news, setNews] = useState([])
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length > 0 ? <NewsBanner item={news[0]} /> : null}
		</main>
	)
}

export default Main
