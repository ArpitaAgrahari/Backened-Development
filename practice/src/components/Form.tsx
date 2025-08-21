/*
Scenario Question:
You are building a Job Application Form. The form has these fields:
    fullName → string, required, min 3 characters.
    email → must be valid email.
    age → number, required, must be ≥ 18.
    portfolioURL → optional, must be a valid URL if provided.
    skills → array of strings, at least 1 skill required.
    password & confirmPassword → must match.
👉 Task:
- Define a Zod schema for this form.
- Integrate it with React Hook Form.
- Show all errors in a styled UI (shadcn UI or simple Tailwind).
- (Bonus) Add async validation for email that checks availability via a fake API call.
*/

import {z} from 'zod'
import {useForm} from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'


//infer 
type FieldType = z.infer<typeof ApplicationSchema>


//checking of email avilaiblty
const CheckAvailbilty = async(email:string)=>{
    await new Promise((r) => setTimeout(r,800));
    if(email==="taken@example.com"){
        return false;
    }
    return true;
}

//zod schema
const ApplicationSchema = z.object({
    fullname: z.string().min(3,"Full name must be at least 3 characters."),
    email: z
        .string()
        .email("Invalid email address.")
        .refine(async (email) => await CheckAvailbilty(email),{
           message: "Email is already taken",
        }),
    age: z.coerce.number().min(18, "You must be at least 18."),
    portfolioURL: z
        .string()
        .url("Must be a valid URL.")
        .optional()
        .or(z.literal("")),
    skills: z  
        .array(z.string().min(1,"Skills cannot be empty"))
        .min(1, "At least 1 skill is required."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPass: z.string().min(6, "Password must be at least 6 characters."),
}).refine((data)=> data.password=== data.confirmPass,{
    message: "Password is not matching",
    path: ["confirmPass"],
});





const Form = () => {

const {register, handleSubmit, formState:{errors,isSubmitting}, reset,} = useForm({resolver: zodResolver(ApplicationSchema)})


const onsubmit = (data: FieldType) =>{
    console.log("Form Submitted: ",data);
    alert("Form Submitted"),
    reset();
}


  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='max-w-lg w-full p-6 border rounded-2xl bg-white shadow-lg'>
         <h1 className="text-2xl font-bold mb-4">Job Application Form</h1>
        <form className='space-y-4' onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            {...register("fullname")}
            className="w-full border rounded p-2"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm">{errors.fullname.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border rounded p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            {...register("age")}
            className="w-full border rounded p-2" 
          />
          {errors.age && (
            <p className="text-red-500 text-sm">{errors.age.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Portfolio URL (optional)</label>
          <input
            type="url"
            {...register("portfolioURL")}
            className="w-full border rounded p-2"
          />
          {errors.portfolioURL && (
            <p className="text-red-500 text-sm">
              {errors.portfolioURL.message}
            </p>
          )}
        </div>  
        <div>
            <label className="block font-medium">Skills</label>
            <input 
                type="text"
                placeholder="Enter skills separated by commas"
                {...register("skills",{
                    setValueAs: (val:string)=>
                    val.split(",").map((s)=>s.trim()).filter(Boolean),
                })}
                className='w-full border rounded p-2'>
            </input>
            {errors.skills && (
            <p className="text-red-500 text-sm">{errors.skills.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="w-full border rounded p-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPass")}
            className="w-full border rounded p-2"
          />
          {errors.confirmPass && (
            <p className="text-red-500 text-sm">
              {errors.confirmPass.message}
            </p>
          )}
        </div>   

            <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                {isSubmitting?"Submitting...":"Submitted Application"}
            </button>          
        </form>
    </div>
    </div>
  )
}

export default Form