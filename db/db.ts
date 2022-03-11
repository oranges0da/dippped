type productsType = {
  id: number,
  title: string,
  desc: string,
  price: number,
  price_id: string,
  images: string[],
}[]

const products: productsType = [
  {
    id: 1,
    title: "Heart Box (White Chocolate)",
    desc: "Surprise a loved one with this heartwarming gift. Made with belgian white chocolate.",
    price: 40,
    price_id: 'price_1KbvmtKdGoM4dCrl56DfkxfC',
    images: [
      "https://i.imgur.com/WTOoaIL.jpg",
      "https://i.imgur.com/qmWOcwb.jpg",
      "https://i.imgur.com/kuC24Ig.jpg",
      "https://i.imgur.com/mpfO7bt.jpg"
    ]
  }
]

export default products