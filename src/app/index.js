// pages/index.js

import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Link from 'next/link';

export default function IndexPage() {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <main>
                <Home />
                <About />
                <Contact />
            </main>
        </div>
    );
}
