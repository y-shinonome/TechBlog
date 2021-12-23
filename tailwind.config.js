module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.html'],
  darkMode: 'media',
  theme: {
    colors: {
      commonBlack: '#2A2A2A',
      commonWhite: '#FAFAFA',
    },
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            pre: null,
          },
        },
        custom: {
          css: {
            '--tw-prose-body': '#2A2A2A',
            '--tw-prose-headings': '#2A2A2A',
            '--tw-prose-links': '#2A2A2A',
            '--tw-prose-bold': '#2A2A2A',
            '--tw-prose-code': '#2A2A2A',
            '--tw-prose-quotes': '#2A2A2A',
            '--tw-prose-counters': '#2A2A2A',
            '--tw-prose-bullets': '#BBBBBB',
            '--tw-prose-quote-borders': '#BBBBBB',
            '--tw-prose-hr': '#BBBBBB',
            '--tw-prose-th-borders': '#BBBBBB',
            '--tw-prose-td-borders': '#BBBBBB',
            //'--tw-prose-captions': '#000000',
            //'--tw-prose-lead': '#000000',
            '--tw-prose-invert-body': '#0000FF',
            '--tw-prose-invert-headings': '#0000FF',
            '--tw-prose-invert-links': '#0000FF',
            '--tw-prose-invert-bold': '#0000FF',
            '--tw-prose-invert-code': '#0000FF',
            '--tw-prose-invert-quotes': '#0000FF',
            '--tw-prose-invert-counters': '#0000FF',
            '--tw-prose-invert-bullets': '#0000FF',
            '--tw-prose-invert-quote-borders': '#0000FF',
            '--tw-prose-invert-hr': '#0000FF',
            '--tw-prose-invert-th-borders': '#0000FF',
            '--tw-prose-invert-td-borders': '#0000FF',
            //'--tw-prose-invert-captions': '#000000',
            //'--tw-prose-invert-lead': '#000000',
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
