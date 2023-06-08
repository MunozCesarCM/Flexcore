import { useState, useRef, useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { FiSun, FiCopy, FiRotateCcw } from 'react-icons/fi';
import AppContext from '../context/AppContext';

const formatCodeExample = (snippet: string, template: boolean, editorTheme: string) => {

  if (template) {
    return `
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/flexcore.css">
<style>
* { font-family: 'Poppins', sans-serif; }
body { padding: 1em 2em; }
</style>
</head>
<body class="theme-${editorTheme}">
${snippet}
</body>
</html>
`.slice(1,-1);
  }

  return `
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/flexcore.css">
<style>
* { font-family: 'Poppins', sans-serif; }
body { padding: 1em 2em; }
</style>
</head>
${snippet}
</html>
`.slice(1,-1);
}

interface CodeExample {
  snippet: string;
  template?: boolean;
}

const CodeExample = ({ snippet, template = true }: CodeExample) => {
  const ref = useRef(null);
  const [height, setHeight] = useState('0px');
  const [srcDoc, setSrcDoc] = useState(snippet);
  const {editorTheme, setEditorTheme} = useContext(AppContext);

  const toggleTheme = () => {
    const newTheme = (editorTheme === 'light') ? 'dark' : 'light';
    setEditorTheme(newTheme);
  }

  const onLoad = () => {
    if (ref.current !== null) {
      setHeight(ref.current.contentWindow.document.body.scrollHeight + 20 + 'px');
    }
  };

  return (
    <>
      <div className='code-result'>
        <iframe
          ref={ref}
          onLoad={onLoad}
          srcDoc={formatCodeExample(srcDoc, template, editorTheme)}
          title='output'
          sandbox='allow-same-origin'
          frameBorder='0'
          style={{height: height}}
        />
      </div>
      <div className='code-container'>
        <ul>
          <li onClick={() => setSrcDoc(snippet)}><FiRotateCcw /></li>
          <li onClick={() => navigator.clipboard.writeText(srcDoc)}><FiCopy /></li>
          <li onClick={toggleTheme}><FiSun /></li>
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
