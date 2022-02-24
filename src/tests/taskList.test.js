import TaskList from '../modules/taskList.js';

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

describe('Constructor', () => {
  test('Calls constructor properly', () => {
    const expected = [];
    expect(list.storage).toEqual(expect.arrayContaining(expected));
  });
});

describe('addNew method', () => {
  test('updates the length to 1 of storage in TaskList', () => {
    list.addNew(item1);
    expect(list.storage).toHaveLength(1);
  });

  test('adds right item to the storage in TaskList', () => {
    expect(list.storage[0]).toBe(item1);
  });

  test('updates the length to 2 of storage in TaskList', () => {
    list.addNew(item2);
    expect(list.storage).toHaveLength(2);
  });

  test('adds right item to the storage in TaskList', () => {
    expect(list.storage[1]).toBe(item2);
  });
});

describe('removeItem method', () => {
  test('Removes the item from the storage of TaskList', () => {
    list.removeItem('1');
    expect(list.storage).toHaveLength(1);
  });

  test('Removes the correct item from the storage of TaskList', () => {
    expect(list.storage[0]).toHaveProperty('index', 2);
  });
});

describe('Set index', () => {
  test('Set the index properly', () => {
    list.setIndexes();
    expect(list.storage[0]).toHaveProperty('index', 1);
  });
});