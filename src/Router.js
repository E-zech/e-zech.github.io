import { Route, Routes } from 'react-router-dom';
import Login from './user/Login';
import Signup from './user/Signup';
import Account from './user/Account';
import AllCards from './pages/HomePage';
import MyCards from './cards/MyCards';
import FavCards from './cards/FavCards';
import UsersMenagment from './admin/UsersMenagment';
import About from './pages/About';
import EditCards from './cards/EditCard';
import HomePage from './pages/HomePage';
import Home from './LandingPages/Home';
import filterdCards from './components/SearchBar';
import AboutUs from './LandingPages/AboutUs';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage filteredCards={filterdCards}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/my-cards" element={<MyCards />} />
            <Route path="/favorite" element={<FavCards />} />
            <Route path="/edit-cards/:id" element={<EditCards />} />
            <Route path="/admin" element={<UsersMenagment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/landing-page/:id" element={<Home/>} />
            <Route path="/landing-page-about-us" element={<AboutUs />} />
        </Routes>
    )
}
