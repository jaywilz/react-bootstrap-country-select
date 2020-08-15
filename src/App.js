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
        <button onClick={() => setVal(null)}>set value as: null</button>
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
          // onTextChange={setText}
          // flush={false}
          // flags={false}
          // size='lg'
          // valueAs='id'
          // throwInvalidValueError={false}
          // exclusions={[ 'fr', 'gb' ]}
          // listMaxHeight={500}
          // disabled
          // additions={[
          //   {
          //     id: "xx",
          //     name: "Xxxx",
          //     flag: "🇨🇺",
          //     alpha2: "xx",
          //     alpha3: "xxx",
          //     ioc: "xxx"
          //   },
          // ]}
        />

      </div>
    
    </div>
  );
}

export default App;
