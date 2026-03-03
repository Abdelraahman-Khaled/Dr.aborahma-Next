import React from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ApproachSection from './components/ApproachSection';
import CertificatesExperienceSection from './components/CertificatesExperienceSection';
import ObesitySurgeriesSection from './components/ObesitySurgeriesSection';
import TelevisionInterviewsSection from './components/TelevisionInterviewsSection';
import BMICalculatorSection from './components/BMICalculatorSection';
import Component10 from './components/Component10';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

export default function HomeHtml() {
    return (
        <React.Fragment>
            <Preloader />
            <Header />
            <HeroSection />
            <AboutUsSection />
            <ApproachSection />
            <CertificatesExperienceSection />
            <ObesitySurgeriesSection />
            <TelevisionInterviewsSection />
            <BMICalculatorSection />
            <Component10 />
            <FAQSection />
            <BlogSection />
            <Footer />
        </React.Fragment>
    );
}
