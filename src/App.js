import React, { useState } from 'react';
import './App.css';

import CountrySelect from './CountrySelect';

function App() {

  const [ val, setVal ] = useState('');
  const [ text, setText ] = useState('');

  return (
    <div className="App">

      <div>
        ({JSON.stringify(val)})
      </div>
      <div>
        ({JSON.stringify(text)})
      </div>

      <div>
        <button onClick={() => setVal({ id: 'fr' })}>set value as: France</button>
      </div>
      <div>
        <button onClick={() => setVal({ id: 'de' })}>set value as: Germany</button>
      </div>
      <div>
        <button onClick={() => setVal({ id: 'xyz' })}>set value as: Invalid</button>
      </div>

      &nbsp;
      &nbsp;
      &nbsp;

      <div className='form'>

        <CountrySelect
          value={val}
          onChange={setVal}
          onTextChange={setText}
          // valueAs='id'
          // throwInvalidValueError={false}
        />

      </div>
    
    </div>
  );
}

export default App;
