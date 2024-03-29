import React, {useState} from 'react';
import { CORE_CONCEPTS } from './data.js';

import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import Tabbutton from './components/Tabbutton.jsx';

function App() { 
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button') ;


  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log('selectedButton');
  }

  console.log('APP COMPONENT EXECUTING')

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <Tabbutton onSelect={() => handleSelect('components')}>Components</Tabbutton>
            <Tabbutton onSelect={() => handleSelect('jsx')}>JSX</Tabbutton>
            <Tabbutton onSelect={() => handleSelect('props')}>Props</Tabbutton>
            <Tabbutton onSelect={() => handleSelect('state')}>State</Tabbutton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
