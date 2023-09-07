import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar';
import FakeWebsiteFooter from '../components/Footer';


export default function RootLayout() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <FakeWebsiteFooter />
            </footer>
        </div>
    );
}
