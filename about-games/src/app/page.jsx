/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { getGamesByPage } from "./services/api-games";
import { validatePage } from "./utils/validations";
import { Cards } from "./components/cards";
import { Pagination } from "./components/pagination";
import { MyToast } from "./components/myToast/myToast";

export default function Home() {

	const [games, setGames] = useState()
	const [totalPages, setTotalPages] = useState(0)
	const [cardsPerPage, setCardsPerPage] = useState(0)
	const [pageNumber, setPageNumber] = useState(1)
	const [actualPage, setActualPage] = useState(1)
	const [searchPage, setSearchPage] = useState('')
	const [showToast, setShowToast] = useState(false)
	

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
			// console.log("res home", res);
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
			// const audio = new Audio('./assets/sounds/bones.mp3');
    	// audio.play();
		}
	}, [pageNumber, actualPage]);

	useEffect(() => {
		!games && getPageOfGames();
	}, [games]);

	const titleStyle =
		"text-rose-600 the-boys-font select-none leading-normal hover:drop-shadow-2xl mr-5 title-home shadowed drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] pl-2 pr-2 ";

		const inputPageHandler = (e) =>{setSearchPage(e.target.value)}

		const buttonPageHandler = () =>{
			if(validatePage(searchPage, totalPages)){
				setPageNumber(searchPage)
			}else{
				setShowToast(true)
				setTimeout(() => {
					setShowToast(false)
				}, 3000);
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
				<Cards games={games} />
			</section>

			<section>
				
						<Pagination 
							actualPage={actualPage}
							totalPages={totalPages}
							entries={cardsPerPage}
							goToPageHandler={goToPageHandler}
							isEmptySearch={isEmptySearch}
							inputPageHandler={inputPageHandler}
							buttonPageHandler={buttonPageHandler}
						></Pagination>

			</section>
			<MyToast
				type={'danger'}
				text={'Type a valid number of page!'}
				isOpen={showToast}
				setIsOpen={setShowToast}
				/>
		</main>
	);
}
