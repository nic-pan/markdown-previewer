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
    <div className="container">
      <div className='center-block my-5'>
        <h1 className='text-center'>Markdown Previewer</h1>
      </div>

      <div className="row align-items-start app-wrapper">
        <div className="col-md-6">
         <Editor input={markdown} updateMarkdown={updatePreview}/>  
        </div>
        <div className="col-md-6">
          <Preview markdown={markdown}/>
        </div> 
      </div> 
    </div>
  );
}

export default App;
