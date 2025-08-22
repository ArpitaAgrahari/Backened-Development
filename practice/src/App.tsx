// import { zodResolver } from '@hookform/resolvers/zod'
// import {useForm} from 'react-hook-form'
// import { z } from 'zod'
// import {} from '@hookform/resolvers/zod'
// import './App.css'


// const App = () => {

//     type FieldType = {
//         name: string,
//         email: string,
//         password: number,
//         confirmpassword: number,
//     }

//     //OR use the below one
//     // type FieldType = z.infer<typeof Schema>

//     const Schema= z.object({
//         name : z.string().min(5,'Please enter the name with more than 5 char'),
//         email: z.string()
//             .email('Invalid email address')
//             .regex(/[A-Z]/, 'Enter at least one uppercase letter'),
//         password: z.number().min(8).max(15),
//         confirmpassword: z.number().min(8).max(15)
//     }).refine((data) => data.password===data.confirmpassword,{
//         message: 'Password do not match ',
//         path: ["confirmpassword"],
//     })

//     const { register, handleSubmit, formState: { errors } } = useForm<FieldType>({ resolver: zodResolver(Schema) });

//     const submitData = (data: FieldType) => {
//         console.log(data);
//     }

//   return (
//     <div className='App'>
//         <form onSubmit={handleSubmit(submitData)} className='form'>
//         <label>Name : </label>
//         <input type="name" {...register("name")}></input>
//         {errors.name && <span>{errors.name.message}</span>}
//         <label>Email : </label>
//         <input type="email" {...register('email')}></input>
//         {errors.email && <span>{errors.email.message}</span>}
//         <label>Password : </label>
//         <input type="password" {...register("password")}></input>
//         {errors.password && <span>{errors.password.message}</span>}
//         <label>Confirm Password : </label>
//         <input type="password" {...register('confirmpassword')}></input>
//         {errors.password && <span>{errors.confirmpassword?.message}</span>}
//         <button>Submit</button>
//     </form>
//     </div>
    
//   
// }

// export default App
import './App.css'
import Form from './components/Form'

export default function App() {
  return (
    <div>
      <Form/>
    </div>
  )
}
