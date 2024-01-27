const getData = async (url, cached = true) => {
  
  try {
    const response = await fetch(url, (!cached && {cache: "no-cache"}));
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getData;
