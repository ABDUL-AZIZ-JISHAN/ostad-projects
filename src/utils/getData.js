const getData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getData;
