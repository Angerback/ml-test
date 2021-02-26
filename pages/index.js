import Head from 'next/head';
import SearchBar from '../components/searchBar';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
    </div>
  );
}
