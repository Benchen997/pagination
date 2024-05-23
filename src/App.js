import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import PageNation from './components/PageNation';


export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;


  useEffect(()=> {
    // 声明一个异步函数
    const fetchPosts = async () => {
      // set loading to true when fetching data
      setLoading(true);
      const res = await axios.get(url);
      setPosts(res.data);
      // set loading to false when data is fetched
      setLoading(false);
    };

    // 必须手动调用fetchPosts函数，否则useEffect不会在组件挂载
    // 时自动调用fetchPosts函数
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="container">
      <h1 className='text-primary'>My Blog</h1>
      <Posts currentPosts={currentPosts} loading = {loading}/>
      <PageNation paginate={paginate} 
                  postsPerPage={postsPerPage}
                  currentPage={currentPage}
                  totalPosts = {posts.length}/>
    </div>
  );
}
