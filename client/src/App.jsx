import { BrowserRouter, Link, Routes,Route } from 'react-router-dom';
import { CreatePost, Home } from './pages';
import { logo } from './assets';

const App = () => {
  return (
    <BrowserRouter>
    <header className='w-full flex justify-between
    items-center p-4 bg-white sm:px-8 px-4 py-4 border-b border-b-[#707d97]'>
      <Link to='/'>
        <img src={logo} alt='logo' className='w-28 object-contain'></img>
      </Link>
      <Link to='/create-post'
      className='font-inter font-medium bg-[#453297] text-white px-4 py-2
      rounded-md'>Create</Link>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create-post' element={<CreatePost/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
