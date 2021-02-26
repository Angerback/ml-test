import styled from 'styled-components';
import PropTypes, { shape } from 'prop-types';
import Link from 'next/link';
import Picture from '../styles/picture';
import formatPrice from '../formatters/formatPrice';

const itemHeight = '150px';

const Container = styled.a`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: white;
  height: ${itemHeight};
  border-bottom: 1px solid #dcdcdc;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

const Price = styled.span`
  font-size: 16px;
  margin-bottom: 20px;
`;

const ProductInformation = styled.div`
  display: flex;
  padding: 50px 20px;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 14px;
`;

const Location = styled.span`
  margin: auto;
`;

export default function SearchItem({ item }) {
  return (
    <Link href={`/items/${item.id}`} passHref>
      <Container>
        <Picture height={itemHeight} src={item.picture} />
        <ProductInformation>
          <Price>{formatPrice(item.price)}</Price>
          <Title>{item.title}</Title>
        </ProductInformation>
        <Location>{item.location}</Location>
      </Container>
    </Link>
  );
}

SearchItem.propTypes = {
  item: shape({
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
