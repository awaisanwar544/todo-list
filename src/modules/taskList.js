class TaskList {
  constructor() {
    this.storage = [];
  }

  addNew(item) {
    this.storage.push(item);
  }

  removeItem(ref) {
    this.storage = this.storage.filter((item) => item.index === ref);
  }
}

export default TaskList;