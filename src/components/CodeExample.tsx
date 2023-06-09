import { useState, useRef, useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDarkInit } from '@uiw/codemirror-theme-vscode';
import { tags as t } from '@lezer/highlight';
import { html } from '@codemirror/lang-html';
import { FiSun, FiCopy, FiRotateCcw } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { formatCode } from '../helpers/formatCode';
import AppContext from '../context/AppContext';
import '../styles/toast.scss';

interface CodeExample {
  snippet: string;
  template?: boolean;
  font?: string;
}

const CodeExample = ({ snippet, template = true, font = 'Poppins' }: CodeExample) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState('0px');
  const [srcDoc, setSrcDoc] = useState(snippet);
  const {editorTheme, setEditorTheme, siteTheme} = useContext(AppContext);

  const snippetLines = snippet.split('\n').length;
  const [showComplete, setShowComplete] = useState(snippetLines < 10);

  const notify = () => toast.success('Text Copied to Clipboard!');

  const toggleTheme = () => {
    let newTheme = null;
    newTheme = (editorTheme === 'light') ? 'dark' : 'light';
    setEditorTheme(newTheme);
  };

  const onLoad = () => {
    if (ref.current !== null && ref.current.contentWindow !== null) {
      setHeight(ref.current.contentWindow.document.body.scrollHeight + 32 + 'px');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(srcDoc);
    notify();
  };

  return (
    <>
      <div className='code-result mt-8'>
        <iframe
          ref={ref}
          onLoad={onLoad}
          srcDoc={formatCode(srcDoc, template, editorTheme, siteTheme, font)}
          title='output'
          sandbox='allow-same-origin'
          style={{height: height, border: '1px solid var(--color-border)'}}
          className='h-full w-full overflow-y-hidden border border-neutral-200 dark:border-neutral-800 rounded'
        />
      </div>
      <div className='code-container'>
        <ol className='flex justify-end list-none mb-1'>
          <li onClick={() => setSrcDoc(snippet)} className='p-1 pb-0 rounded cursor-pointer duration-100'><FiRotateCcw /></li>
          <li onClick={handleCopy} className='p-1 pb-0 ml-5 rounded cursor-pointer duration-100'><FiCopy /></li>
          <li onClick={toggleTheme} className='p-1 pb-0 ml-5 rounded cursor-pointer duration-100'><FiSun /></li>
        </ol>
        <div className='code-example mb-4 p-4 rounded border border-neutral-200 dark:border-neutral-800'>
          <CodeMirror
            value={ showComplete ? srcDoc : srcDoc.split('\n').slice(0, 10).join('\n') }
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
            editable={showComplete}
            onChange={(e) => setSrcDoc(e)}
            basicSetup={{
              foldGutter: false,
            }}
          />
        </div>
        {
          !showComplete ? (
            <div className='flex justify-center mt-5'>
              <button
                onClick={() => setShowComplete(true)}
                className='hover:bg-primary text-primary hover:text-white px-4 py-2 border border-primary rounded cursor-pointer duration-100'
              >Expand Code</button>
            </div>
          ) : null
        }
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
