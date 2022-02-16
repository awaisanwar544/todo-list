const updateTaskList = (storage, ref, newValue) => {
  storage[ref - 1].desc = newValue;
};

export default updateTaskList;