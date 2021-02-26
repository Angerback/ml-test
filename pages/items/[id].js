import Head from 'next/head';
import PropTypes from 'prop-types';
import SearchBar from '../../components/searchBar';
import ContentWrapper from '../../styles/contentWrapper';
import ItemDetail from '../../components/itemDetail';
import { fetchProduct } from '../api/items/[id]';
import Breadcrumb from '../../styles/breadcrumb';

const Item = ({ selectedItem }) => (
  <>
    {selectedItem && selectedItem.id ? (
      <>
        <Head>
          <title>{`${selectedItem.title}`}</title>
          <meta name="description" content={selectedItem.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SearchBar />
        <ContentWrapper>
          <Breadcrumb>
            {selectedItem.breadcrumb}
          </Breadcrumb>
          <ItemDetail item={selectedItem} />
        </ContentWrapper>
      </>
    ) : <div>No encontramos el producto que estas buscando</div>}
  </>
);

export default Item;

Item.propTypes = {
  selectedItem: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    price: PropTypes.shape({
      amount: PropTypes.number,
      currency: PropTypes.string,
    }),
    breadcrumb: PropTypes.string,
  }).isRequired,
};

export async function getServerSideProps(data) {
  const result = await fetchProduct(data?.query?.id);
  return {
    props: result,
  };
}
