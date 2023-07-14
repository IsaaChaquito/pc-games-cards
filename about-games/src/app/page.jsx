'use client'

// export const dynamic = 'force-dynamic'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'default-no-store'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

import React, { useEffect, useState } from 'react'
import './assets/fonts/fonts.css'
import { getGamesPerPage  } from './services/api-games'

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
            <div key={game.id} className='card border-spacing-3 border-green-400 border-4 flex flex-col'>
            <img className='card-background' src={game.background_image} alt='Image'></img>
            <img className='card-background' src={game.short_screenshots[5].image} alt='Image'></img>
            <span className='card-title'>{game.name}</span>
            <span className='rating'>{game.rating}</span>
            <div className='card-details flex flex-col'>
            <span className='flex text-sm'>Gendre:
              {game.genres.map((genre) =>{
                return genre.name + ' '
              })}
            </span>
              <span>{game.released}</span>
              <span>Price: 60$</span>
            </div>
          </div>
          )
          
        })}
      </section>

    </main>
  )
}
