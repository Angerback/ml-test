import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Container = styled.main`
    display: flex;
    background-color: ${({ theme: { mlYellow } }) => mlYellow};
    justify-content: center;
    height: 45px;
    padding: 5px 0 5px 0;
`;

const InnerContainer = styled.div`
    flex:1;
    display: flex;
    max-width: ${({ theme: { contentWidth } }) => contentWidth};
`;

const SearchInput = styled.input`
    flex: 1;
`;

const SearchButton = styled.button`
    background-color: lightgray;
    width: 35px;
`;

const MercadoLibreLogoLink = styled.a`
    margin: 0 10px 0 10px;
    width: 134px;
    height:35px;
    background-image: url('https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/logo__large_plus.png');
`;

const SearchForm = styled.form`
  flex:1;
  display: flex;
`;

export default function SearchBar() {
  const router = useRouter();
  const routeSearch = router.query.q;
  const [searchState, setSearchState] = useState(routeSearch);

  const handleSearchChange = (e) => {
    setSearchState(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/items?q=${searchState}`);
  };

  useEffect(() => {
    if (routeSearch !== searchState) {
      setSearchState(routeSearch);
    }
  }, [routeSearch]);

  return (
    <Container>
      <InnerContainer>
        <Link href="/" passHref>
          <MercadoLibreLogoLink />
        </Link>
        <SearchForm onSubmit={handleSearchSubmit}>
          <SearchInput onChange={handleSearchChange} value={searchState} placeholder="Nunca dejes de buscar" />
          <SearchButton formAction="submit" />
        </SearchForm>
      </InnerContainer>
    </Container>
  );
}
