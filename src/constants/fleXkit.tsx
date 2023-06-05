export const fleXkitCSS = `

/* Section - Theme */

.theme-light {
  --color-canvas: #FFFFFF;
  --color-text-default: #000000;
}

.theme-dark {
  --color-canvas: #000000;
  --color-text-default: #FFFFFF;
}

body {
  color: var(--color-text-default);
  background-color: var(--color-canvas);
  padding: 1em 3em;
}

/* Section - Typography */

.h1, .h2, .h3, .h4, .h5, .h6 {
  display: block;
  font-weight: bold;
}

.h1 {
  font-size: 2em;
  margin-block-start: .67em;
  margin-block-end: .67em;
}

.h2 {
  font-size: 1.5em;
  margin-block-start: .83em;
  margin-block-end: .83em;
}

.h3 {
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
}

.h4 {
  font-size: 1.00em;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
}

.h5 {
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
}

.h6 {
  font-size: 0.67em;
  margin-block-start: 2.33em;
  margin-block-end: 2.33em;
}

.text-xs { font-size: 0.75em; }
.text-sm { font-size: 0.875em; }
.text-base { font-size: 1em; }
.text-lg { font-size: 1.125em; }
.text-xl { font-size: 1.25em; }
.text-2xl { font-size: 1.5em; }
.text-3xl { font-size: 1.875em; }
.text-4xl { font-size: 2.25em; }
.text-5xl { font-size: 3em; }
.text-6xl { font-size: 3.75em; }
.text-7xl { font-size: 4.5em; }
.text-8xl { font-size: 6em; }
.text-9xl { font-size: 8em; }

.font-100 { font-weight: 100; }
.font-200 { font-weight: 200; }
.font-300 { font-weight: 300; }
.font-400 { font-weight: 400; }
.font-500 { font-weight: 500; }
.font-600 { font-weight: 600; }
.font-700 { font-weight: 700; }
.font-800 { font-weight: 800; }
.font-900 { font-weight: 900; }

.italic { font-style: italic; }
.overline { text-decoration: overline; }
.line-through { text-decoration: line-through; }
.underline { text-decoration: underline; }
.no-italic { font-style: normal; }
.no-line { text-decoration: none; }

.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

.line-height-1 { line-height: 1; }
.line-height-1-5 { line-height: 1.5; }
.line-height-2 { line-height: 2; }
.line-height-2-5 { line-height: 2.5; }
.line-height-3 { line-height: 3; }
.line-height-3-5 { line-height: 3.5; }
.line-height-4 { line-height: 4; }
.line-height-4-5 { line-height: 4.5; }
.line-height-5 { line-height: 5; }
.line-height-5-5 { line-height: 5.5; }
.line-height-6 { line-height: 6; }
.line-height-6-5 { line-height: 6.5; }
.line-height-7 { line-height: 7; }
.line-height-7-5 { line-height: 7.5; }
.line-height-8 { line-height: 8; }
.line-height-8-5 { line-height: 8.5; }
.line-height-9 { line-height: 9; }
.line-height-9-5 { line-height: 9.5; }
.line-height-10 { line-height: 10; }

.letter-tighter { letter-spacing: -0.05em; }
.letter-tight { letter-spacing: -0.025em; }
.letter-normal { letter-spacing: normal; }
.letter-wide { letter-spacing: 0.025em; }
.letter-wider { letter-spacing: 0.05em; }
.letter-widest { letter-spacing: 0.1em; }

.list-disc { list-style-type: disc; }
.list-decimal { list-style-type: decimal; }
.list-none { list-style-type: none; }

.list-inside { list-style-position: inside; }
.list-outside { list-style-position: outside; }

`;
