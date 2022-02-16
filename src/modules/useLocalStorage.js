const addToLocalStorage = (data) => {
  localStorage.setItem('data', JSON.stringify(data));
};

const getLocalStorage = () => JSON.parse(localStorage.getItem('data'));

export { addToLocalStorage, getLocalStorage };