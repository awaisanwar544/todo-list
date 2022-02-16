class TaskList {
  constructor() {
    this.storage = [];
  }

  addNew(item) {
    this.storage.push(item);
  }

  removeItem(ref) {
    this.storage = this.storage.filter((item) => item.index !== Number(ref));
  }

  setIndexes() {
    if (this.storage.length > 0) {
      this.storage.forEach((item, i) => {
        item.index = i + 1;
      });
    }
  }
}

export default TaskList;