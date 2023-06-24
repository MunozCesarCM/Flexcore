const r=(s,l,t,o,n)=>{let e=`
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/flexcore.css">
        <style>
          * { font-family: '${n}', sans-serif; }
          body { padding: 2em; }
        </style>
    </head>
`;return l?e+=`<body class="theme-${t===null?o:t}">${s}`:e+=`${s}`,e+="</body></html>",e};export{r as f};
