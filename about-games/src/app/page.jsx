/* eslint-disable @next/next/no-img-element */
"use client";

// export const dynamic = 'force-dynamic'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

import React, { useEffect, useState } from "react";
import "./assets/fonts/fonts.css";
import { getGamesPerPage } from "./services/api-games";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {

	const [games, setGames] = useState();

	const getFirstPageGames = async () => {
		await getGamesPerPage(1).then((res) => {
			console.log("res home", res);
			setGames(res);
		});
	};

	useEffect(() => {
		!games && getFirstPageGames();
	}, [games]);

	const rating = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

	//background color depending in the game rating
	const colorRating = [
		['one-star', 'one-star-edges'],
		['tow-stars', 'tow-stars-edges'],
		['three-stars', 'three-stars-edges'],
		['four-stars', 'four-stars-edges'],
		['five-stars', 'five-stars-edges']
	];


	const titleStyle =
		"text-rose-600 the-boys-font select-none leading-normal hover:drop-shadow-2xl mr-5 title-home shadowed drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] pl-2 pr-2 ";

	const spanDetailsStyle =
		"rating flex absolute left-[-100%] group-hover:left-1 duration-300 ";

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-col md:flex-row">
				<span className={titleStyle}>is</span>
				<span className={titleStyle + "spacing-effect"}>this</span>

				<div className="flex flex-col">
					<span className={titleStyle + "flip-1"}>Entertaining?</span>
					<span className={titleStyle + "flip-2"}>Boring?</span>
				</div>
			</div>

			<section className="section flex flex-wrap justify-evenly mt-40 gap-8 the-boys-font">
				{games &&
					games.results.map((game) => {
						return (
							<div className="card-wrapper relative">
									<span className="rate-tag">
										<div className={"tag-edge-top " + colorRating[Math.floor(game.rating)][1]}></div>
										<div className={"tag-edge-bottom " + colorRating[Math.floor(game.rating)][1]}></div>
										<span className={colorRating[Math.floor(game.rating)][0]}>
											{rating[Math.floor(game.rating) - 1]}
										</span>
									</span>
								<div
									key={game.id}
									className="card group overflow-hidden border-spacing-3 flex flex-col text-[.8rem] text-gray-950 bg-[#ffffffd3] rounded-sm"
								>

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
										className={spanDetailsStyle + "bottom-[3rem] delay-[100ms]"}
									>
										Rating:&nbsp;
										{game.rating}
									</span>

									<span
										className={spanDetailsStyle + "bottom-[2rem] delay-[200ms]"}
									>
										Gendre:
										{game.genres.map((genre) => {
											return genre.name + " ";
										})}
									</span>

									<span
										className={spanDetailsStyle + "bottom-[1rem] delay-[300ms]"}
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
		</main>
	);
}
