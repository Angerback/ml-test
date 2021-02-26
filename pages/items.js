import Head from 'next/head';
import PropTypes from 'prop-types';
import SearchBar from '../components/searchBar';
import SearchItems from '../components/searchResults';
import Breadcrumb from '../styles/breadcrumb';
import ContentWrapper from '../styles/contentWrapper';
import { fetchItems } from './api/items';

export default function Items({ items, breadcrumb }) {
  return (
    <>
      <Head>
        <title>{`Resultados busqueda - ${items.length}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
      <ContentWrapper>
        <Breadcrumb>
          {breadcrumb}
        </Breadcrumb>
        <SearchItems items={items} />
      </ContentWrapper>
    </>
  );
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
  breadcrumb: PropTypes.string.isRequired,
};

export async function getServerSideProps(data) {
  const result = await fetchItems(data?.query?.q);
  return {
    props: result,
  };
}
