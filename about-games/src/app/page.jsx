/* eslint-disable @next/next/no-img-element */
'use client'

// export const dynamic = 'force-dynamic'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

import React, { useEffect, useState } from 'react'
import './assets/fonts/fonts.css'
import { getGamesPerPage } from './services/api-games'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function Home() {

  const [games, setGames] = useState()

  const getFirstPageGames = async () =>{
    await getGamesPerPage(1)
    .then(res =>{
      console.log('res home', res)
      setGames(res)
    })
  }

  useEffect(() => {
    !games && getFirstPageGames()
  }, [games])
  
    const rating = [
      '⭐',
      '⭐⭐',
      '⭐⭐⭐',
      '⭐⭐⭐⭐',
      '⭐⭐⭐⭐⭐',
    ]

    const colorRating = [//background color depending the game rating
      'one-star',
      'tow-stars',
      'three-stars',
      'four-stars',
      'five-stars',
    ]

  const titleStyle = "text-rose-600 the-boys-font select-none leading-normal hover:drop-shadow-2xl mr-5 title-home shadowed drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] pl-2 pr-2 "

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-col md:flex-row'>

        <span className={titleStyle}>is</span>
        <span className={titleStyle + 'spacing-effect'}>this</span>

        <div className='flex flex-col'>
          <span className={titleStyle + 'flip-1'}>Entertaining?</span>
          <span className={titleStyle + 'flip-2'}>Boring?</span>
        </div>
      </div>

      <section className='section flex flex-wrap justify-evenly mt-5 gap-8 the-boys-font'>
        {games && games.results.map((game) =>{ 
          return(
            <div key={game.id} className='card group overflow-hidden border-spacing-3 flex flex-col text-[.8rem] text-gray-950 bg-[#ffffffd3] rounded-sm '>


              <img className='card-background ' src={game.background_image} alt='Image'></img>

              <span className={`absolute top-0 w-full self-center text-xl text-center pl-1 pr-1 group-hover:bg-gray-950 group-hover:text-[#ffffffd3] bg-[#ffffffd3]  group-hover:top-[57%] duration-300 `}>{game.name} </span>

              <div className='absolute bottom-[-100px] flex flex-col w-full pl-2 pr-2 z-10 group-hover:bottom-0 duration-300 '>
                <div className='card-details flex flex-col mt-10'>
                  <span className='rating flex'>
                    {game.rating}
                    {rating[Math.floor(game.rating)-1]}
                  </span>
                  <span>Gendre:
                    {game.genres.map((genre) =>{
                      return genre.name + ' '
                    })}
                  </span>
                  <span>Released: {game.released}</span>
                  <span>Price: $60</span>
              </div>

              </div>
            </div>
          )
          
        })}
      </section>

    </main>
  )
}
