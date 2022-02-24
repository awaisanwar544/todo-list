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

  const newValue = 'edited second task';
  const ref = 2;

  test('Updates description', () => {
    updateTaskList(arr, ref, newValue);
    expect(arr[1].desc).toBe(newValue);
  });

  test('check list if array', () => {
    updateTaskList(arr, ref, newValue);
    expect(Array.isArray(arr)).toBe(true);
  });

  test('check new value is string', () => {
    updateTaskList(arr, ref, newValue);
    expect(typeof newValue).toBe('string');
  });

  test('check ref is number', () => {
    updateTaskList(arr, ref, newValue);
    expect(typeof ref).toBe('number');
  });
});