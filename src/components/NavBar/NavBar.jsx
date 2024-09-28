import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from '../Link/Link';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Profile', path: '/profile/:id' },
    ];
    return (
        <nav className="px-8 py-4 text-white text-bold text-xl bg-orange-400">
            <div
                onClick={() => setOpen(!open)}
                className="text-3xl md:hidden inline-block cursor-pointer"
            >
                {open ? (
                    <AiOutlineClose></AiOutlineClose>
                ) : (
                    <AiOutlineMenu></AiOutlineMenu>
                )}
            </div>
            <ul
                className={`
            md:flex absolute duration-1000 bg-orange-400 px-4 py-2 md:static
            ${open ? 'top-12' : '-top-56'}
            `}
            >
                {routes.map((route) => (
                    <Link key={route.id} route={route}></Link>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
