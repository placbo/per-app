import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

const App: React.FC = () => {

  const [name, setName] = useState('');
  const [showSpinner, setshowSpinner] = useState(false);

  const handleClick = (event: React.MouseEvent) => {
    setshowSpinner(true);

    Axios.get('http://echo.jsontest.com/name/Per')
      .then(response => {
        setTimeout(() => {
          setName(response.data.name);
          setshowSpinner(false);
        }, 2000);
      })
      .catch(function(error) {
        console.error(error);
      })
      .finally(function() {
      });


    // fetch('http://echo.jsontest.com/name/Per')
    //   .then(results => results.json())
    //   .then(results => {
    //     setTimeout(() => {
    //       setName(results.name);
    //       setshowSpinner(false);
    //     }, 2000);
    //   });


  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          PER-APP
        </p>
        <button data-cy='button' onClick={handleClick}>Get name</button>
        <p data-cy='result_holder'>
          {
            showSpinner
              ? 'laster data...'
              : `Name: ${name}`
          }
        </p>
      </header>
    </div>
  );
};

export default App;
