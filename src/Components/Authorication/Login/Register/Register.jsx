import { Link } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthCreate } from "../AuthProvider/AuthProvider";



const Register = () => {
    
    const {newUser}=useContext(AuthCreate);
    const heldlebtnmain = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        // const email=e.target.email.value
        // const password=e.target.password.value
        console.log(password,email);

        newUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })

    }
    return (
        <div>
            <div className="px-10 py-4 mb-6 bg-sky-200">
                <Navbar></Navbar>
            </div>
            <div className="hero min-h-screen bg-rose-100 ">
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Registration now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={heldlebtnmain} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder=" Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn btn-primary">Submit</button>
                            </div>
                            <p className="text-center mt-4">Already have an account ? <Link to="/login"><button  className=" text-lg hover:underline hover:bg-green-100 hover:px-2 rounded-md">Login</button></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;