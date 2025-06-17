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






//ONE WAY

// import './App.css';

// function BookList(){
//   return(
//     <section class='booklist'>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//     </section>
//   );
// }
// const Book = () =>{
//   return(
//     <article class="book">
//       <Image/>
//       <Title/>
//       <Author/>
//     </article>
//   );
// }
// const Image = ()=>{
//   return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s" alt="Book Image" />
// }
// const Title= ()=> <h1>A Single Spy</h1>;
// //oter ways to add css in mostly ui frameworks it is strictly take over the css if written like this over the index.css u have applied 
// const Author = () => <h1 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>William Christie</h1>

// export default BookList;







// import './App.css';

// //setup  vars
// const title='A Single Spy'
// const author='William Christie'
// const img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s'

// function BookList(){
//   return(
//     <section class='booklist'>
//       <Book/>
//     </section>
//   );
// }
// const Book = () =>{


//   return(
//     <article class="book">
//       <img src={img} alt="Book Image" />
//       <h1>{title}</h1>
//       {/* <h1 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>{author}</h1> */}
//       <h4>{author}</h4>
//       {/* to upper case auhtor name*/}
//       {/* <h1 style={{color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'}}>{author.toUpperCase()}</h1> */}
//     </article>
//   );
// }
// export default BookList;








// //props including 

// import './App.css';

// //setup  vars
// const title='A Single Spy'
// const author='William Christie'
// const img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s'

// function BookList(){
//   return(
//     <section className='booklist'>
//       <Book job='developer'/>
//       <Book title='randome title' number={22}/>
//     </section>
//   );
// }
// //props adding
// const Book = (props) =>{
//   console.log(props);
//   return(
//     <article className="book">
//       <img src={img} alt="Book Image" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       <p>{props.job}</p>
//     </article>
//   );
// }

// export default BookList;






//object and props for each book

// import './App.css';
// const firstBook={
//   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//   title: 'A Single Spy',
//   author: 'William Christie'
// }
// const secondBook={
//   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//   title: 'Spy',
//   author: 'William'
// }
// function BookList(){
//   return(
//     <section class='booklist'>
//       <Book 
//         img={firstBook.img} 
//         title={firstBook.title}
//         author={firstBook.author}
//       />
//       <Book 
//         img={secondBook.img} 
//         title={secondBook.title} 
//         author={secondBook.author}
//       />
//       <Book 
//         title='random book title' 
//         author='author'
//       />
//     </section>
//   );
// }
// const Book = (props) =>{
//   return(
//     <article class="book">
//       <img src={props.img} alt="Book Image" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// }
// export default BookList;








//PROPS DESTRCUTURING

// import './App.css';
// const firstBook={
//   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//   title: 'A Single Spy',
//   author: 'William Christie'
// }
// const secondBook={
//   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//   title: 'Spy',
//   author: 'William'
// }
// function BookList(){
//   return(
//     <section class='booklist'>
//       <Book 
//         img={firstBook.img} 
//         title={firstBook.title}
//         author={firstBook.author}
//       />
//       <Book 
//         img={secondBook.img} 
//         title={secondBook.title} 
//         author={secondBook.author}
//       />
//       <Book 
//         title='random book title' 
//         author='author'
//       />
//     </section>
//   );
// }
// // const Book = (props) =>{
// //   const {img,title,author}=props;

// //   //OR
// const Book =({img,title,author})=>{
//   return(
//     <article class="book">
//       <img src={img} alt="Book Image" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// }
// export default BookList;






// //Children Props
// import './App.css';
// const firstBook={
//   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//   title: 'A Single Spy',
//   author: 'William Christie'
// }
// const secondBook={
//   img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//   title: 'Spy',
//   author: 'William'
// }
// function BookList(){
//   return(
//     <section class='booklist'>
//       <Book 
//         img={firstBook.img} 
//         title={firstBook.title}
//         author={firstBook.author}
//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quos impedit adipisci id deleniti soluta odit maxime officia atque odio suscipit aspernatur numquam ullam corporis facilis
//         </p>
//       </Book>
//       <Book 
//         img={secondBook.img} 
//         title={secondBook.title} 
//         author={secondBook.author}
//       />
//       <Book 
//         title='random book title' 
//         author='author'
//       />
//     </section>
//   );
// }
// //adding children props 
// const Book =({img,title,author,children})=>{
//   return(
//     <article class="book">
//       <img src={img} alt="Book Image" />
//       {/* add children wherever u like */}
//       {children}
//       <h1>{title}</h1>
//       <h4>{author}</h4>
      
//     </article>
//   );
// }
// export default BookList;






// import './App.css';

// //now we cannot always make diff vars foe ach book so instead we will use array of objects
// const books=[
//       {
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//         title: 'A Single Spy',
//         author: 'William Christie'
//       },
//       {
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//         title: 'Spy',
//         author: 'William'
//       },
// ]


// //so we created a name array 
// const names=['john','peter','susan']
// //to access the array we are going to map the names  to iterate over a array 
// const newNames=names.map((name)=>{
//   return <h1>{name}</h1>
// });
// console.log(newNames);


// function BookList(){
//   return(
//     <section class='booklist'>
//       {newNames}
//     </section>
//   );
// }
// const Book =({img,title,author})=>{
//   return(
//     <article class="book">
//       <img src={img} alt="Book Image" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
      
//     </article>
//   );
// }
// export default BookList;








// //passing props wiht array of data 
// import './App.css';

// //now we cannot always make diff vars foe ach book so instead we will use array of objects
// const books=[
//       {
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//         title: 'A Single Spy',
//         author: 'William Christie'
//       },
//       {
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//         title: 'Spy',
//         author: 'William'
//       },
// ]

// function BookList(){
//   return(
//     <section class='booklist'>
//       {books.map((book)=>{
//         return (
//           <Book book={book}></Book>
//         );
//       })}
//     </section>
//   );
// }

// const Book =(props)=>{
//   const {img,title,author}=props.book;
//   return(
//     <article class="book">
//       <img src={img} alt="Book Image" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
      
//     </article>
//   );
// }
// export default BookList;







//key props and spread operator
// import './App.css';
// const books=[
//       {
//         id:1,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//         title: 'A Single Spy',
//         author: 'William Christie'
//       },
//       {
//         id:2,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//         title: 'Spy',
//         author: 'William'
//       },
// ]

// function BookList(){
//   return(
//     <section className='booklist'>
//       {books.map((book)=>{
//         return (
//           //key props 
//           <Book key={book.id} book={book}></Book>
//         );
//       })}
//     </section>
//   );
// }
// const Book =(props)=>{
//   const {img,title,author}=props.book;
//   return(
//     <article className="book">
//       <img src={img} alt="Book Image" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
      
//     </article>
//   );
// }
// export default BookList;







// //Event Basics
// //attributes , eventhandlers
// import './App.css';
// const books=[
//       {
//         id:1,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//         title: 'A Single Spy',
//         author: 'William Christie'
//       },
//       {
//         id:2,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//         title: 'Spy',
//         author: 'William'
//       },
// ]

// function BookList(){
//   return(
//     <section className='booklist'>
//       {books.map((book)=>{
//         return (
//           //key props 
//           <Book key={book.id} book={book}></Book>
//         );
//       })}
//     </section>
//   );
// }
// const Book =(props)=>{
//   const {img,title,author}=props.book;

//   //handler
//   const clickHandler=()=>{
//     alert('Button is clicked');
//   }

//    //we can invoke event as argudment as well
//   const eventclickHandler=(e)=>{
//     console.log(e);
//     console.log(e.target);
//     alert('Event argument Button is clicked');
//   }


//   //more compelex handler
//   // it will work the moment we render 
//   //the moment we render it will get invoked and print the all auhors
//   const moreclickHandler=(author)=>{
//     console.log(author);
//   }

//   return(
//     <article className="book">
//       <img src={img} alt="Book Image" />
//       {/* on lcik on title console will also log the title  - using inline functionalyt*/}
//       <h1 onClick={()=>console.log(title)}>{title}</h1>
//       <h4>{author}</h4>

//       {/*onclick on mousehover using reference of click Handler*/}
//       <button type="button" onClick={clickHandler}>On click Event Handler</button>
//     {/* invoked event as argument */}
//       <button type="button" onClick={eventclickHandler}>On click Event Handler</button>

//       {/*  here we invoked the moreclickHandler fucntion */}
//       <button type="btn" onClick={moreclickHandler}>More complex Button</button>

//       {/* so to get only when we click we have to use arrow fucnction ;
//       if ther is condiiton where we must pass the argument into fun first setup arrwofucntion*/}
//       <button type="btn" onClick={() => moreclickHandler(author)}>Modified complex Button</button>
//     </article>
//   );
// }
// export default BookList;







// //OnMOUSEOVER -***
// import './App.css';
// const books=[
//       {
//         id:1,
//         img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJHrQ4nhsrLaoOY0JMhK27pCcFKebdDfKlwg&s',
//         title: 'A Single Spy',
//         author: 'William Christie'
//       },
// ]

// function BookList(){
//   return(
//     <section className='booklist'>
//       {books.map((book)=>{
//         return (
//           <Book key={book.id} book={book}></Book>
//         );
//       })}
//     </section>
//   );
// }
// const Book =(props)=>{
//   const {img,title,author}=props.book;
//   const clickHandler=()=>{
//     alert('Button is clicked');
//   }
//   return(
//     // we are using mouseover by imliplicty ways to event handle
//     <article className="book" onMouseOver={()=>{
//       console.log(title);
//     }}>
//       <img src={img} alt="Book Image" />
//       <h1 onClick={()=>console.log(title)}>{title}</h1>
//       <h4>{author}</h4>
//       <button type="button" onClick={clickHandler}>On click Event Handler</button>
//     </article>
//   );
// }
// export default BookList;










//IMPORT AND EXPORT STATEMENTS
import './App.css';
//to import the books.jsx
import books from '../Components/books';

function BookList(){
  return(
    <section className='booklist'>
      {books.map((book)=>{
        return (
          <Book key={book.id} book={book}></Book>
        );
      })}
    </section>
  );
}
const Book =(props)=>{
  const {img,title,author}=props.book;
  const clickHandler=()=>{
    alert('Button is clicked');
  }
  return(
    <article className="book" onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt="Book Image" />
      <h1 onClick={()=>console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>On click Event Handler</button>
    </article>
  );
}
export default BookList;








