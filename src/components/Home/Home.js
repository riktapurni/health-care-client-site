import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
//import Login from '../Login/Login';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';



const Home = () => {
    return (
        <div id="home">
            
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;