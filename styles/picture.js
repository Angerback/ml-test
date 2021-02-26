import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Picture = styled(LazyLoadImage)`
height: ${({ height }) => height};
margin: 0 auto;
max-width: 100%;
`;

export default Picture;
