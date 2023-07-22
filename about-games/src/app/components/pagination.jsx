export const Pagination = ({
	actualPage,
	totalPages,
	entries,
	goToPageHandler,
	isEmptySearch,
	inputPageHandler,
	buttonPageHandler,
}) => {

	return (
		<div className="flex flex-col items-center mt-10 mb-10">
			<span className="text-sm text-gray-700 dark:text-gray-400">
				Page{" "}
				<span className="font-semibold text-gray-900 dark:text-white">
					{actualPage}{" "}
				</span>
				of{" "}
				<span className="font-semibold text-gray-900 dark:text-white">
					{totalPages}{" "}
				</span>
				|{" "}
				<span className="font-semibold text-gray-900 dark:text-white">
					{entries}{" "}
				</span>
				Entries{" "}
			</span>
			<div className="inline-flex mt-2 xs:mt-0">
				<button
					onClick={() => goToPageHandler(-1)}
					className={
						"flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white select-none" +
						(actualPage === 1 && " opacity-50 pointer-events-none")
					}
				>
					<svg
						className="w-3.5 h-3.5 mr-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 5H1m0 0 4 4M1 5l4-4"
						/>
					</svg>
					Prev
				</button>
				<button
					onClick={() => goToPageHandler(1)}
					className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white select-none"
				>
					Next
					<svg
						className="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</button>
			</div>

			<span className="relative text-sm text-gray-700 dark:text-gray-400 flex flex-col items-center justify-center gap-1 mt-3 select-none duration-300">
				Go to
				<button
					onClick={buttonPageHandler}
					className={
						"absolute rounded-full w-12 h-6 bg-blue-400 bottom-[2.4rem] scale-0 duration-300" +
						(isEmptySearch() && " scale-100 drop-shadow-2xl text-gray-950")
					}
				>
					Go
				</button>
				<input
					type="text"
					onChange={inputPageHandler}
					placeholder="page #"
					title={`Debe ser un número del 1 al ${totalPages}`}
					className={
						"flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white w-[4.5rem] text-center mt-1"
					}
				></input>
			</span>
		</div>
	);

};
