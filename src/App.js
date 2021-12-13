import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import About from './components/About';
import Project from './components/Project';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post' element={<Post />} />
        <Route path='/post/:slug' element={<SinglePost />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </>
  );
};

export default App;
