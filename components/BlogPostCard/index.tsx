import Button from '../Button';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import styles from './BlogPostCard.module.css';

type BlogPostCardProps = {
  title: string;
  categories: string[];
  thumbnail: string;
};

const BlogPostCard = ({ title, categories, thumbnail }: BlogPostCardProps) => {
  return (
    <div className={styles.blogPostCard}>
      <div className={styles.blogPostCardHover}>
        <Button text="read on medium" icon={faMedium} />
      </div>
      <div>
        <img src={thumbnail} alt={title} style={{ maxWidth: '100%' }} />
      </div>
      <div>
        <div className={styles.blogPostCardTitle}>[tr] {title}</div>

        <div className={styles.blogPostCardKeywords}>
          {categories.map((category) => (
            <span key={category}> #{category} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
