const config = {
  plugins: ["@tailwindcss/postcss"],
};

module.exports = {
  theme: {
    extend: {
       dropShadow: {
        'custom': ['0 200px 200px rgba(255, 51, 234, 1)']
      }
    }
  }
}

export default config;
