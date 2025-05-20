import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
} 

export default function Home({ allPostsData }) {

  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am like to talk about programming alot</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
         )
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{id}
              {title}
              </Link>
              <br/>
              {id} {/* <Link href={`/posts/${id}`}>{id}</Link> */}
              <p></p>
              <small className={utilStyles.lightText}>
                < Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      
      </section>
    </Layout>
  
  );
}
