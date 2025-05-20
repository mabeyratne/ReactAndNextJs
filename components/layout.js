import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

const name = 'Mahesh Abeyratne';
export const siteTitle = 'Next.js Sample Project';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta  
        property="og:image"
        content={``}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content='summary_large_image' />
    </Head>
<header className={styles.header}>
  {typeof home !== 'undefined' && home ? (
    <>
      <Image
        priority
        src="/images/profile.jpeg"
        className={utilStyles.heading2Xl}
        height={144}
        width={144}
        alt="{name}"
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </>
  ) : (
    <>
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpeg"
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt=""
        />
      </Link>
      <h2 className={utilStyles.heading2Xl}>
        <Link href="/" className={utilStyles.colorInherit}>
          {name}
        </Link>
      </h2>
    </>
  )}
</header>
    <main>{children}</main>
    {!home && (
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    )}
    
    </div>
  );
}
