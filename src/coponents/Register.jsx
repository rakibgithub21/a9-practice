import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextApi/FirebaseAuthProvider";
import { useForm } from "react-hook-form";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const{name,email,password,image} = data
        // console.log(data);
        createUser(email, password)
            .then(result => {
            console.log(result.user);
            })
            .catch(error => {
            console.log(error.message);
        })

    }
    // console.log(createUser);
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
                    <div>
                        <input placeholder="Type your name" {...register("name", { required: true })} id="name_id" name="name" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div>
                        <input placeholder="Type your Email" {...register("email", { required: true })} id="email" name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div>
                        <input placeholder="Type your image link" {...register("image")} id="image" name="image" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      
                    </div>

                    <div>
                        
                        <input placeholder="Type your password" {...register("password", { required: true })} id="password" name="password" type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        {errors.password && <span className="text-red-500">This field is required</span>}
                       
                    </div>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>

                <div className="mt-10 text-center text-sm text-gray-500">
                    
                    <Link to={'/login'} href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">You have already an account ? Please Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;