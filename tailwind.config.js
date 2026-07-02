/** @type {import('tailwindcss').Config} */
// Design tokens ported 1:1 from the original css/style.css :root and animations.css.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf6f1', // --bg
        cream2: '#f3ece2', // --bg-2
        ink: '#2b1233', // --ink / --plum
        inksoft: '#4a2a52', // --ink-soft
        muted: '#7a6a76', // --muted
        line: 'rgba(43,18,51,.10)', // --line
        plum: '#2b1233',
        plumdark: '#1a0a22', // footer / testimonial gradient end
        gold: '#c9a96e',
        golddeep: '#a78747',
        blush: '#f3d9d0',
        blushdeep: '#e8b9ad',
        neonpink: '#ff4d9d',
        neongreen: '#b4f25a',
        greendeep: '#5d7a3a',
        whatsapp: '#25d366',
        whatsappdark: '#1ebe57',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '1240px',
      },
      borderRadius: {
        token: '18px', // --radius
        tokenlg: '28px', // --radius-lg
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(43,18,51,.18)',
        lg2: '0 30px 60px -20px rgba(43,18,51,.28)',
        card: '0 2px 8px -4px rgba(43,18,51,.12), 0 18px 40px -24px rgba(43,18,51,.22)',
        cardhover: '0 8px 20px -8px rgba(43,18,51,.18), 0 40px 70px -30px rgba(43,18,51,.35)',
        glow: '0 0 0 1px rgba(255,255,255,.5) inset, 0 20px 50px -20px rgba(255,77,157,.35)',
      },
      keyframes: {
        heroIn: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'none' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(26px)' },
          to: { opacity: '1', transform: 'none' },
        },
        floatSoft: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(4deg)' },
        },
        pulseWa: {
          '0%,100%': { boxShadow: '0 12px 30px rgba(37,211,102,.45),0 0 0 0 rgba(37,211,102,.5)' },
          '50%': { boxShadow: '0 12px 30px rgba(37,211,102,.45),0 0 0 18px rgba(37,211,102,0)' },
        },
        scrollLine: {
          '0%,100%': { transform: 'scaleY(.3)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)' },
        },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        heroIn: 'heroIn 1s ease forwards',
        fadeUp: 'fadeUp .7s ease forwards',
        floatSoft: 'floatSoft 6s ease-in-out infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        pulseWa: 'pulseWa 2.4s ease-in-out infinite',
        scrollLine: 'scrollLine 2s ease-in-out infinite',
        fadeIn: 'fadeIn .3s ease',
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-medium': 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 24s linear infinite',
        'marquee-slow-reverse': 'marqueeReverse 60s linear infinite',
        'marquee-medium-reverse': 'marqueeReverse 40s linear infinite',
        'marquee-fast-reverse': 'marqueeReverse 24s linear infinite',
        shimmer: 'shimmer 1.6s infinite',
      },
    },
  },
  plugins: [],
}
