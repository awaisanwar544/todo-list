import TaskList from '../modules/taskList.js';

describe('addNew method', () => {
  const list = new TaskList();
  const item1 = {
    index: 1,
    desc: 'test description',
    completed: false,
  };
  const item2 = {
    index: 2,
    desc: 'test description 2',
    completed: false,
  };
  test('updates the length to 1 of storage in TaskList', () => {
    list.addNew(item1);
    expect(list.storage).toHaveLength(1);
  });

  test('updates the length to 2 of storage in TaskList', () => {
    list.addNew(item2);
    expect(list.storage).toHaveLength(2);
  });
});