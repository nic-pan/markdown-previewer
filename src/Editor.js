import { useState } from "react";

const Editor = (props) => {
    
    return (
        <textarea onChange={props.updateMarkdown} value={props.input} id="editor"></textarea>
    );
}
 
export default Editor;