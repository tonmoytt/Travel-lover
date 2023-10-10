import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useContext } from "react";
import { AuthCreate } from "./AuthProvider/AuthProvider";
import swal from 'sweetalert';

const Login = () => {
    const {Login}=useContext(AuthCreate);
    const hendleclicked=e =>{
        e.preventDefault(e.currentTarget)
        const form= new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        console.log( email,password);
        Login(email,password)
        .then(result =>{
            console.log(result.user);
            swal({
                title: "Are you sure?",
                text:"to login with your information",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Succesfully Login!", {
                    icon: "success",
                  });
                } else {
                  swal("Succesfully Login!");
                }
              });
        })
        // error//
        .catch(error=>{
            console.error(error)
        })

    }
    return (
        <div>
            <div className="px-10 py-4 mb-6 bg-sky-200">
                <Navbar></Navbar>
            </div>
            <div className="hero min-h-screen bg-indigo-200 ">
                <div className="hero-content flex-col lg:flex">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendleclicked} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="text-center mt-4">Do not have an account ? <Link to="/register"><button className=" text-lg hover:underline hover:bg-green-100 hover:px-2 rounded-md">Register</button></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;