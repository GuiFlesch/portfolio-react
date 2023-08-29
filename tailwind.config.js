/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        "animar-cursor": {
          "0%": {
            color: "rgb(124 58 237)"
          },
          "100%": "rgba(0,0,0,0)",
        },
        "hrAnimation": {
          "0%": {
            color: "rgb(124 58 237)"
          },
          "100%": "rgba(0,0,0,0)",
        },
        "hrAnimation": {
          "0%": {
            background: "linear-gradient(90deg, #4F41F6 0%, #C6C6C6 0%, #4F41F6 10%)"
          },
          "3%": {
            background: "linear-gradient(90deg, #4F41F6 3%, #C6C6C6 4%, #4F41F6 16%)"
          },
          "5%": {
            background: "linear-gradient(90deg, #4F41F6 5%, #C6C6C6 7%, #4F41F6 18%)"
          },
          "7%": {
            background: "linear-gradient(90deg, #4F41F6 7%, #C6C6C6 10%, #4F41F6 20%)"
          },
          "9%": {
            background: "linear-gradient(90deg, #4F41F6 9%, #C6C6C6 13%, #4F41F6 22%)"
          },
          "11%": {
            background: "linear-gradient(90deg, #4F41F6 11%, #C6C6C6 16%, #4F41F6 23%)"
          },
          "13%": {
            background: "linear-gradient(90deg, #4F41F6 13%, #C6C6C6 19%, #4F41F6 25%)"
          },
          "15%": {
            background: "linear-gradient(90deg, #4F41F6 15%, #C6C6C6 22%, #4F41F6 27%)"
          },
          "17%": {
            background: "linear-gradient(90deg, #4F41F6 17%, #C6C6C6 25%, #4F41F6 29%)"
          },
          "19%": {
            background: "linear-gradient(90deg, #4F41F6 19%, #C6C6C6 28%, #4F41F6 31%)"
          },
          "21%": {
            background: "linear-gradient(90deg, #4F41F6 21%, #C6C6C6 31%, #4F41F6 33%)"
          },
          "23%": {
            background: "linear-gradient(90deg, #4F41F6 23%, #C6C6C6 33%, #4F41F6 35%)"
          },
          "25%": {
            background: "linear-gradient(90deg, #4F41F6 25%, #C6C6C6 35%, #4F41F6 37%)"
          },
          "27%": {
            background: "linear-gradient(90deg, #4F41F6 27%, #C6C6C6 38%, #4F41F6 39%)"
          },
          "29%": {
            background: "linear-gradient(90deg, #4F41F6 29%, #C6C6C6 41%, #4F41F6 41%)"
          },
          "31%": {
            background: "linear-gradient(90deg, #4F41F6 31%, #C6C6C6 44%, #4F41F6 43%)"
          },
          "33%": {
            background: "linear-gradient(90deg, #4F41F6 33%, #C6C6C6 47%, #4F41F6 45%)"
          },
          "35%": {
            background: "linear-gradient(90deg, #4F41F6 35%, #C6C6C6 50%, #4F41F6 47%)"
          },
          "37%": {
            background: "linear-gradient(90deg, #4F41F6 37%, #C6C6C6 53%, #4F41F6 49%)"
          },
          "39%": {
            background: "linear-gradient(90deg, #4F41F6 39%, #C6C6C6 56%, #4F41F6 51%)"
          },
          "41%": {
            background: "linear-gradient(90deg, #4F41F6 41%, #C6C6C6 59%, #4F41F6 53%)"
          },
          "43%": {
            background: "linear-gradient(90deg, #4F41F6 43%, #C6C6C6 62%, #4F41F6 55%)"
          },
          "45%": {
            background: "linear-gradient(90deg, #4F41F6 45%, #C6C6C6 65%, #4F41F6 57%)"
          },
          "47%": {
            background: "linear-gradient(90deg, #4F41F6 47%, #C6C6C6 68%, #4F41F6 59%)"
          },
          "49%": {
            background: "linear-gradient(90deg, #4F41F6 49%, #C6C6C6 71%, #4F41F6 61%)"
          },
          "51%": {
            background: "linear-gradient(90deg, #4F41F6 51%, #C6C6C6 74%, #4F41F6 63%)"
          },
          "53%": {
            background: "linear-gradient(90deg, #4F41F6 53%, #C6C6C6 77%, #4F41F6 65%)"
          },
          "55%": {
            background: "linear-gradient(90deg, #4F41F6 55%, #C6C6C6 80%, #4F41F6 67%)"
          },
          "57%": {
            background: "linear-gradient(90deg, #4F41F6 57%, #C6C6C6 83%, #4F41F6 69%)"
          },
          "59%": {
            background: "linear-gradient(90deg, #4F41F6 59%, #C6C6C6 86%, #4F41F6 71%)"
          },
          "61%": {
            background: "linear-gradient(90deg, #4F41F6 61%, #C6C6C6 89%, #4F41F6 73%)"
          },
          "63%": {
            background: "linear-gradient(90deg, #4F41F6 63%, #C6C6C6 92%, #4F41F6 75%)"
          },
          "65%": {
            background: "linear-gradient(90deg, #4F41F6 65%, #C6C6C6 95%, #4F41F6 77%)"
          },
          "67%": {
            background: "linear-gradient(90deg, #4F41F6 67%, #C6C6C6 98%, #4F41F6 79%)"
          },
          "69%": {
            background: "linear-gradient(90deg, #4F41F6 69%, #C6C6C6 100%, #4F41F6 81%)"
          },
          "71%": {
            background: "linear-gradient(90deg, #4F41F6 71%, #C6C6C6 103%, #4F41F6 83%)"
          },
          "73%": {
            background: "linear-gradient(90deg, #4F41F6 73%, #C6C6C6 106%, #4F41F6 85%)"
          },
          "75%": {
            background: "linear-gradient(90deg, #4F41F6 75%, #C6C6C6 109%, #4F41F6 87%)"
          },
          "77%": {
            background: "linear-gradient(90deg, #4F41F6 77%, #C6C6C6 112%, #4F41F6 89%)"
          },
          "79%": {
            background: "linear-gradient(90deg, #4F41F6 79%, #C6C6C6 115%, #4F41F6 91%)"
          },
          "81%": {
            background: "linear-gradient(90deg, #4F41F6 81%, #C6C6C6 118%, #4F41F6 93%)"
          },
          "83%": {
            background: "linear-gradient(90deg, #4F41F6 83%, #C6C6C6 121%, #4F41F6 95%)"
          },
          "85%": {
            background: "linear-gradient(90deg, #4F41F6 85%, #C6C6C6 123%, #4F41F6 97%)"
          },
          "87%": {
            background: "linear-gradient(90deg, #4F41F6 87%, #C6C6C6 126%, #4F41F6 99%)"
          },
          "89%": {
            background: "linear-gradient(90deg, #4F41F6 89%, #C6C6C6 129%, #4F41F6 101%)"
          },
          "91%": {
            background: "linear-gradient(90deg, #4F41F6 91%, #C6C6C6 132%, #4F41F6 103%)"
          },
          "93%": {
            background: "linear-gradient(90deg, #4F41F6 93%, #C6C6C6 135%, #4F41F6 105%)"
          },
          "95%": {
            background: "linear-gradient(90deg, #4F41F6 95%, #C6C6C6 138%, #4F41F6 107%)"
          },
          "97%": {
            background: "linear-gradient(90deg, #4F41F6 97%, #C6C6C6 141%, #4F41F6 109%)"
          },
          "99%": {
            background: "linear-gradient(90deg, #4F41F6 99%, #C6C6C6 144%, #4F41F6 112%)"
          },
          "100%": {
            background: "linear-gradient(90deg, #4F41F6 0%, #C6C6C6 -5%, #4F41F6 10%)"
          }
        }
      },
      animation: {
        "animar-cursor": "animar-cursor .8s infinite",
        "hrAnimation": "hrAnimation 1s infinite",
      },
    
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
