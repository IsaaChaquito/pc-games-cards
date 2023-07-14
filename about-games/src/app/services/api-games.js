

const API_KEY = '6b81dc1ab16d467d917445c0c5147d65'
const URL = 'https://api.rawg.io/api/games'

  
export async function getGamesPerPage(number) {
  const response = await fetch(URL + `?page=${number}&key=${API_KEY}`)

  if (!response.ok) { //Error handler
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  // console.log('res: 1', data) 

  return data

}



