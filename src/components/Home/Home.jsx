import About from './About/About';
import Category from './Category/Category';
import Hero from './Hero/Hero';
import NavHeader from './Navbar/NavHeader';
import Navbar from './Navbar/Navbar';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <Navbar></Navbar>
            <Hero></Hero>
            <Category></Category>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;