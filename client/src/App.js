import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import PublicNavBar from './components/PublicNavBar';
import './App.css';

function App() {
  return (
    <div className='App'>
      <PublicNavBar />
      <Container>
        <h1 className='text-center'>Let's go</h1>
      </Container>
    </div>
  );
}

export default App;
