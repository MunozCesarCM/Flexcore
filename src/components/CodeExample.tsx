import { useState, useRef, useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { tags as t } from '@lezer/highlight';
import { html } from '@codemirror/lang-html';
import { FiSun, FiCopy, FiRotateCcw } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import AppContext from '../context/AppContext';
import '../styles/toast.scss';

const formatCodeExample = (snippet: string, template: boolean, editorTheme: string, siteTheme: string) => {

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
body { padding: 2em; }
</style>
</head>
<body class="theme-${(editorTheme === null) ? siteTheme : editorTheme}">
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
body { padding: 2em; }
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
  const {editorTheme, setEditorTheme, siteTheme} = useContext(AppContext);

  const notify = () => toast.success('Text Copied to Clipboard!');

  const toggleTheme = () => {
    let newTheme = null;
    if (editorTheme === null) newTheme = (siteTheme === 'light') ? 'dark' : 'light';
    else newTheme = (editorTheme === 'light') ? 'dark' : 'light';
    setEditorTheme(newTheme);
  }

  const onLoad = () => {
    if (ref.current !== null) {
      setHeight(ref.current.contentWindow.document.body.scrollHeight + 20 + 'px');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(srcDoc);
    notify();
  }

  return (
    <>
      <div className='code-result'>
        <iframe
          ref={ref}
          onLoad={onLoad}
          srcDoc={formatCodeExample(srcDoc, template, editorTheme, siteTheme)}
          title='output'
          sandbox='allow-same-origin'
          frameBorder='0'
          style={{height: height}}
        />
      </div>
      <div className='code-container'>
        <ul>
          <li onClick={() => setSrcDoc(snippet)}><FiRotateCcw /></li>
          <li onClick={handleCopy}><FiCopy /></li>
          <li onClick={toggleTheme}><FiSun /></li>
        </ul>
        <div className='code-example'>
          <CodeMirror
            value={srcDoc}
            theme={vscodeDarkInit({
              theme: siteTheme === 'light' ? 'light' : 'dark',
              settings: {
                background: 'var(--color-canvas)',
                foreground: 'var(--color-editor-text)',
                caret: 'var(--color-text)',
                selection: 'var(--color-border)',
                selectionMatch: 'var(--color-border)',
                gutterBackground: 'var(--color-canvas)',
                gutterForeground: 'var(--color-editor-comment)',
                gutterActiveForeground: 'var(--color-heading)',
                gutterBorder: 'transparent',
                // lineHighlight: 'var(--color-border)',
              },
              styles: [
                { tag: [t.tagName, t.heading], color: 'var(--color-editor-red)' },
                { tag: t.comment, color: 'var(--color-editor-comment)' },
                { tag: [t.attributeName, t.number], color: 'var(--color-editor-orange)' },
                { tag: t.className, color: 'var(--color-editor-yellow)' },
                { tag: [t.string, t.regexp, t.special(t.propertyName)], color: 'var(--color-editor-green)' },
                { tag: t.variableName, color: 'var(--color-editor-purple)' },
                { tag: t.className, color: 'var(--color-editor-orange)' },
                { tag: [t.brace, t.operator, t.angleBracket], color: 'var(--color-editor-text)' },
              ]
            })}
            extensions={[html()]}
            onChange={(e) => setSrcDoc(e)}
            basicSetup={{
              foldGutter: false,
            }}
          />
        </div>
      </div>
      <ToastContainer position="bottom-right"
        autoClose={1250}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme={ siteTheme === 'light' ? 'light' : 'dark' }
      />
    </>
  )
}

export default CodeExample;
