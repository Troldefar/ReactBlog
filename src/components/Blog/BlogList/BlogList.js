import { Link } from 'react-router-dom';

const BlogList = ({title, blogs}) => {
  return ( 
    <div className="blog-list">
      <h1>
        { title }
      </h1>
      {
        blogs.map((blog) => (
          <>
            <div 
              className="blog-preview" 
              key={blog.id}
            >
              <h2>
                { blog.title }
              </h2>
              <p>
                Written by { blog.author }
              </p>
              <Link 
                className="link-to-blog" 
                to={`/blogs/${blog.id}`}
              >
                View specific
              </Link>
            </div>
          </>
        ))
      }
    </div>
  );
}

export default BlogList;