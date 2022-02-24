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

  test('Removs items with completed: true', () => {
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
    expect(delCompleted(list)).toEqual(result);
  });
});