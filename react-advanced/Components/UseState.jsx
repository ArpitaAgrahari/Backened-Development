// import React from "react";

// const UseState=()=>{
//     let title='A spy';

//     const handleClick=()=>{
//         title='Hello to Spy World'
//         console.log(title);
//     }
//     return (
//         <React.Fragment>
//             <h1>{title}</h1>
//             <button type="button" className="btn" onClick={handleClick}>Click on Button</button>
//             {/* so here on clicking on button we get changeed title on console but not on h title of browser/client ;
//             so the issue is we are not RE-RENDERING the component;
//             we changed but no re-rendering in order to preserve the value;
//             useState is used for this problem only ;
//             it re-renders the chnages we made in the component it re-renders the changed code to make it updated on every re rendering*/}
//             {/* When you click the button, the 'title' variable is updated and the new value appears in the console.
//             However, the displayed <h1> does not update. This is because changing a regular variable does NOT cause React to re-render the component.
//             React only re-renders when state or props change.
//             To make UI updates visible, use the useState hook to store values that should trigger a re-render when changed. */}
//         </React.Fragment>
//     );
// }

// export default UseState;






//Now we will useState to ivercome the re rendering the data chnaged
import React from 'react';
import {useState} from 'react';

const UseState=()=>{
    // useState is a function*******
    // this fun return an array of statevalue(can be arrar,number,var,let,any data type) and fun
    // console.log(useState());

    //example
    //['hello', ƒ] undefined is now chnaged to hello it can be any data type
    // console.log(useState('hello'));

    // array destructuring - used to set up in single line
    const [text, setText]=useState('A spy World');

    const handleClick=()=>{
        if(text=='A spy World'){
            setText('Spy World!')
            console.log('Title Changed');
        }else{
            setText('A spy World')
        }
    }
    return(
        <React.Fragment>
            <h1>{text}</h1>
            <button type='button' className='btn' onClick={handleClick} >Change Button</button>
        </React.Fragment>

    );
}


export default UseState;