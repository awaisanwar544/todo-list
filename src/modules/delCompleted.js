const delCompleted = (list) => list.storage.filter((item) => !item.completed);

export default delCompleted;