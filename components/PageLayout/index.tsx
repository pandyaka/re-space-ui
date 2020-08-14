import React from 'react';
import Navbar from '@components/Navbar';

interface PageLayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.SFC = ({ children }: PageLayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default PageLayout;
