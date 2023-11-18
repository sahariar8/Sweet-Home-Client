import { useForm } from 'react-hook-form';
import img from '/authentication.gif'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useAuth';
import { FaGoogle } from 'react-icons/fa';
import useAxios from '../hook/useAxios';
import Swal from 'sweetalert2';


const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const SignUp = () => {
    const {createUser,userProfileUpdate} = useAuth();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxios();
    const navigate = useNavigate();
    const onSubmit =async (data)=>{
        console.log(data)
            const imagefile = { image: data.image[0] };
            console.log(imagefile)
            const res = await axiosPublic.post(image_hosting_api,imagefile,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            console.log(res.data);
                const name =  data.name;
                const email =  data.email;
                const password = data.password;
                const image =  res.data.data.display_url;
            if(res.data.success){
                const user = { name,email,image }
                console.log(user)
                createUser(email,password)
                .then(result=>{
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    userProfileUpdate(name,image)
                    .then(()=>{
                        console.log('profile Updated')
                        axiosPublic.post('/users',user)
                        .then(res=>{
                            console.log(res.data);
                            if(res.data.insertedId){
                                Swal.fire({
                                    title: "Good job!",
                                    text: "Registration Successfully Done",
                                    icon: "success"
                                  });
                                navigate('/login')
                            }
                        })
                    })
                    .catch(error=>console.log(error.message))
                })
                .catch(error=>{
                    console.log(error.message);
                })
            }
            
    }
    return (
        <div className="hero md:min-h-screen max-w-screen-xl mx-auto bg-slate-50">
        <div className="hero-content flex-col lg:flex-row-reverse md:px-10">
          <div className="text-center md:w-1/2 lg:text-left pt-10 md:pt-0">
                <img src={img} alt=""/>
          </div>
          <div className="card shadow-2xl md:w-1/2 md:px-10 w-full">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
            <h1 className="text-3xl md:text-5xl font-bold text-center text-cyan-600">Register Now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name"  className="input input-bordered" {...register('name')} required />
              </div>
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
              <input type="file" className="file-input w-full max-w-xs" {...register('image')} />
              <div className="form-control mt-6">
                <button  className="btn bg-cyan-600 hover:bg-cyan-700 text-white" type='submit'>Sign Up</button>
              </div>
              <div className='flex px-5'>
                <h1>Already have an Account?Please</h1>
                <h2 className='text-cyan-500 ml-2'><Link to="/login">Login</Link></h2>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className='mb-5 px-8'>
                <button className="btn btn-outline btn-secondary w-full" ><FaGoogle></FaGoogle>Google</button>
            </div>

           
          </div>
        </div>
      </div>
    );
};

export default SignUp;