import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useFetch from '../../fetch/useFetch';

const ViewBlog = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    })
      .then(() => history.push('/'));
  }

  return ( 
    <div className="single-block">
      { isPending && 'Loading blog post' }
      { error && { error } }
      { data && (
        <article>
          <h2>
            { data.title }
          </h2>
          <hr/>
          <div>
            <h5>
              Body
            </h5>
            { data.body }
          </div>
          <div>
            <h5>
              Author
            </h5>
            <p>
              { data.author }
            </p>
          </div>
          <button
            className="btn-delete"
            onClick={handleClick}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
}

export default ViewBlog;