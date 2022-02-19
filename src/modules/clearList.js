const clearList = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

export default clearList;