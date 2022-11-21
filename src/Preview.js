import { Markdown } from "react-marked-renderer";

const Preview = (props) => {

    return ( 
        <div id="preview" className="">
            <h5 className="text-center">Preview:</h5>
            <div className="markdown-wrapper">
                <Markdown markdown={props.markdown}/>
            </div>
        </div>
     );
}
 
export default Preview;