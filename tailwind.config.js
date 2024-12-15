/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*html"],
  theme: {
    extend: {
      backgroundImage: {
        "my-image": "url('/src/images/imagee.jpg')",
        "deep": "url('src/images/deep.png')",
      }
    },
  },
  plugins: [],
}

