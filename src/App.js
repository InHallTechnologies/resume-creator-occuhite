import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Resume from './pages/resume/resume.component';

function App() {
  return (
    <Routes>
      <Route path='/:brachId/:studentId' element={<Resume />} />
    </Routes>
  );
}

export default App;
