import React, { useState, useEffect } from "react";
import NavCard from "./NavCard.js";
import "../Styles/NavOption.css";

const NavOption = ({
  miPhones,
  redmiPhone,
  tv,
  laptop,
  home,
  fitnessAndLifeStyle,
  audio,
  accessories,
}) => {
  console.log(audio);

  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/miphone") {
      return setMiPhoneToggle(true);
    }

    if (window.location.pathname === "/redmiphone") {
      return setRedmiPhoneToggle(true);
    }
    if (window.location.pathname === "/tv") {
      return setTvToggle(true);
    }
    if (window.location.pathname === "/laptops") {
      return setLaptopToggle(true);
    }
    if (window.location.pathname === "/lifestyle") {
      return setFitnessToggle(true);
    }
    if (window.location.pathname === "/home") {
      return setHomeToggle(true);
    }
    if (window.location.pathname === "/audio") {
      return setAudioToggle(true);
    }
    if (window.location.pathname === "/accessories") {
      return setAccessoriesToggle(true);
    }
  }, []);

  return (
    <div className="navOption">
      {miPhoneToggle
        ? miPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            ></NavCard>
          ))
        : null}
      {redmiPhoneToggle
        ? redmiPhone.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            ></NavCard>
          ))
        : null}
      {tvToggle
        ? tv.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            ></NavCard>
          ))
        : null}
      {laptopToggle
        ? laptop.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            ></NavCard>
          ))
        : null}
      {homeToggle
        ? home.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            ></NavCard>
          ))
        : null}
      {fitnessToggle
        ? fitnessAndLifeStyle.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            ></NavCard>
          ))
        : null}
      {audioToggle
        ? audio.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            ></NavCard>
          ))
        : null}

      {accessoriesToggle
        ? accessories.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            ></NavCard>
          ))
        : null}
    </div>
  );
};

export default NavOption;
