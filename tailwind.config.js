/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         mulish: ["Mulish", "sans-serif"],
//         opensans: ["Open Sans", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: {
    files: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Your source files
    ],
    extract,
  },
  theme: {
    screens, // Use rem-based screens
    fontSize, // Use rem-based font sizes
    extend: {
      screens: {
        xs: "20rem", // Example of adding custom screens
      },
    },
  },
  plugins: [
    fluid, // Use the fluid-tailwind plugin
  ],
};
