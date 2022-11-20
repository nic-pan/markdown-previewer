import { useEffect, useState } from 'react';
import './App.css';
import Editor from './Editor';
import Preview from './Preview';

function App() {
  const [markdown, setMarkdown] = useState('');
  const fetchDefaultMarkdown = async () => {
    const defaultInput = await (await fetch('default-input.txt')).text()
    setMarkdown(defaultInput);
  }
  useEffect( () => {
    fetchDefaultMarkdown();
  },[]) 

  const updatePreview = (event) => {
    const input = event.target.value;
    setMarkdown(input);
  }

  return (
    <div className="App">
      <Editor input={markdown} updateMarkdown={updatePreview}/>
      <Preview markdown={markdown}/>
    </div>
  );
}

export default App;
