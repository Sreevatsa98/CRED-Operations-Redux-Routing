import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './features/users/AddUser';
import EditUser from './features/users/EditUser';
import UserList from './features/users/UserList';

function App() {
  return (
    <div className= "container mx-auto px-2 max-w-5xl pt-10 md:pt-25">
      <h1 className="text-center font-bold text-2xl text-white">
        CRED with Redux
      </h1>
      <Routes>
        <Route path="/" element={<UserList />}/>
        <Route path="/add-user" element={<AddUser />}/>
        <Route path="/edit-user/:id" element={<EditUser />}/>
      </Routes>
    </div>
  );
}

export default App;
