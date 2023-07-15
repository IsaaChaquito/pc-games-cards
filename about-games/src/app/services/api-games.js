

const API_KEY_RAWG = '6b81dc1ab16d467d917445c0c5147d65'
const URL_RAWG = 'https://api.rawg.io/api/games'

const URL_TWITCH_AUTH = 'https://id.twitch.tv/oauth2/token'

const client_id= '70hdszaetwxz9iywhh4j976r4obgqj'

const client_secret='vit0tsz8c1qs9h7u519yjc5elmyx72'

const grant_type= 'client_credentials'

let cursor = ''

  
export async function getGamesPerPage(number) {
  const response = await fetch(URL_RAWG + `?page=${number}&key=${API_KEY_RAWG}`)

  if (!response.ok) { //Error handler
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  // console.log('res: 1', data) 

  return data

}

const getTwitchToken = async () =>{
  const response = await fetch(`${URL_TWITCH_AUTH}?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }})
  
  if (!response.ok) { //Error handler
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()
  console.log('token twitch:', data)

  // localStorage.setItem('token_twitch', data.access_token)

  // return data
}


// getTwitchToken()

const getGameInfo = async () => {
  try {

    const token_twitch = localStorage.getItem('token_twitch')

    // const response = await fetch(`https://api.twitch.tv/helix/games?id=20`, {
    const response = await fetch(`https://api.twitch.tv/helix/games/top?first=100`, {
      headers: {
        'Client-ID': client_id,
        'Authorization': `Bearer ${token_twitch}`,
      }
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos del juego');
    }

    const data = await response.json();
    cursor = data.pagination.cursor
    console.log('data', data); // Aquí puedes acceder a los datos del juego.
  } catch (error) {
    console.error(error);
  }
};

getGameInfo();



