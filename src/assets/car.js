import Chori from "../assets/4Chori.png";
import BigChori from "../assets/4ChoriBig.png";
import aboutCar from "../assets/aboutCar.png";
import bmw from "../assets/bmw.png";
import brand1 from "../assets/brand1.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import CarBox from "../assets/car_box.png";
import face from "../assets/face.png";
import FeacturedCar from "../assets/FeacturedCar.png";
import featured1 from "../assets/featured1.png";
import featured2 from "../assets/featured2.png";
import featured3 from "../assets/featured3.png";
import featured5 from "../assets/featured5.png";
import featured6 from "../assets/featured6.png";
import ferrariLogo from "../assets/ferrariLogo.png";
import ferrBig from "../assets/ferrBig.png";
import homeCarImage from "../assets/homeCarImage.png";
import lam from "../assets/lam.png";
import mini_logo from "../assets/mini_logo.png";
import raceIcon from "../assets/raceIcon.png";
import insta from "../assets/insta.png";
import startBtn from "../assets/startBtn.png";
import SubImg from "../assets/subscribeImg.png";
import tesla from "../assets/tesla.png";
import teslaLogo from "../assets/teslaLogo.png";
import tri from "../assets/tri.png";
import twt from "../assets/twt.png";
import upingIcon from "../assets/upingIcon.png";
import webLogo from "../assets/webLogo.png";
import burger from "../assets/burger.png";
import bigSvg from "../assets/bigSvg.svg";
import CrossIcon from "../assets/close.png";
import km from "../assets/km.png";
import temp from "../assets/temp.png";
import power from "../assets/power.png";
import elelric from "../assets/elelric.png";
import Map from "../assets/Map.png";
import bigBG from "../assets/bgNew.png";
import bgi from "../assets/bgi.svg";

const car = {
  CarBox,
  bgi,
  bigBG,
  CrossIcon,
  Map,
  km,
  elelric,
  temp,
  power,
  burger,
  bigSvg,
  bmw,
  aboutCar,
  BigChori,
  brand1,
  brand3,
  brand4,
  brand5,
  Chori,
  webLogo,
  upingIcon,
  twt,
  tri,
  tesla,
  teslaLogo,
  SubImg,
  startBtn,
  insta,
  raceIcon,
  mini_logo,
  lam,
  homeCarImage,
  ferrBig,
  ferrariLogo,
  featured1,
  featured2,
  featured3,
  featured5,
  featured6,
  FeacturedCar,
  face,
};

const feacturedCar = [
  {
carImage:featured1,
company:"Tesla",
modelName:"Model X",
price:"$98,599",
},
{
  carImage:featured2,
  company:"Tesla",
  modelName:"Model 3",
  price:"$45,900",
},
{
  carImage:featured3,
  company:"Audi",
  modelName:"E-tron",
  price:"$175,000",
},
{
  carImage:featured5,
  company:"Porsche",
  modelName:"BoxSter",
  price:"$126,000",
},
{
  carImage:featured6,
  company:"Porsche",
  modelName:"Panamara",
  price:"$138,599",
},
]
const proshi = [
  {
    _id: "hfie9",
    company: "Porsche",
    modelName: "Panamera",
    carImage: brand1,
    price: "$138,599",
    power: "Electric",
    time: "3.7 sec",
    speed: "356 km/h",
    description: "The Porsche Panamera combines luxury and performance seamlessly, offering an all-electric powertrain with exhilarating acceleration and top-notch comfort for long drives.",
    seats: 5,
    transmission: "Automatic",
    range: "500 km",
    rating: 4.8,
    weight: "2,045 kg",
    dimensions: { length: "5,049 mm", width: "1,937 mm", height: "1,423 mm" },
    batteryCapacity: "93.4 kWh",
    torque: "850 Nm",
    warranty: "8 years/160,000 km",
  },
  {
    _id: "hfi3dd9",
    company: "Porsche",
    modelName: "Taycan",
    carImage: brand3,
    price: "$144,599",
    power: "Electric",
    time: "3.7 sec",
    speed: "356 km/h",
    description: "The Porsche Taycan is an innovative electric sports car with cutting-edge technology, sleek design, and unmatched handling for an electrifying driving experience.",
    seats: 4,
    transmission: "Automatic",
    range: "450 km",
    rating: 4.9,
    weight: "2,295 kg",
    dimensions: { length: "4,963 mm", width: "1,966 mm", height: "1,381 mm" },
    batteryCapacity: "79.2 kWh",
    torque: "774 Nm",
    warranty: "8 years/160,000 km",
  },
  {
    _id: "hfiyei03",
    company: "Porsche",
    modelName: "Turbo S Cross",
    carImage: brand4,
    price: "$187,599",
    power: "Electric",
    time: "3.7 sec",
    speed: "356 km/h",
    description: "The Turbo S Cross Turismo offers versatility and style, with an electric drivetrain that ensures sustainable performance without compromising Porsche's iconic speed.",
    seats: 5,
    transmission: "Automatic",
    range: "470 km",
    rating: 4.7,
    weight: "2,310 kg",
    dimensions: { length: "4,974 mm", width: "1,967 mm", height: "1,409 mm" },
    batteryCapacity: "93.4 kWh",
    torque: "1,050 Nm",
    warranty: "8 years/160,000 km",
  },
  {
    _id: "hfie3fr",
    company: "Porsche",
    modelName: "Cayman",
    carImage: brand5,
    price: "$138,599",
    power: "Electric",
    time: "3.7 sec",
    speed: "356 km/h",
    description: "Compact yet powerful, the Porsche Cayman delivers unmatched agility and electric performance for those who love the thrill of precision driving.",
    seats: 2,
    transmission: "Manual",
    range: "420 km",
    rating: 4.6,
    weight: "1,710 kg",
    dimensions: { length: "4,379 mm", width: "1,801 mm", height: "1,295 mm" },
    batteryCapacity: "64 kWh",
    torque: "500 Nm",
    warranty: "8 years/160,000 km",
  },
  {
    _id: "hfie4rfg",
    company: "Porsche",
    modelName: "Turbo S",
    carImage: brand1,
    price: "$225,599",
    power: "Electric",
    time: "3.7 sec",
    speed: "356 km/h",
    description: "The Porsche Turbo S defines high-performance luxury with an electric drivetrain, boasting exceptional speed and acceleration for an unforgettable drive.",
    seats: 4,
    transmission: "Automatic",
    range: "480 km",
    rating: 5.0,
    weight: "2,295 kg",
    dimensions: { length: "4,963 mm", width: "1,966 mm", height: "1,381 mm" },
    batteryCapacity: "93.4 kWh",
    torque: "1,050 Nm",
    warranty: "8 years/160,000 km",
  }
];


const smallIcons = [
  
  {
    company:"Porsche",
    carImage:Chori,   
  },
  {
    company:"Audi",
    carImage:ferrariLogo,
  },
  {
    company:"Tesla",
    carImage:teslaLogo,
  }
]
  

export {feacturedCar, car,smallIcons,proshi}