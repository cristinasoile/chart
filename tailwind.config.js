/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['DM Serif Text'],
        'sans': ['Montserrat'],
      },
      colors: {
        'fundo-claro': '#f2f2f2',
        'roxinho': '#857DA8',
        'roxo':'#6278F7',
        'texto': '#212121',
        'verdinho': '#D9F7E9',
        'verde': '#57C278',
        'backGround':'#F0F0F0',
      },
      boxShadow: {
        'sombra': '8px 8px 16px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'metade':'50%'
      },
      spacing: {
        'negativo':'-50px'
      },
      backgroundImage: {
        'rodape': "url('/public/imagens/minhas_imagens/Rodapé.png')",
      },
      screens: {
        'tiny': '320px',
        'little': '425px',
      },
    },
  },
  plugins: [],
}

