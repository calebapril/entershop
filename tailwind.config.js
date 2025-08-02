/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';


module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    // overwrite default config
    // Responsive design
    container: {
      center: true,
      padding: {
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "2rem",
        "3xl": "2rem",
        "4xl": "2rem",
      },

      // breakpoints
      screens: {
        xs: "22.5rem",
        sm: "35.938rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "90rem",
        "3xl": "105rem",
        "4xl": "120rem",
      },
    },

    colors: {
      //  coral
      primary: {
        50: '#fef5f2',
        100: '#ffe7e1',
        200: '#ffd4c8',
        300: '#ffb6a2',
        400: '#fc7753',
        500: '#f5653e',
        600: '#e24920',
        700: '#be3b17',
        800: '#9d3417',
        900: '#82301a',
        950: '#471508',
      },
      // gun-powder
      secondary: {
        50: '#f5f6f9',
        100: '#e8e9f1',
        200: '#d6d8e7',
        300: '#b9bcd7',
        400: '#979bc3',
        500: '#7e7eb3',
        600: '#6f6ca4',
        700: '#666095',
        800: '#57527b',
        900: '#403d58',
        950: '#2f2d3e',
      },
      // additional colors
      white: '#ffffff',
      black: '#000000',

      // default colors
      slate: colors.slate,
      red: colors.red,
      pink: colors.pink,
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral,
      green: colors.green,
      blue: colors.blue,
      transparent: 'transparent',
      heading: '#979798',
      body: colors.slate[700],
      background: colors.gray[100],
    },

    // Typography
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },

    fontSize: {
      // default
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",

      // additional
      h1: [
        "5rem",
        {
          lineHeight: "5rem",
          letterSpacing: "0.0375",
          fontWeight: "700",
        },
      ],

      h2: [
        "3rem",
        {
          lineHeight: "4rem",
          letterSpacing: "0.035",
          fontWeight: "700",
        },
      ],

      h3: [
        "2.5rem",
        {
          lineHeight: "3.5rem",
          letterSpacing: "0.05",
          fontWeight: "700",
        },
      ],

      h4: [
        "2rem",
        {
          lineHeight: "2.75rem",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],

      h5: [
        "1.5rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "0",
          fontWeight: "600",
        },
      ],

      h6: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],

      p: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],

      body: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],

      span: [
        "0.75rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
    },
    extend: {

      // extend default config
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      }
    }
  },
  plugins: [`require("tailwindcss-animate")`],
}

