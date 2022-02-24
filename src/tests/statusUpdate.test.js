import { changeStatus } from '../__mocks__/statusUpdate.js';

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

describe('statusUpdate function', () => {
  test('Updates Status if checked', () => {
    changeStatus(list, event);
    expect(list.storage[1].completed).toBe(true);
  });

  test('Updates Status if checked', () => {
    changeStatus(list, event);
    expect(event.target.nextSibling.classList).toBe('doneTask');
  });

  event.target.checked = false;
  event.target.parentElement.id = 't1';
});