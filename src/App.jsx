import Banner from "./Components/LandigPage/Banner/Banner"
import CustomColor from "./Components/LandigPage/Custom Color/CustomColor"
import CustomProducts from "./Components/LandigPage/Custom Products/CustomProducts"
import Hero from "./Components/LandigPage/Hero/Hero"
import Instagram from "./Components/LandigPage/LatestFromInsta/Instagram"
import Review from "./Components/LandigPage/Review/Review"
import SignUp from "./Components/LandigPage/SignUp/SignUp"
import TrendingCollection from "./Components/LandigPage/TrendingCollection/TrendingCollection"



function App() {


  return (
    <div>
      <Banner></Banner>
      <Hero></Hero>
      <CustomProducts></CustomProducts>
      <CustomColor></CustomColor>
      <Review></Review>
      <TrendingCollection></TrendingCollection>
      <Instagram></Instagram>
      <SignUp></SignUp>
    </div>
  )
}

export default App
