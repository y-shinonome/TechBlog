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
                  color : '#2A2A2A'	
                },	
                h3 : {	
                  color : '#2A2A2A'	
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
        
  