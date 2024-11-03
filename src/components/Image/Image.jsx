import styles from './Image.module.css'

const Image = ({ image }) => {
	return (
		<div className={styles.wrapper}>
			{image !== 'None' ? (
				<img src={image} alt='news' className={styles.image} />
			) : (
				<img
					src={`https://steamuserimages-a.akamaihd.net/ugc/2079019457927111911/45068F1A462AF6EB757ADABDD621AB5FDE49E38E/?imw=512&imh=512&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true`}
					alt='news'
					className={styles.image}
				/>
			)}
		</div>
	)
}

export default Image
