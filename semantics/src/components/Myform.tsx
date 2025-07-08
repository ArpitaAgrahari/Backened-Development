import { Label} from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

// function App(){
//   return (
//     <>
//       <form className="space-y-4 p-4">
//         <div className="grid gap-1">
//           <Label htmlFor="name">Enter your Name:</Label>
//           <Input type="text" id="name" name="name" placeholder="Name"></Input>
//         </div>
//         <div className="grid gap-1">
//           <Label htmlFor="email">Enter your email</Label>
//           <Input type="email" id="email" name="email" placeholder="abc@email.com"></Input>
//         </div>
//         <Button type="submit">Submit</Button>
//       </form>
//     </>
//   );
// }
// export default App;


/*
Step 2: Audit for Accessibility Issues
Open the page in your browser:

Use Chrome DevTools → Lighthouse → Accessibility Audit.

Use keyboard navigation (TAB, ENTER, SHIFT+TAB).

Use NVDA (Windows) or VoiceOver (Mac) to listen to what screen readers say.

⚠️ Possible Findings:
Input fields don’t have aria-describedby for help text or errors.

No live region for real-time validation messages.

Not wrapped in a semantic element (<section>).

Not enough feedback when pressing submit.
*/



/**
 * 3: Enhance with Semantic HTML + ARIA
We will:

Wrap the form in a <section aria-labelledby="formHeading">

Add a heading (<h2>) with id="formHeading"

Add aria-describedby for help text and aria-live="polite" for error messages
 * 
 */


function Myform(){

    const [error,setError]=useState("")
    const [success,setSuccess]=useState("")

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault()
        setError("")
        const name=(e.target as any).name.value;
        const email=(e.target as any).email.value;

        if(!name || !email){
          setError("Please fill all fields")
        }else{
          setSuccess("Form filled succesfully")
        }
    }


    return (
      <section aria-labelledby="formHeading" className="p-6 border rounded-xl m-8">
        <h2 id="formHeading" className="text-2xl font-bold mb-4">
          Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Enter your Name</Label>
              <Input 
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              aria-describedby="nameHelp">
              </Input>
              <p id="nameHelp" className=" text-sm text-muted-foreground">Please enter your name</p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              type="email"
              name="email"
              id="email"
              placeholder="abc@emial.com"
              aria-describedby="emailHelp">
              </Input>
              <p id="emailHelp" className="text-sm text-muted-foreground">Please enter your email</p>
            </div>

            {/* validation message */}
            <div aria-live="polite" className="text-red-500 text-sm min-h-[20px]">
              {error}
            </div>

            {/* success messgae */}
            <div aria-live="polite" className="text-green-500 text-sm min-h-[20px]">
              {success}
              </div>
            <Button type="submit">Submit</Button>
        </form>
        </section>
    );
}
export default Myform;