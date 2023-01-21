const API_URL = "http://localhost:8000/products/";

export const fetchProducts = async (
  page = 1,
  limit = 9,
  order = "asc",
  maxValue = null,
  minValue = null
) => {
  let url = `${API_URL}?_page=${page}&_limit=${limit}`;

  if (order) {
    url += `&_sort=price&_order=${order}`;
  }

  if (maxValue) {
    url += `&price_lte=${maxValue}`;
  }

  if (minValue) {
    url += `&price_gte=${minValue}`;
  }

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });

  return await response.json();
};
