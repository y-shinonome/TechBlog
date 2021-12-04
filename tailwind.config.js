module.exports = {	
  mode: 'jit',	
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],	
  darkMode: false, // or 'media' or 'class'	
  theme: {	
    colors: {	
      'commonBlack': '#2A2A2A',	
      'commonWhite': '#FAFAFA'	
    },	
    extend: {	
      typography: {	
        DEFAULT : {	
          css : {	
            p : {	
              color : '#2A2A2A'	
            },	
            h1 : {	
              color : '#2A2A2A'	
            },	
            h2 : {	
              color : '#714553',
              fontSize : '2rem'
            },	
            h3 : {	
              color : '#2A2A2A',
              borderBottom: '1px solid #CCCCCC'
            },	
            h4 : {	
              color : '#2A2A2A'	
            },	
            h5 : {	
              color : '#2A2A2A'	
            },	
            h6 : {	
              color : '#2A2A2A'	
            },	
            hr: {
              borderColor: '#CCCCCC',
            },
            blockquote: {
              borderLeftColor: '#CCCCCC',
            },
            'ul > li::before': {
              backgroundColor: '#CCCCCC',
            },
            a: {
              color: '#1111EE',
            },
            strong: {
              background: 'linear-gradient(transparent 0%, transparent 50%, #FAFAFA 50%, #FFFFAA 100%)',
            }
          },	
        },	
      },	
    },	
  },	
  variants: {	
    extend: {},	
  },	
  plugins: [	
    require('@tailwindcss/typography'),	
  ],	
}	
