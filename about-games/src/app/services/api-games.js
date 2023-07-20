// import { API_KEY_RAWG, URL_RAWG } from "../config"

const API_KEY_RAWG = '6b81dc1ab16d467d917445c0c5147d65'
const URL_RAWG = 'https://api.rawg.io/api/games'
  
export async function getGamesByPage(number) {//20 games per page
  const response = await fetch(URL_RAWG + `?page=${number}&key=${API_KEY_RAWG}`)

  if (!response.ok) { //Error handler
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  return data

}
