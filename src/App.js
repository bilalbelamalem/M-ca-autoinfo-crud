import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './Composants/AddUser';
import UpdateUser from './Composants/UpdateUser';
import UserList from './Composants/UserList';
import './styles.css';

function App() {
    return (
        <div className="container">
            <h1>Méca-autoinfo</h1>
            <h2>Bilal Belamalem</h2>
            <h2>Yousef Mahmoudi</h2>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<UserList />} />
                    <Route path='/add-user' element={<AddUser />} />
                    <Route path='/update-user/:id' element={<UpdateUser />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;