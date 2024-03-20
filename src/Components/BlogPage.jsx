import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Helmet>
                <title>Blog Page</title>
            </Helmet>
        </div>
        Hello here is Blog Page
    </div>
  )
}

export default BlogPage