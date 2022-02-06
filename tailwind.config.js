module.exports = {
  content: ['./src/components/**/*.{html,tsx}', './src/pages/**/*.{html,tsx}'],
  darkMode: 'class',
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
            '--tw-prose-invert-body': '#FAFAFA',
            '--tw-prose-invert-headings': '#FAFAFA',
            '--tw-prose-invert-links': '#FAFAFA',
            '--tw-prose-invert-bold': '#FAFAFA',
            '--tw-prose-invert-code': '#FAFAFA',
            '--tw-prose-invert-quotes': '#FAFAFA',
            '--tw-prose-invert-counters': '#FAFAFA',
            '--tw-prose-invert-bullets': '#888888',
            '--tw-prose-invert-quote-borders': '#888888',
            '--tw-prose-invert-hr': '#888888',
            '--tw-prose-invert-th-borders': '#888888',
            '--tw-prose-invert-td-borders': '#888888',
            //'--tw-prose-invert-captions': '#000000',
            //'--tw-prose-invert-lead': '#000000',
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
