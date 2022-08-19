import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import BlogPostCard from '../components/BlogPostCard';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import { faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getBlogPosts } from '../api/blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IBlogPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: object;
  categories: string[];
}

const Home: NextPage = () => {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([]);

  useEffect(() => {
    getBlogPosts().then((resp) => {
      setBlogPosts(resp.items);
    });
  }, []);

  return (
    <div>
      <Header title="home" />
      <main>
        <div className="container">
          <Title icon={faStar} title="recent blog posts" />

          {!blogPosts.length ? (
            <FontAwesomeIcon icon={faSpinner} pulse />
          ) : (
            <div className="list">
              {blogPosts.map((post) => (
                <a href={post.link} key={post.guid} target="_blank">
                  <BlogPostCard
                    title={post.title}
                    categories={post.categories}
                    thumbnail={post.thumbnail}
                  />
                </a>
              ))}
            </div>
          )}

          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}
          >
            <a href="https://medium.com/@tugsanunlu" target="_blank">
              <Button text="read more" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
