import { Link } from 'react-router-dom';
import rightImage from '../image/img11.jpg' 
import googleIcon from '../icons/search.png';
import { useState } from 'react';
import {useNavigate} from'react-router-dom';
import axios from 'axios';

function Login() {

    const navigate = useNavigate();
    const [signUpData, setSignUpData] = useState()
  
    const ChangeSignUpData = (e) => {
      e.preventDefault()
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
      console.log(e.target.name, e.target.value );
    }
  
    const SignUpDataBase = async (e) => {
        e.preventDefault()
        try {
    
          const url = 'http://localhost:5000/UserLogin';
    
          const user = await axios.post(url, signUpData)
          let token = user.data.token;
          let userId = user.data.UserId
          ;
          if (user.status === false) window.alert("invalid data")
            
          else { 
            localStorage.setItem('AccessToken',token)
            localStorage.setItem('UserId',userId)
            window.alert(user.data.message);
            navigate('/') 
        }
        }
        catch (err) { window.alert(err.response.data.message) }
    
      }

    return (
        <div>
            
            <div className="SignupImage w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4 py-[110px]">
                {/* Container */}
                <div className='fixed mt-[100px] bg-[#0f64216b] rounded-2xl shadow-2xl p-3'>
                    {/* left Container */}
                    <div className='px-8 flex flex-col w-full'>
                        <h1 className='font-bold text-2xl mx-28'> LogIn</h1>
                        <p className='mt-4'>
                            If you already are a member, Please
                            <Link className='text-white mx-3 hover:text-blue-500' to="/Login">Login</Link>
                        </p>
                        <form className='flex flex-col gap-4 my-5'>
                            <input onChange={ChangeSignUpData} className='p-2 rounded-xl border' type="text" name='email' placeholder='Enter The Email' />
                            <input onChange={ChangeSignUpData} className='p-2 rounded-xl border' type="Password" name='password' placeholder='Enter The Password' />

                            <button onClick={SignUpDataBase} className='bg-[#27b469] rounded-xl text-black py-2 hover:scale-110 transform duration-300' >

                                Log In
                            </button>
                        </form>

                        <div className='mt-2 grid grid-cols-3 items-center text-gray-500'>
                            <hr className='border-gray-500' />
                            <p className='text-center text-white'>OR</p>
                            <hr className='border-gray-500' />
                        </div>

                        <button className='my-3 flex items-center bg-white border py-2 w-full rounded-xl hover:bg-gray-200 hover:scale-110 transform duration-300'>
                            <img className='h-[30px]  mx-[35px]' src={googleIcon} alt="SignGoogleLogo" />
                            Sign Up with Google
                        </button>
                    </div>

                    {/*right Container */}
                    {/* <div className='w-[400px] md:block hidden py-2'>
                        <img className='h-[410px]  rounded-lg w-[370px]' src={rightImage} alt="rightImage" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Login