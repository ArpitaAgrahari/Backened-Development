// function Greeting() {
//   return (
//     <h1>
//       this is Arpita
//     </h1>
//   );
// }

// export default Greeting;



//USING ARROW

// const Greeting=()=>{
//   return(
//     <h1>
//       this is arraow fucntion
//     </h1>
//   );
// }

// export default Greeting;



// function Greeting() {
//   return (
//     <div>
//       <h1>this is Arpita</h1>
//       <ul>
//         <li>
//           <a href='#'>Hello world</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Greeting;



// function Greeting(){
//   return (
//     <div>
//       <h2>John Doe</h2>
//       <p>This is my message</p>
//     </div>
//   );
// }


//NESTED COMPONENTS

function Greeting(){
  return (
    <div>
      <Person/>
      <Message/>
    </div>
  );
}

const Person = () => <h2>Johnn Joe</h2>
const Message = () => {
  return <p>this is my message</p>
}

export default Greeting;


