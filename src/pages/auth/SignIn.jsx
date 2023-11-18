
import { useForm } from 'react-hook-form';
import useAuth from '../hook/useAuth';
import img from '/authentication.gif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const SignIn = () => {

        const { signIn,googleSign} = useAuth();
        const navigate  = useNavigate();
        const { register, handleSubmit } = useForm();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/";
        console.log(location);
        const onSubmit = (data)=>{
            console.log(data);
            signIn(data.email,data.password)
            .then(result=>{
                console.log(result.user);
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                  navigate(from, { replace: true });
            })
            .catch(error=>{
                console.log(error.message);
            })
        }
    
    return (
        <div className="hero md:min-h-screen max-w-screen-xl mx-auto bg-slate-50">
        <div className="hero-content flex-col lg:flex-row-reverse md:px-10">
          <div className="text-center md:w-1/2 lg:text-left pt-10 md:pt-0">
                <img src={img} alt=""/>
          </div>
          <div className="card shadow-2xl md:w-1/2 md:px-10 w-full">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-cyan-600">Login now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" {...register('email')} required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' className="input input-bordered"  placeholder="password" {...register('password')} required />
              </div> 
              <div className="form-control mt-6">
                <button  className="btn bg-cyan-600 hover:bg-cyan-700 text-white" type='submit'>Login</button>
              </div>
              <div className='flex justify-between px-5'>
                <h1>Don't have an Account?</h1>
                <h2 className='text-cyan-500'><Link to="/register">Sign Up</Link></h2>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    );
};

export default SignIn;