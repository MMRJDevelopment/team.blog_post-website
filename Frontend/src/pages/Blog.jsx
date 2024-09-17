import React from 'react'
import Container from '../components/layouts/Container'
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <Container className="pt-[160px]">
      <div>
        <h6 className="font-Mulish font-extrabold text-[48px] text-[#000000]">
          Blog posts
        </h6>
        <p className="font-Mulish  font-semibold text-lg text-[#6D7D8B] pt-5 pb-[69px]">
          Our latest updates and blogs about managing your team
        </p>
      </div>
      <div className='flex items-center  justify-between'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </Container>
  );
}

export default Blog
