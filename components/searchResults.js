import PropTypes from 'prop-types';
import SearchItem from './searchItem';

export default function SearchResults({ items }) {
  return (
    <>
      {items.map((item) => (<SearchItem key={item.id} item={item} />))}
    </>
  );
}

SearchResults.propTypes = {
  items: PropTypes.array.isRequired,
};
