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

// function Greeting(){
//   return (
//     <div>
//       <Person/>
//       <Message/>
//     </div>
//   );
// }

// const Person = () => <h2>Johnn Joe</h2>
// const Message = () => {
//   return <p>this is my message</p>
// }

// export default Greeting;





import './App.css';

function BookList(){
  return(
    <section class='booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}
const Book = () =>{
  return(
    <article class="book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  );
}
const Image = ()=>{
  return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s" alt="Book Image" />
}
const Title= ()=> <h1>A Single Spy</h1>;
//oter ways to add css in mostly ui frameworks it is strictly take over the css if written like this over the index.css u have applied 
const Author = () => <h1 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>William Christie</h1>

export default BookList;