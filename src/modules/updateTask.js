const updateTaskList = (storage, ref, newValue) => {
  storage[ref - 1].desc = newValue;
};

const updateTaskEvent = (element, storage) => {
  element.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
    updateTaskList(storage, e.target.parentElement.id, e.target.outerText);
  });
};

export default updateTaskEvent;