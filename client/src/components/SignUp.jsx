import { Link } from 'react-router-dom';
import { useState } from 'react';
import googleIcon from '../icons/search.png';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
// import rightImage from '../image/img22.jpg' 



function SignUp() {

  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" })

  const ChangeSignUpData = (e) => {
    e.preventDefault()
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
  }



  const SignUpDataBase = async (e) => {
    e.preventDefault()
    try {

      const url = 'http://localhost:5000/createUser';

      const user = await axios.post(url, signUpData)
      if (user.status === false) window.alert("invalid data")
      else { navigate('/LogIn') }
    }
    catch (err) { window.alert(err.response.data.message) }

  }

return (
  <div>
    <div className="SignupImage w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 py-[110px]">
      {/* Container */}
      <div className='bg-[#0f64216b] fixed flex rounded-2xl shadow-2xl p-3'>
        {/* left Container */}
        <div className=' px-8'>
          <h1 className='font-bold text-2xl mx-28'> SignUp</h1>
          <p className='mt-4'>
            If you already are a member, Please
            <Link className='text-white mx-3 hover:text-blue-500' to="/Login">Login</Link>
          </p>
          <form className='flex flex-col gap-4'>
            <input className='p-2 mt-8 rounded-xl border' onChange={ChangeSignUpData} type="text" name='name' placeholder='Enter The Name' />
            <input className='p-2 rounded-xl border' onChange={ChangeSignUpData} type="text" name='email' placeholder='Enter The Email' />
            <input className='p-2 rounded-xl border' onChange={ChangeSignUpData} type="Password" name='password' placeholder='Enter The Password' />

            <button onClick={SignUpDataBase} className='bg-[#27b469] rounded-xl text-black py-2 hover:scale-110 transform duration-300' >

              Sign Up
            </button>
          </form>
          <button className='my-3 flex items-center bg-white border py-2 w-full rounded-xl hover:bg-gray-200 hover:scale-110 transform duration-300'>
            <img className='h-[30px]  mx-[35px]' src={googleIcon} alt="SignGoogleLogo" />
            Sign Up with Google
          </button>
        </div>

        {/*right Container */}
       
      </div>
    </div>
  </div>
)
}

export default SignUp