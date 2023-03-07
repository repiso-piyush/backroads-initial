import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fa-twitter" },
  { id: 2, href: "https://www.facebook.com", icon: "fa-facebook" },
  { id: 3, href: "https://www.squarespace.com", icon: "fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    name: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitAsperiores, official",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    name: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitAsperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    name: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elitAsperiores, official",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",

    icon: "fas fa-map",
    location: "china",
    duration: "6",
    cost: "2100",
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",

    icon: "fas fa-map",
    location: "indonesia",
    duration: "11",
    cost: "1400",
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",

    icon: "fas fa-map",
    location: "hong kong",
    duration: "8",
    cost: "5000",
  },
];
