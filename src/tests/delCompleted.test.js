import delCompleted from '../modules/delCompleted.js';

describe('Deleted completed tasks', () => {
  const arr = [
    {
      index: 1,
      desc: 'Initial task',
      completed: false,
    },
    {
      index: 2,
      desc: 'second task',
      completed: true,
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

  const result = [
    {
      index: 1,
      desc: 'Initial task',
      completed: false,
    },
    {
      index: 3,
      desc: 'third task',
      completed: false,
    },
  ];

  test('Removs items with completed: true', () => {
    expect(delCompleted(list)).toEqual(result);
  });

  test('check type input is object', () => {
    expect(typeof list).toBe('object');
  });

  test('check type is output is array', () => {
    expect(Array.isArray(result)).toBe(true);
  });
});