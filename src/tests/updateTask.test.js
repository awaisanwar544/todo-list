import updateTaskList from '../modules/updateTask.js';

describe('Task Update', () => {
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

  test('Updates description', () => {
    updateTaskList(arr, 2, 'edited second task');
    expect(arr[1].desc).toBe('edited second task');
  });
});