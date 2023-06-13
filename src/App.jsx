import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.scss';

const App = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
