export const formatCode = (snippet: string, template: boolean, editorTheme: string, siteTheme: string, font: string) => {
  let result = `
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/flexcore.css">
        <style>
          * { font-family: '${font}', sans-serif; }
          body { padding: 2em; }
        </style>
    </head>
`;

  if (template) {
    result += `<body class="theme-${(editorTheme === null) ? siteTheme : editorTheme}">${snippet}`
  } else {
    result += `${snippet}`;
  }

  result += `</body></html>`;
  return result;
}

