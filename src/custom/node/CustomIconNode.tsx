import { useCallback } from "react";
import { Handle,Position, type NodeProps } from "@xyflow/react";

const handleStyle = {left:10};

function CustomIconNode ({data}){
    const onChange = useCallback((evt)=>{
        console.log(evt.target.value);
    },[]);

    return(
        <>
        <Handle type="target" position={Position.Top} />
        <div>
            <label htmlFor="text">Text:</label>
            <input id="text" name="text" onChange={onChange} className="nodrag" />
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle
            type="source"
            position={Position.Bottom}
            id="b"
            style={handleStyle}
            />
        </>
    )
}

export default CustomIconNode;