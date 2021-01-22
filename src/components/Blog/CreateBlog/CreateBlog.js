import { useState } from "react";
import { useHistory } from 'react-router-dom';
import useFetchPost from '../../fetch/useFetchMethod';

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('test1');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = {
      title,
      body, 
      author
    }
    await useFetchPost('http://localhost:8000/blogs', 'POST', blog);
    setIsPending(false);
    history.push('/');
  }

  return ( 
    <div className="create">
      <h2>
        Add new blog post
      </h2>
      <form
        onSubmit={HandleSubmit}
      >
        <div>
          <label>
            Title
          </label>
          <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>
            Body
          </label>
          <textarea 
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          >
          </textarea>
        </div>
        <div>
          <label>
            Author
          </label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="test1"></option>
            <option value="test2"></option>
          </select>
        </div>
        <button 
          type="submit"
          disabled={isPending}
        >
          Create post
        </button>
      </form>
    </div>
  );
}

export default Create;