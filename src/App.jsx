import React, { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';

import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import Tabbutton from './components/Tabbutton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  console.log('APP COMPONENT EXECUTING');

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            {CORE_CONCEPTS.map(concept => (
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <Tabbutton isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')}>Components</Tabbutton>
            <Tabbutton isSelected={selectedTopic === 'jsx'} 
            onSelect={() => handleSelect('jsx')}>JSX</Tabbutton>
            <Tabbutton isSelected={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')}>Props</Tabbutton>
            <Tabbutton isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')}>State</Tabbutton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
