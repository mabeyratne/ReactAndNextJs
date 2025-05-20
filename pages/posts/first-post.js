import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <>
      <Layout>
      <Head>
        <title>First Post</title>
        <Script 
        src="https://connect.facebook.net/en_us/sdk.js">
          strategy="lazyOnload"
          lazyOnload={() => {
            console.log('Script loaded correctly, window.FB has been set');
            window.fbAsyncInit = function() {
              FB.init({
                appId      : 'your-app-id',
                cookie     : true,
                xfbml      : true,
                version    : 'v10.0'
              });
            };
          }
        }

        </Script>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      </Layout>
    </>
  );
}
