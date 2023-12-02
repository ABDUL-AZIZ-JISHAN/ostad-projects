const getSimpleResponse = async (endpoint) => {
  try {
    const res = await fetch(`${process.env.NEXT_APP_API_BASE_URL}${endpoint}`);
    // const res = await fetch(`https://agency.teamrabbil.com${endpoint}`);

    return await res.json();
  } catch (err) {
    return [];
  }
};


export default getSimpleResponse;