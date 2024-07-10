import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App(){
 const [alertvisible,setAlertVisibility] = useState(false);

  let items = [
    'New York',
    'San Franciso',
    'Tokyo',
    'London',
    'Paris'
];

const handleSelectItem=(item:string )=>{
  console.log(item);
}

  return (
  <div>
    
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    {alertvisible && <Alert onClose={()=>setAlertVisibility(false)}>
  My alert
    </Alert>}

    <Button  onClick={()=>setAlertVisibility(true)}>My Button</Button>
  </div>
  );
  
  
}

export default App;