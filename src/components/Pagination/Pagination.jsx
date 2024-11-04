import styles from './Pagination.module.css'

const Pagination = ({
	totalPages,
	handleNextPage,
	handlePreviousPage,
	handlePageNumber,
	currentPage,
}) => {
	return (
		<div className={styles.pagination}>
			<button
				onClick={handlePreviousPage}
				className={styles.arrow}
				disabled={currentPage === 1}
			>
				{'<'}
			</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							onClick={() => handlePageNumber(index + 1)}
							className={styles.pageNumber}
							disabled={index + 1 === currentPage}
							key={index}
						>
							{index + 1}
						</button>
					)
				})}
			</div>
			<button
				onClick={handleNextPage}
				className={styles.arrow}
				disabled={currentPage === totalPages}
			>
				{'>'}
			</button>
		</div>
	)
}

export default Pagination
