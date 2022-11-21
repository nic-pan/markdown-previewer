
const Editor = (props) => {
    
    return (
        <div className="">
            <h5 className="text-center">Type your markdown below:</h5>
            <textarea className="markdown-wrapper" style={{resize: "none", width: "100%"}} onChange={props.updateMarkdown} value={props.input} id="editor"></textarea>
        </div>
    );
}
 
export default Editor;