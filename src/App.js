import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import NavOption from "./components/NavOption.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <PreNavbar></PreNavbar>
      <Navbar></Navbar>
      <NavOption
        miPhones={data.miPhones}
        redmiPhone={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        accessories={data.accessories}
        audio={data.audio}
      ></NavOption>
      <Slider start={data.banner.start}></Slider>
      <Offers offer={data.offer}></Offers>
      <Heading text="STAR PRODUCTS"></Heading>
      <StarProduct starProduct={data.starProduct}></StarProduct>
      <Heading text="HOT ACCESSORIES"></Heading>
      <HotAccessoriesMenu></HotAccessoriesMenu>
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
        <Route
          exact
          path="/Home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
        <Route
          exact
          path="/lifeStyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS"></Heading>

      <ProductReviews productReviews={data.productReviews}></ProductReviews>
      <Heading text="VIDEOS"></Heading>
      <Videos videos={data.videos}></Videos>
      <Heading text="IN THE PRESS"></Heading>
      <Banner banner={data.banner}></Banner>

      <Footer footer={data.footer}></Footer>
    </Router>
  );
}

export default App;
