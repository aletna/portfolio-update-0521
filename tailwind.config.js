module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      102: "1.02",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    extend: {
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/8': '12.5%',
      },
      animation: {
        // If you are using Toast component
        left: "left 0.3s",
        right: "right 0.3s",
        // if you are using the animate variant of the modal
        modal: "modal 0.3s",
        // if you are using drawer variant right
        "drawer-right": "drawer-right 0.3s",
        // if you are using drawer variant left
        "drawer-left": "drawer-left 0.3s",
        // if you are using drawer variant top
        "drawer-top": "drawer-top 0.3s",
        // if you are using drawer variant bottom
        "drawer-bottom": "drawer-bottom 0.3s",
      },
      keyframes: {
        // if you are using drawer variant right
        "drawer-right": {
          "0%, 100%": { right: "-500px" },
          "100%": { right: "0" },
        },
        // if you are using drawer variant left
        "drawer-left": {
          "0%, 100%": { left: "-500px" },
          "100%": { left: "0" },
        },
        // if you are using drawer variant top
        "drawer-top": {
          "0%, 100%": { top: "-500px" },
          "100%": { top: "0" },
        },
        // if you are using drawer variant bottom
        "drawer-bottom": {
          "0%, 100%": { bottom: "-500px" },
          "100%": { bottom: "0" },
        },
        // if you are using the animate variant of the modal
        modal: {
          "0%, 100%": { top: "-500px" },
          "100%": { top: "0" },
        },
        /* If you are using Toast component*/
        left: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        right: {
          "0%, 100%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
    variants: {
      /* If you are using Collapse or Accordion component*/
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "checked"],
      inset: ["checked"],
      opacity: ["disabled"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
