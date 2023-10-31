import Main from "../Componenets/Main"
import requests from "../Componenets/Requests"
import Row from "../Componenets/Row"
const Home = () => {
  return (
  <>
  <Main/>
  <Row  title='Up Coming' fetchUrl={requests.requestUpcoming}/>
        <Row  title='Popular' fetchUrl={requests.requestPopular}/>
        <Row  title='Trending' fetchUrl={requests.requestTrending}/>
        <Row  title='TopRated' fetchUrl={requests.requestTopRated}/>
        <Row  title='Horror' fetchUrl={requests.requestHorror}/>
  </>
  )
}

export default Home
