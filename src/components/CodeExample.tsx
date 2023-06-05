import { useState, useRef, useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { FiSun, FiCopy, FiRotateCcw } from 'react-icons/fi';
import { fleXkitCSS } from '../constants/fleXkit';
import AppContext from '../context/AppContext';

const formatCodeExample = (snippet: string, theme: string) => {
  return `
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<style>
* { font-family: 'Poppins', sans-serif; }
${fleXkitCSS}
</style>
</head>
<body class="theme-${theme}">
${snippet}
</body>
</html>
`.slice(1,-1);
}

interface CodeExample {
  snippet: string;
}

const CodeExample = ({ snippet }: CodeExample) => {
  const ref = useRef(null);
  const [height, setHeight] = useState('0px');
  const [srcDoc, setSrcDoc] = useState(snippet);
  const {theme, setTheme} = useContext(AppContext);

  const toggleTheme = () => {
    const newTheme = (theme === 'light') ? 'dark' : 'light';
    setTheme(newTheme);
  }

  const onLoad = () => {
    if (ref.current !== null) {
      setHeight(ref.current.contentWindow.document.body.scrollHeight + 50 + 'px');
    }
  };

  return (
    <>
      <div className='code-result'>
        <iframe
          ref={ref}
          onLoad={onLoad}
          srcDoc={formatCodeExample(srcDoc, theme)}
          title='output'
          sandbox='allow-same-origin'
          frameBorder='0'
          style={{height: height}}
        />
      </div>
      <div className='code-container'>
        <ul>
          <li><FiRotateCcw onClick={() => setSrcDoc(snippet)} /></li>
          <li><FiCopy onClick={() => navigator.clipboard.writeText(srcDoc)} /></li>
          <li><FiSun onClick={toggleTheme} /></li>
        </ul>
        <div className='code-example'>
          <CodeMirror
            value={srcDoc}
            theme="dark"
            extensions={html()}
            onChange={(e) => setSrcDoc(e)}
          />
        </div>
      </div>
    </>
  )
}

export default CodeExample;
