import Link from 'next/link';

import useSite from 'hooks/use-site';
import { postPathBySlug } from 'lib/posts';
// import { categoryPathBySlug } from 'lib/categories';

import Section from 'components/Section';
import Container from 'components/Container';
import Pill from 'components/Pill';
import WavyLine from 'components/WavyLine';

import styles from './Footer.module.scss';

const Footer = () => {
  const { metadata = {}, recentPosts = [], categories = [] } = useSite();
  const { title } = metadata;

  const hasRecentPosts = Array.isArray(recentPosts) && recentPosts.length > 0;
  const hasRecentCategories = Array.isArray(categories) && categories.length > 0;
  const hasMenu = hasRecentPosts || hasRecentCategories;

  return (
    <footer className={styles.footer}>
      <WavyLine />
      {hasMenu && (
        <Section className={styles.footerMenu}>
          <Container>
            <ul className={styles.footerMenuColumns}>
              {hasRecentPosts && (
                <li>
                  <Link href="/posts/">
                    <a className={styles.footerMenuTitle}>
                      <strong>Recent Posts</strong>
                    </a>
                  </Link>
                  <ul className={styles.footerMenuItems}>
                    {recentPosts.map((post) => {
                      const { id, slug, title } = post;
                      return (
                        <li key={id}>
                          <Link href={postPathBySlug(slug)}>
                            <a>{title}</a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
              {hasRecentCategories && (
                <li>
                  <Link href="/categories/">
                    <a className={styles.footerMenuTitle}>
                      <strong>Categories</strong>
                    </a>
                  </Link>
                  <ul className={styles.footerMenuPills}>
                    {categories.map((category) => {
                      const { id, slug, name } = category;
                      return (
                        <li key={id}>
                          <Pill slug={slug} name={name} />
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
            </ul>
          </Container>
        </Section>
      )}

      <Section className={styles.footerLegal}>
        <Container>
          <p>
            &copy; {new Date().getFullYear()} {title}
          </p>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
