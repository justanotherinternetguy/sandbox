import logo from './logo.svg';
import './App.css';
import {Card, Button} from '@mui/material';
function App() {
  return (
    <div className="App">
      <Card>This is a CARD</Card>
      <Button>This is a BUTTON</Button>
      <Button variant="contained">This is a BUTTON</Button>
      <Button variant="outlined">This is a BUTTON</Button>
    </div>
  );
}

export default App;
