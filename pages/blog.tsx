import type { NextPage } from 'next';
import BlogPostCard from '../components/BlogPostCard';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Title from '../components/Title';
import { getBlogPosts } from '../api/blog';

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

interface PageProps {
  blogPosts: IBlogPost[];
}

const Blog: NextPage<PageProps> = ({ blogPosts }) => {
  return (
    <div>
      <Header title="blog" />
      <main>
        <div className="container">
          <Title title="recent blog posts" />

          <div className="list">
            {blogPosts.map((post) => (
              <a
                href={post.link}
                key={post.guid}
                target="_blank"
                rel="noreferrer"
              >
                <BlogPostCard
                  title={post.title}
                  categories={post.categories}
                  thumbnail={post.thumbnail}
                />
              </a>
            ))}
          </div>

          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}
          >
            <a
              href="https://medium.com/@tugsanunlu"
              target="_blank"
              rel="noreferrer"
            >
              <Button text="read more" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const data = await getBlogPosts();
  const items = data.items;

  return {
    props: { blogPosts: items },
  };
}

export default Blog;
