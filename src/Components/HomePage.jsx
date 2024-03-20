import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Helmet>
            <title>Home Page</title>
        </Helmet>

        Hello here is Home Page
    </div>
  )
}

export default HomePage