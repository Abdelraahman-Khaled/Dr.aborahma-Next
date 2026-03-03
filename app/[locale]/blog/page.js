import React from 'react';
import BlogPreloader from './components/BlogPreloader';
import BlogHeader from './components/BlogHeader';
import BlogHeaderX from './components/BlogHeaderX';
import BlogMainSection from './components/BlogMainSection';
import BlogFooter from './components/BlogFooter';

export default function BlogHtml() {
    return (
        <React.Fragment>
            <BlogPreloader />
            <BlogHeader />
            <BlogHeaderX />
            <BlogMainSection />
            <BlogFooter />
        </React.Fragment>
    );
}
