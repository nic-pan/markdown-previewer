import { Markdown } from "react-marked-renderer";

const Preview = (props) => {

    return ( 
        <div id="preview">
            <Markdown markdown={props.markdown}/>
        </div>
     );
}
 
export default Preview;