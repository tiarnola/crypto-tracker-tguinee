import React, {useState} from 'react';

function RBSelect()
{
     let colors=["USD","EUR"];
     const [displaycolor,setcolor]=useState("USD");
    return (

        <div>
            <center>
            {/* <h1>ddd</h1>
            <h2>dff</h2>
            <hr /> */}
            {colors.map(result=>(
                <>
            <input type="radio" value={result} name="radiovalues" checked={displaycolor===result} onChange={(e)=>setcolor(e.target.value)}/>
            <b>{result}</b>
            </>



            ))

            }
            <h2>{displaycolor}</h2>
            </center>
        </div>

    )


}
export default RBSelect;