const addTask = () => {
  const input = document.querySelector('#taskInput');
  const addTaskBtn = document.querySelector('#addTaskBtn');
  const list = document.querySelector('#taskList');
  let inputValue = '';

  input.addEventListener('input', (e) => {
    inputValue = e.target.value;
  });

  addTaskBtn.addEventListener('click', () => {
    const li = document.createElement('li');

    if (inputValue.length) {
      li.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      ${inputValue}
      <button class="delete-btn">&#10060;</button>
      `;
      li.classList.add('item');
      list.append(li);
    } else {
      alert('Enter a task!')
    };

  });
};

addTask();

function deleteTask() {
  const taskList = document.querySelector('#taskList');

  taskList.addEventListener('click', (e) => {
    const btnDelete = e.target.closest('.delete-btn');

    if (btnDelete) {
      const item = btnDelete.closest('.item');

      if (item) {
        item.remove();
      };

    };
  });
};

deleteTask();

const changeTheme = () => {
  const theme = document.querySelector('.theme');
  const body = document.querySelector('body');
  const icon = document.querySelector('.theme-icon');
  let isMoon = false;

  theme.addEventListener('click', () => {
    
    if (isMoon) {
      icon.src = './img/sun.svg';
    } else {
      icon.src = './img/moon.svg';
    };
    isMoon = !isMoon;

    body.classList.toggle('dark');
    body.style.transition = '1s';
  });
};

changeTheme();


// clearCompletedTasks