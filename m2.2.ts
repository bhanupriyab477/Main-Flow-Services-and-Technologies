import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import MovieList from './MovieList';


function App() {

  return (
    <div> 
      <nav className="navbar navbar-dark bg-dark">
        <span className='navbar-brand mb-0 h1'>Movie Search App</span>
      </nav>
      <MovieList/>

    
    </div>
  );
}

export default App;