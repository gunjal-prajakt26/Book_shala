import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kwxv98w0/book/l/z/y/do-epic-shit-original-imag9gcfcwfvwtep.jpeg?q=70",
    name: "Do Epic Shit",
    author: "Ankur Warikoo",
    price: 219,
    originalPrice: 399,
    isBestSeller: true,
    category: "Self Help",
    rating: 4.6,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/jpu324w0/book/0/9/0/believe-in-yourself-original-imafbzz2h7yfg5zz.jpeg?q=70",
    name: "Believe In Yourself",
    author: "Joseph",
    price: 250,
    originalPrice: 1200,
    isBestSeller: false,
    category: "Self Help",
    rating: 4,
  },

  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kokdci80/regionalbooks/t/x/c/zero-to-one-original-imag2zzngtfasecu.jpeg?q=70",
    name: "Zero To One",
    author: "Peter Thiel",
    price: 50,
    originalPrice: 500,
    isBestSeller: false,
    category: "Fiction",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70",
    name: "Atomic Habits",
    author: "James Clear",
    price: 390,
    originalPrice: 790,
    isBestSeller: true,
    category: "Self Help",
    rating: 4.8,
  },

  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/0/6/q/ikigai-original-imag7kc7q5ugy2km.jpeg?q=70",
    name: "IKIGAI",
    author: "Hector Garcia",
    price: 600,
    originalPrice: 1500,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kgwld3k0/book/1/9/4/rich-dad-poor-dad-original-imafxf885pytvycy.jpeg?q=70",
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyoski",
    price: 350,
    originalPrice: 500,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 2,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kirr24w0-0/book/k/k/g/the-monk-who-sold-his-ferrari-original-imafyhgacv9jrgv7.jpeg?q=70",
    name: "Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    price: 119,
    originalPrice: 249,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/ki96c280-0/book/3/p/n/one-indian-girl-original-imafy2zrymfbtygz.jpeg?q=70",
    name: "One Indian Girl",
    author: "Chetan Bhagat",
    price: 157,
    originalPrice: 195,
    isBestSeller: false,
    category: "Fiction",
    rating: 3,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kjbr8280-0/book/z/r/9/learning-how-to-fly-original-imafyx6zuhvfhv94.jpeg?q=70",
    name: "Learning How To Fly",
    author: "A.P.J Abdul Kalam",
    price: 163,
    originalPrice: 205,
    isBestSeller: false,
    category: "Fiction",
    rating: 2.5,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kwpam4w0/book/r/a/r/-original-imag9bv6bzstsjgk.jpeg?q=70",
    name: "400 Days",
    author: "Chetan Bhagat",
    price: 699,
    originalPrice: 999,
    isBestSeller: false,
    category: "Self Help",
    rating: 4,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/khxqt8w0-0/book/x/o/v/attitude-is-everything-change-your-attitude-change-your-life-original-imafxtvesfbk8rje.jpeg?q=70",
    name: "Attitude Is Everything",
    author: "Keller Jeff",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Self Help",
    rating: 3.5,
  },
  {
    _id: uuid(),
    img: "https://rukminim1.flixcart.com/image/612/612/kufuikw0/book/p/3/d/man-s-search-for-meaning-original-imag7kerxrpweqj9.jpeg?q=70",
    name: "Man's Search For Meaning",
    author: "Franky Viktor",
    price: 243,
    originalPrice: 349,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 1,
  },
];