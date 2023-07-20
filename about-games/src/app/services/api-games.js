// import { NEXT_PUBLIC_API_KEY_RAWG, NEXT_PUBLIC_URL_RAWG } from "../config"
  
export async function getGamesByPage(number) {//20 games per page

  const response = await fetch(process.env.NEXT_PUBLIC_URL_RAWG + `?page=${number}&key=${process.env.NEXT_PUBLIC_API_KEY_RAWG}`)

  if (!response.ok) { //Error handler
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  return data

}
