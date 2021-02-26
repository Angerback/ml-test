import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { fetchProduct } from '../pages/api/items/[id]';
import ItemPage from '../pages/items/[id]';

jest.mock('../pages/api/items/[id]');
jest.mock('next/router');

describe('ItemPage test', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      query: {
        q: 'a',
      },
    });
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render an item', async () => {
    const mappedItem = {
      id: 'a',
      title: 'titulo',
      price: {
        currency: 'ARS',
        amount: 10000,
      },
      picture: '/',
      condition: 'new',
      free_shipping: true,
      sold_quantity: 1,
      description: 'descripcion del producto',
    };
    fetchProduct.mockResolvedValue({
      author: {
        name: 'Sebastian', lastName: 'Meneses',
      },
      selectedItem: mappedItem,
    });

    useRouter.mockReturnValue({
      query: {
        q: 'a',
      },
    });

    render(<ItemPage selectedItem={mappedItem} />);

    const title = await screen.findByRole('heading', { name: /titulo/i });
    const description = await screen.findByText('descripcion del producto');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('should not render when fail to retrieve product', async () => {
    fetchProduct.mockResolvedValue({ });

    render(<ItemPage />);

    const description = await screen.findByText('No encontramos el producto que estas buscando');
    expect(description).toBeInTheDocument();
  });
});
