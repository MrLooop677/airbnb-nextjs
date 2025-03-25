import Banner from "./components/banner";
import Explore from "./components/explore";
import Footer from "./components/footer";
import GreatestOutdoors from "./components/greatest-outdoor";
import Live from "./components/live";

export default function Home() {
  return <>
  <Banner/>
  <Explore/>
  <Live/>
  <GreatestOutdoors
          img='https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          title='The Greatest Outdoors'
          desc='Wishlists curated by Airbnb'
          linkText='Get Inspired'
        />
  <Footer/>
  </>;
}
