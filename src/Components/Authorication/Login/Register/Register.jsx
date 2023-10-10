import { Link } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthCreate } from "../AuthProvider/AuthProvider";
import swal from 'sweetalert';



const Register = () => {
    const [password,setpassword]=useState('')
    const {newUser,Googleauth}=useContext(AuthCreate);
    const heldlebtnmain = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        // const email=e.target.email.value
        // const password=e.target.password.value
        console.log(password,email);

        setpassword('')
        if (password.length < 6) {
            setpassword('password should be at least 6 character')
        }
        else if (!/[0-9]/.test(password)) {
            setpassword('Please adding Number character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setpassword('Please adding at least 1 uppercase')
            return;

        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setpassword('Please adding at least one special character')
            return;
        }
        newUser(email,password)
        .then(result =>{
            console.log(result.user);
            swal({
                title: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("Your information will safe!", {
                    icon: "success",
                  });
                } else {
                  swal("Successfully register!");
                }
              });
        })
        .catch(error=>{
            console.error(error);
        })

    }
    const Googlebtn=()=>{
        Googleauth()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error)
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
                        <p className="text-center pb-4 text-lg">Register with <button onClick={Googlebtn} className="btn btn-outline btn-error">Google</button></p>
                    </div>
                    <div className='bg-red-200 rounded-lg'>
                        {
                            password && <p className='mt-4 px-4 py-2 font-semibold text-2xl '> {password}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;