import { Link } from "react-router-dom";
import login from "../../assets/ffg.png"
import { useContext, useState } from "react";
import { AuthContext } from "../../Prividers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';
import { updateProfile } from "firebase/auth";
const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const {createUser, signInWthGoogle} = useContext(AuthContext)
  const handleRegister = e => {
   e.preventDefault();
        const form = new FormData(e.currentTarget)
        const photoUrl = form.get('photoUrl')
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password)

        setRegisterError('');


      const specialCharactersRegex = /[!@#\$%\^\&*\)\(+=._-]/g;


      if (password.length < 6) {
          setRegisterError('Password should be at least 6 characters or longer');
          return;
      }
 
      else if (!/[A-Z]/.test(password)) {
          setRegisterError('Your password should have at least one upper case characters.')
          return;
      }
      else if (!specialCharactersRegex.test(password)) {
        setRegisterError("Your password must have a special character");
        return;
      }
      
      
      
        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        updateProfile(result.user, {
            displayName: name, 
            photoURL: photoUrl
        })
        .then( () => console.log('profile updated'))
        .catch()
          if(user){
            return toast.success('create the user account is Successfully done.')
          }
        
        })
        .catch(error => {
          console.error(error)
         
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
    <img src={login} className="w-[1600px] rounded-lg " />
    <div>
      <form onSubmit={handleRegister} className=" w-[600px] ">
     <div className="py-10 flex justify-center">
     <div >
       <div>
       <h3 className="mb-3 text-xl font-bold">Photo URL</h3>
       <input type="text" name="photoUrl" placeholder="your photo url" className="input input-bordered w-[500px]" required />
       </div>
       <div>
       <h3 className="mb-3 text-xl font-bold">Name</h3>
       <input type="text" name="name" placeholder="Name" className="input input-bordered w-[500px]" required />
       </div>
       <div className="mt-5">
       <h3 className="mb-3 text-xl font-bold">Email</h3>
       <input type="email" name="email" placeholder="Email" className="input input-bordered w-[500px]" required />
       </div>
       <div className="mt-5">
       <h3 className="mb-3 text-xl font-bold">Password</h3>
       <input type="password" name="password" placeholder="Password" className="input input-bordered w-[500px]" required />
       </div>
       {
                    registerError && <p className="text-red-700">{registerError}</p>
        }
       <input className="btn bg-[#feb9cc] text-white w-full mt-10" type="submit" value="Register" />
       <button onClick={handleLoginWithGoogle} className="w-full bg-[#feb9cc] text-white mt-5 flex justify-center py-4 rounded-lg"><FaGoogle></FaGoogle></button>
       </div>
     </div>
       <p className="block lg:ml-14 font-bold text-xl">you have already an account go to <Link className="text-orange-500" to="/Login">Login</Link></p>
      </form>
    </div>
  </div>
</div> 
<ToastContainer />
        </div>
    );
};

export default Register;