import React from 'react'
import './App.css';
import { Tours } from './data';

function App() {
  const [readMore, setReadMore] = React.useState(false)

  return (
    <div className="App">
      {
        Tours.map(tour => (
          <article className="tour-card">
            <img src={tour.image} alt="no" />
            <footer>
              <div className="tour-info">
                <h4>{tour.name}</h4>
                <h4 className="tour-price">${tour.price}</h4>
              </div>
              <p>
                {readMore ? tour.description : `${tour.description.substring(0,100)}...`}
              </p>
              <button className="show-more" onClick={()=>setReadMore(!readMore)}>
                {readMore?'showless':'readmore'}
              </button>
              <button className="btn-toggle">
                Not interested
              </button>
            </footer>
          </article>
        ))
      }     
    </div>
  );
}

export default App;
