import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people,setPeople] = useState(data) ; 
  return ( 
  <> 
  
   <h2>List making </h2>
   <List people = {people} />
   <button className = "btn" type="button" onClick={()=>{setPeople([])}}>clear all </button> 
  
  </>
  
  );



}

export default App;
