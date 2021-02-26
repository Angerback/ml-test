import styled from 'styled-components';
import PropTypes from 'prop-types';

const InnerWrapper = styled.section`
    max-width: ${({ theme: { contentWidth } }) => contentWidth};
    flex: 1;
`;

const MainWrapper = styled.main`
    display:flex;
    width: 100%;
    justify-content: center;
`;

export default function ContentWrapper({ children }) {
  return (
    <MainWrapper>
      <InnerWrapper>
        {children}
      </InnerWrapper>
    </MainWrapper>
  );
}

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
