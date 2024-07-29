import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import {Navbar,Home,About,Pictures,Blogs,Contact,Login,SignUp} from './components/AllComponents';
 
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Blogs' element={<Blogs/>}/>
        <Route path='/Pictures' element={<Pictures/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>
)}

export default App