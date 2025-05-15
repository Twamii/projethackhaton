import book1 from "../../images/book1.png"
import book2 from "../../images/book2.png";
import book3 from "../../images/book3.png";
import book4 from "../../images/book4.png";
import book5 from "../../images/book5.png";
import book6 from "../../images/book6.png";
import book7 from "../../images/book7.png";
// import book8 from "../images/book8.png";
import book9 from "../../images/book9.png";
import book10 from "../../images/book10.png";
import book11 from "../../images/book11.png";
import book12 from "../../images/book12.png";
import book13 from "../../images/book13.png";
import book14 from "../../images/book14.png";
import book15 from "../../images/book15.png";
import book16 from "../../images/book16.png";
import book17 from "../../images/book17.png";
import book18 from "../../images/book18.png";
import book19 from "../../images/book19.png";
import book20 from "../../images/book20.png";
import book21 from "../../images/book21.png";
import book22 from "../../images/book22.png";
import book23 from "../../images/book23.png";
import book24 from "../../images/book24.png";
import book25 from "../../images/book25.png";
import book26 from "../../images/book26.png";
import book27 from "../../images/book27.png";
import book28 from "../../images/book28.png";
import book29 from "../../images/book29.png";
import book30 from "../../images/book30.png";
import book31 from "../../images/book31.png";
import book32 from "../../images/book32.png";
import book33 from "../../images/book33.png";
import book34 from "../../images/book34.png";


const bookImages = {
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book9,
  book10,
  book11,
  book12,
  book13,
  book14,
  book15,
  book16,
  book17,
  book18,
  book19,
  book20,
  book21,
  book22,
  book23,
  book24,
  book25,
  book26,
  book27,
  book28,
  book29,
  book30,
  book31,
  book32,
  book33,
  book34
};

const books = [
  {
    id: 1,
    image: book30,
    title: "Hidden Love",
    genre: "ROMANCE, DRAMA",
    author: "Ndemi Otieno",
    year: "2019",
    price: "$20.00",
    oldPrice: "$25.00",
    synopsis: ""
  },
  {
    id: 2,
    image: book31,
    title: "Story of Two friends",
    genre: "DRAMA",
    author: "Avery Davis",
    year: "2021",
    price: "$15.00",
    oldPrice: "$20.00",
    synopsis: ""
  },
    {
    id: 3,
    image: book32,
    title: "The Lost Kingdom",
    genre: "ACTION, DRAMA, ADVENTURE",
    author: "Claudia Wilson",
    year: "2022",
    price: "$14.99",
    oldPrice: "$17.99",
    synopsis: ""
  },
  {
    id: 4,
    image: book34,
    title: "Ranch",
    genre: "HORROR, ACTION",
    author: "Olivia Wilson",
    year: "2025",
    price: "$19.99",
    oldPrice: "$25.99",
    synopsis: ""
  },

];


const slides = [
  "Special 50% Off",
  "Special 40% Off",
  "Special 30% Off",
  "Special 20% Off",
];

const carouselImages = [
  { src: book1, alt: "Photo 1", title: "Soul" },
  { src: book2, alt: "Photo 2", title: "The Story of One Love" },
  { src: book3, alt: "Photo 3", title: "Silence" },
  { src: book5, alt: "Photo 4", title: "Abandoned Kingdom" },
  { src: book7, alt: "Photo 5", title: "The Story of a Girl" },
];

const recomendedImages = [
  { src: book9, alt: "Photo 1" },
  { src: book10, alt: "Photo 2" },
  { src: book11, alt: "Photo 3" }
];

const recomendedImagesTwo = [
  { src: book12, alt: "Photo 1" },
  { src: book13, alt: "Photo 2" },
  { src: book14, alt: "Photo 3" }
];

const popularImages = [
  { src: book15, alt: "Photo 1" },
  { src: book16, alt: "Photo 2" },
  { src: book17, alt: "Photo 3" }
];

const popularImagesTwo = [
  { src: book18, alt: "Photo 1" },
  { src: book19, alt: "Photo 2" },
  { src: book20, alt: "Photo 3" }
];

const cardImages = [
  { src: book3, alt: "Photo 1", title: "Silence" },
  { src: book4, alt: "Photo 2", title: "The Story of The Boy" },
  { src: book6, alt: "Photo 3", title: "Book of Prayer" }
]

const HomePageData = {
  slides,
  carouselImages,
  recomendedImages,
  recomendedImagesTwo,
  popularImages,
  popularImagesTwo,
  cardImages,
  bookImages,
  books
};

export default HomePageData;