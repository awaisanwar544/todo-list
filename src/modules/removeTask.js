const removeTask = (list, ref) => {
  list.removeItem(ref);
  list.setIndexes();
};

export default removeTask;