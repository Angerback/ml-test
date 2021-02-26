export const fetchItems = async (q) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`);
  const apiResponse = await response.json();
  const { results } = apiResponse;

  if (results && results.length > 0) {
    const categories = {};
    const mappedResults = results.map((item) => {
      const mappedItem = {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        location: item.seller_address.city.name,
      };
      if (categories[item.category_id] !== undefined) {
        categories[item.category_id] += 1;
      } else {
        categories[item.category_id] = 1;
      }

      return mappedItem;
    });
    const greatestCategory = Object.entries(categories)
      .sort((a, b) => a[1] - b[1])[Object.keys(categories).length - 1][0];

    const categoryResponse = await fetch(`https://api.mercadolibre.com/categories/${greatestCategory}`);
    const categoryObject = await categoryResponse.json();
    return {
      author: {
        name: 'Sebastian', lastName: 'Meneses',
      },
      categories: [...new Set(Object.keys(categories))],
      items: mappedResults,
      breadcrumb: categoryObject.path_from_root.map((category) => category.name).reduce((acc, current) => `${acc} - ${current}`),
    };
  }
  return {};
};

export default (req) => {
  const {
    query: { q },
  } = req;
  return fetchItems(q);
};
