import '../styles/global.css';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
// Compare this snippet from pages/posts/first-post.js:
// import Link from 'next/link';