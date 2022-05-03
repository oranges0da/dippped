module.exports = {
  darkTheme: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu"],
        karla: ["Karla"],
        quando: ["Quando"]
      },
      colors: {
        'white': '#fff',
        'red': '#ff0000',
        'cyan': '#00ffff',
        'blue': '#00BFFF',
        'gray': '#DCDCDC',
        "pink": '#FFCCCC',
        "black": '#000000'
      },
      backgroundImage: {
        "hero": "url('https://i.imgur.com/m1YTjMy.jpg?1')"
      }
    },
  },
  plugins: [],
}