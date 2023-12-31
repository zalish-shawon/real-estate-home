import About from './About/About';
import Category from './Category/Category';
import Choose from './Choose/Choose';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import NavHeader from './Navbar/NavHeader';
import Navbar from './Navbar/Navbar';
import Property from './Property/Property';
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
            <Choose></Choose>
            <Property></Property>
            <Footer></Footer>
        </div>
    );
};

export default Home;