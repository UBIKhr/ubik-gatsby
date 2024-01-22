import * as React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Hero from './hero.js'

const Layout = ({ children }) => {
    return ( 
        <>
         <Header> </Header> 
          <main className="w-full bg-gradient-end">{children}</main>
         <Footer> </Footer> 
        </>
    );
};

export default Layout;