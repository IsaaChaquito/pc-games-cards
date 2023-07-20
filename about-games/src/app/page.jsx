/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { rating, colorRating, pageInputPattern } from "./utils/utils";
import { getGamesByPage } from "./services/api-games";
import { validatePage } from "./utils/validations";

export default function Home() {

	const [games, setGames] = useState()
	const [totalPages, setTotalPages] = useState(0)
	const [cardsPerPage, setCardsPerPage] = useState(0)
	const [pageNumber, setPageNumber] = useState(1)
	const [actualPage, setActualPage] = useState(1)
	const [searchPage, setSearchPage] = useState('')
	

	// const showActualGenre = (genres) => {
	// 	// let index = 0; // Variable para realizar un seguimiento del índice del género actual

	// 	// const interval = setInterval(() => {
	// 	// 	if (index < genres.length) {
	// 	// 		console.log('actualGenre:', genres[index].name);
	// 	// 		index++; // Incrementar el índice para mostrar el siguiente género en la siguiente iteración
	// 	// 	} else {
	// 	// 		clearInterval(interval); // Detener el intervalo cuando se han mostrado todos los géneros
	// 	// 		// index = 0
	// 	// 	}
	// 	// }, 3000);
	// };

	const getPageOfGames = async () => {
		await getGamesByPage(pageNumber).then((res) => {
			console.log("res home", res);
			setGames(res);
			setTotalPages(Math.ceil(res.count / 20));
			setCardsPerPage(res.results.length);
			setPageNumber(Number(pageNumber));
		});
	};

	const goToPageHandler = (page) => {
		(pageNumber + page) >= 1 && setPageNumber(pageNumber + page);
	};

	useEffect(() => {
		if (pageNumber !== actualPage) {
			getPageOfGames();
			setActualPage(pageNumber);
			const audio = new Audio('./assets/sounds/bones.mp3');
    	audio.play();
		}
	}, [pageNumber, actualPage]);

	useEffect(() => {
		!games && getPageOfGames();
	}, [games]);

	const titleStyle =
		"text-rose-600 the-boys-font select-none leading-normal hover:drop-shadow-2xl mr-5 title-home shadowed drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] pl-2 pr-2 ";

	const spanDetailsStyle =
		"rating flex absolute left-[-100%] group-hover:left-1 duration-300 ";

		const inputPageHandler = (e) =>{setSearchPage(e.target.value)}

		const buttonPageHandler = () =>{
			console.log('click')
			if(validatePage(searchPage, totalPages)){
				console.log('if true')
				setPageNumber(searchPage)
			}
		}

		const isEmptySearch = () =>{
			return searchPage.length > 0
		}
	// const switchGenres = (genres, i) => {
	// 	let i = 0
	// 	// return (
	// 		setInterval(() => {
	// 			// i < genres.length-1 ? genres[i++].name : i=0
	// 			if(i < genres.length-1){
	// 				return genres[i++].name
	// 			}else{
	// 				i=0
	// 				return genres[i].name
	// 			}
	// 		}, 2000)
	// 	// )
	// }

	return (
		<main className="flex min-h-screen flex-col items-center justify-between pl-24 pr-24">
			<div className="flex flex-col md:flex-row">
				<span className={titleStyle}>is</span>
				<span className={titleStyle + "spacing-effect"}>this</span>

				<div className="flex flex-col">
					<span className={titleStyle + "flip-1"}>Entertaining?</span>
					<span className={titleStyle + "flip-2"}>Boring?</span>
				</div>
				
				{/* <audio autoplay src={Bones} type="audio/mp3"></audio> */}
			</div>

			<section className="section flex flex-wrap justify-evenly mt-40 gap-8 the-boys-font">
				{games &&
					games.results.map((game) => {
						return (
							<div key={game.id} className="card-wrapper relative">
								<span className="rate-tag" hidden={game.rating === 0}>
									<div
										className={
											"tag-edge-top " + colorRating[Math.floor(game.rating)][1]
										}
									></div>
									<div
										className={
											"tag-edge-bottom " +
											colorRating[Math.floor(game.rating)][1]
										}
									></div>
									<span className={colorRating[Math.floor(game.rating)][0]}>
										{rating[Math.floor(game.rating) - 1]}
									</span>
								</span>
								<div className="card group overflow-hidden border-spacing-3 flex flex-col text-[.8rem] text-gray-950 bg-[#ffffffd3] rounded-sm">
									<img
										className="card-background duration-300"
										src={game.background_image}
										alt="Image"
									></img>

									<span
										className={`absolute top-0 w-full h-[100%] group-hover:h-14 flex items-center justify-center text-xl text-center  pl-1 pr-1 text-[#ffffffde] bg-[#00000081] group-hover:bg-[#000000] group-hover:top-[57%] duration-300 `}
									>
										{game.name}
									</span>

									<span
										className={
											spanDetailsStyle + "bottom-[4.5rem] delay-[100ms]"
										}
									>
										Rating:&nbsp;
										{game.rating}
									</span>

									<span
										className={spanDetailsStyle + "bottom-[3rem] delay-[200ms]"}
									>
										Gendre:
										{/* {game.genres.map((genre) => {
											return genre.name + " ";
										})} */}
										{/* {showActualGenre(game.genres)} */}
										{/* <span ref={genreRef}></span> */}
									</span>

									<span
										className={
											spanDetailsStyle + "bottom-[1.5rem] delay-[300ms]"
										}
									>
										Released: {game.released}
									</span>

									<span className={spanDetailsStyle + "bottom-0 delay-[400ms]"}>
										Price: $60
									</span>
								</div>
							</div>
						);
					})}
			</section>

			<section >
				<div className="flex flex-col items-center mt-10 mb-10">				

					<span className="text-sm text-gray-700 dark:text-gray-400">
						Page{" "}
						<span className="font-semibold text-gray-900 dark:text-white">
							{actualPage}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-900 dark:text-white">
							{totalPages}
						</span>{" "}
						|{" "}
						<span className="font-semibold text-gray-900 dark:text-white">
							{cardsPerPage}
						</span>{" "}
						Entries
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
						<button onClick={buttonPageHandler} className={"absolute rounded-full w-12 h-6 bg-blue-400 bottom-[2.4rem] scale-0 duration-300" + (isEmptySearch() && ' scale-100 drop-shadow-2xl text-gray-950')}>
						Go to
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
			</section>
		</main>
	);
}
