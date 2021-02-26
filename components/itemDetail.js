import PropTypes from 'prop-types';
import styled from 'styled-components';
import formatPrice from '../formatters/formatPrice';
import Picture from '../styles/picture';
import PrimaryButton from '../styles/primaryButton';

const ItemDetailBody = styled.div`
    background-color: white;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    background-color: white;
    padding: 25px;
`;

const Condition = styled.p`
    font-size: 14px;
    margin-bottom: 10px;
`;

const Price = styled.p`
    font-size: 24px;
    margin-bottom: 30px;
`;

export default function ItemDetail({ item }) {
  return (
    <>
      <ItemDetailBody>
        <Picture height="400px" src={item && item.picture} />
        <div>
          <Condition>
            {item.condition === 'new' ? 'Nuevo' : 'Usado'}
            {` - ${item.sold_quantity} vendidos`}
          </Condition>
          <h1>{item.title}</h1>
          <Price>{formatPrice(item.price || { currency: 'ARS' })}</Price>
          <PrimaryButton>Comprar</PrimaryButton>
        </div>

        <div>
          <h2>Descripcion del producto</h2>
          <p>{item.description}</p>
        </div>
      </ItemDetailBody>

    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.shape({
    picture: PropTypes.string,
    condition: PropTypes.string,
    sold_quantity: PropTypes.number,
    price: PropTypes.shape({
      amount: PropTypes.number,
      currency: PropTypes.string,
    }),
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
