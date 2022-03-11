type productsType = {
  id: number,
  name: string,
  desc: string,
  price: number,
  stripe_price_id: string,
  images: string[],
}[]

const products: productsType = [
  {
    id: 1,
    name: "Heart Box (White Chocolate)",
    desc: "Surprise a loved one with this heartwarming gift. Made with belgian white chocolate.",
    price: 40,
    stripe_price_id: 'price_1KbvmtKdGoM4dCrl56DfkxfC',
    images: [
      "https://i.imgur.com/WTOoaIL.jpg",
      "https://i.imgur.com/qmWOcwb.jpg",
      "https://i.imgur.com/kuC24Ig.jpg",
      "https://i.imgur.com/mpfO7bt.jpg"
    ]
  },
  {
    id: 2,
    name: "White Chocolate Box",
    desc: "Surprise a loved one or someone important to you with our white chocolate dipped berries with nice designs on them in a minimalistic box.",
    price: 20,
    stripe_price_id: 'price_1KbwViKdGoM4dCrlcxyt3oCK',
    images: [
      "https://i.imgur.com/27Js6h4.jpg",
      "https://i.imgur.com/PWUgSwK.jpg",
      "https://i.imgur.com/27Js6h4.jpg"
    ]
  },
  {
    id: 3,
    name: "Mini Wedding Box",
    desc: "Surprise a loved one or someone important to you with our mini wedding box, perfect for two. A sweet little gift for a friend.",
    price: 15,
    stripe_price_id: 'price_1KbwXDKdGoM4dCrlETSYEbrb',
    images: [
      "https://i.imgur.com/lai8lFm.jpg",
      "https://i.imgur.com/dEIyXB6.jpg",
      "https://i.imgur.com/lai8lFm.jpg"
    ]
  },
  {
    id: 4,
    name: "Wedding Box",
    desc: "A perfect gift for the loved one in your life. Made with belgian white and milk chocolate.",
    price: 30,
    stripe_price_id: 'price_1KbwXqKdGoM4dCrlHx7rItAo',
    images: [
      "https://i.imgur.com/2FHNmM9.jpg",
      "https://i.imgur.com/EYplbFn.jpg",
      "https://i.imgur.com/nTDkrgD.jpg"
    ]
  },
  {
    id: 5,
    name: "Chocolate Lover's Box",
    desc: "A perfect gift for a chocolate lover in your life. Made with belgian milk and dark chocolate.",
    price: 40,
    stripe_price_id: 'price_1KbwYNKdGoM4dCrlG2GaBmXl',
    images: [
      "https://i.imgur.com/QWoIjZa.jpg",
      "https://i.imgur.com/910faBS.jpg",
      "https://i.imgur.com/87XyYFa.jpg"
    ]
  },
  {
    id: 6,
    name: "Chocolate Lover's Box (Heart Box)",
    desc: "A perfect gift for a chocolate lover in your life, now in a heart box! Made with belgian milk and dark chocolate.",
    price: 40,
    stripe_price_id: 'price_1KbwYsKdGoM4dCrlaNGjtxos',
    images: [
      "https://i.imgur.com/m1YTjMy.jpg",
      "https://i.imgur.com/7dvsWSS.jpg",
      "https://i.imgur.com/dptnwVz.jpg"
    ]
  },
  {
    id: 7,
    name: "Milk and White Chocolate Box",
    desc: "Gift a box full of milk and white chocolate dipped berries to a loved one or friend.",
    price: 30,
    stripe_price_id: 'price_1KbwZMKdGoM4dCrlmH2Fcl92',
    images: [
      "https://i.imgur.com/Sdr4BEF.jpg",
      "https://i.imgur.com/va1o8Qa.jpg",
      "https://i.imgur.com/HTntTHj.jpg"
    ]
  },
  {
    id: 8,
    name: "Milk and White Choclate Box (Heart Box)",
    desc: "Gift a box full of milk and white chocolate dipped berries in a heart box to a loved one or friend.",
    price: 30,
    stripe_price_id: 'price_1KbwZuKdGoM4dCrlbvlICm9W',
    images: [
      "https://i.imgur.com/y7YuvZd.jpg",
      "https://i.imgur.com/XvW6PUz.jpg"
    ]
  },
  {
    id: 9,
    name: "Wedding Box (White Box)",
    desc: "Celebrate a wedding, anniversary, or any other milestone with our wedding set, in a white and tied box.",
    price: 30,
    stripe_price_id: 'price_1KbwaSKdGoM4dCrlLBBYcXPq',
    images: [
      "https://i.imgur.com/vVbhfth.jpg",
      "https://i.imgur.com/1qfUSWV.jpg",
    ]
  },
  {
    id: 10,
    name: "Wedding Box (Heart Box)",
    desc: "A perfect gift for the loved one in your life, now in a heart box. Made with belgian white and milk chocolate.",
    price: 40,
    stripe_price_id: 'price_1Kbwb1KdGoM4dCrlZ58sj78F',
    images: [
      "https://i.imgur.com/4X8deEs.jpg",
      "https://i.imgur.com/ix6ivob.jpg",
      "https://i.imgur.com/W766LSS.jpg"
    ]
  }
]

export default products