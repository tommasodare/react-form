import { useState } from 'react'
import articles from './data/articols';

export default function App() {

  const [newTitle, setNewTitle] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (

    <>

      <div className="container text-center">
        <h1>Posts</h1>
        {articles.map((article, index) => (
          <div key={index}>{article.title}</div>
        ))}
      </div>


      <form onSubmit={handleSubmit} className='m-4 text-center'>

        <div className="mb-3">
          <label className="form-label">New Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Insert new Title Here"
            value={newTitle}
            onChange={e => { setNewTitle(e.target.value) }}
          />
        </div>

        <p>il nuovo titolo è {newTitle}</p>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>


    </>
  )
}