import React, { useState , useEffect} from 'react';
import data from './data';
import List from './List';
function App() {
  const [people , setPeople] = useState(data)
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("you clicked on me")  
    if(count >1){
      console.log(`not(${count})`)
    }

  },[count]);


  
  return (
    <main>
      <section className="container">
        <h3> 0 birthday today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
      <div>
        
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      
    </main>
  )
}

export default App;

