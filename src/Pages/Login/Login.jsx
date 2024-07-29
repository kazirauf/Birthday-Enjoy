import { Link } from "react-router-dom";
import login from "../../assets/istockphoto-1281150061-612x612-removebg-preview.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Prividers/AuthProvider";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { FaGoogle } from 'react-icons/fa';
const Login = () => {

  const {signIn, signInWthGoogle} = useContext(AuthContext)
  const handleLogin = e => {
    e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

       

        signIn(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          if(user){
            return toast.success('you login Successfully.')
          }
        })
        .catch(error => {
          console.error(error)
          toast.error(error.message)
          
        })
  }
    

   const handleLoginWithGoogle = () =>{
    signInWthGoogle()
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error))
   }


    return (
        <div>
       <div className="hero lg:h-[800px]">
  <div className="hero-content flex-col lg:flex-row-reverse gap-52">
    <img src={login} className="w-[900px] rounded-lg " />
    <div>
      <form onSubmit={handleLogin} className=" w-[600px] ">
     <div className="py-10 flex justify-center">
     <div >
       <div>
       <h3 className="mb-3 text-xl font-bold">Email</h3>
       <input type="email" name="email" placeholder="Email" className="input input-bordered w-[500px]" required />
       </div>
       <div className="mt-5">
       <h3 className="mb-3 text-xl font-bold">Password</h3>
       <input type="password" name="password" placeholder="Password" className="input input-bordered w-[500px]" required />
       </div>
       <input className="btn bg-[#88d4f2] text-white w-full mt-10" type="submit" value="Login" />
       <button onClick={handleLoginWithGoogle} className="w-full bg-[#88d4f2] text-white mt-5 flex justify-center py-4 rounded-lg"><FaGoogle></FaGoogle></button>
       </div>
     </div>
       <p className="block lg:ml-14 font-bold text-xl">Do not have an account go to <Link className="text-orange-500" to="/register">Register</Link></p>
      </form>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Login;