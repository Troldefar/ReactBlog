import BlogList from '../Blog/BlogList/BlogList';
import useFetch from '../fetch/useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
  return (
    <div className="home">
      { error && <div> { error } </div> }
      { isPending && 'Loading data, hang on!' }
      { blogs &&
        <BlogList
          blogs={blogs} 
          title="All blogs"
        />
      }
    </div>
  );
}

export default Home;