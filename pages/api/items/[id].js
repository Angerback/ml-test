export const fetchProduct = async (id) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const itemResponse = await response.json();
  const descriptionResult = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
  const descriptionResponse = await descriptionResult.json();

  if (itemResponse && itemResponse.id && descriptionResponse) {
    const categoryResponse = await fetch(`https://api.mercadolibre.com/categories/${itemResponse.category_id}`);
    const categoryObject = await categoryResponse.json();

    const mappedItem = {
      id: itemResponse.id,
      title: itemResponse.title,
      price: {
        currency: itemResponse.currency_id,
        amount: itemResponse.price,
      },
      picture: itemResponse.thumbnail,
      condition: itemResponse.condition,
      free_shipping: itemResponse.shipping.free_shipping,
      sold_quantity: itemResponse.sold_quantity,
      description: descriptionResponse.plain_text,
      breadcrumb: categoryObject.path_from_root.map((category) => category.name).reduce((acc, current) => `${acc} - ${current}`),
    };

    const result = {
      author: {
        name: 'Sebastian', lastName: 'Meneses',
      },
      selectedItem: mappedItem,
    };
    return result;
  }
  return { };
};

export default (req) => {
  const {
    query: { id },
  } = req;
  return fetchProduct(id);
};
