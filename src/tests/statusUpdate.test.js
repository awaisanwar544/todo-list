import changeStatus from '../__mocks__/statusUpdate.js';

jest.mock('../modules/statusUpdate.js');

const arr = [
  {
    index: 1,
    desc: 'Initial task',
    completed: false,
  },
  {
    index: 2,
    desc: 'second task',
    completed: false,
  },
  {
    index: 3,
    desc: 'third task',
    completed: false,
  },
];
const list = {
  storage: arr,
};

describe('statusUpdate function if true', () => {
  const event = {
    target: {
      parentElement: {
        id: 't2',
      },
      checked: true,
      nextSibling: {
        classList: '',
      },
    },
  };
  test('Updates Status if checked', () => {
    changeStatus(list, event);
    expect(list.storage[1].completed).toBe(true);
  });

  test('Updates class list if checked', () => {
    changeStatus(list, event);
    expect(event.target.nextSibling.classList).toBe('doneTask');
  });
});

describe('status update function if false', () => {
  const event = {
    target: {
      parentElement: {
        id: 't1',
      },
      checked: false,
      nextSibling: {
        classList: '',
      },
    },
  };
  test('Updates Status if not checked', () => {
    changeStatus(list, event);
    expect(list.storage[0].completed).toBe(false);
  });

  test('Updates class list if not checkec', () => {
    changeStatus(list, event);
    expect(event.target.nextSibling.classList).toBe('');
  });
});