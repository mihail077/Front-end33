// 1. Напишіть функцію delayedLog, яка приймає повідомлення та час затримки в мілісекундах
// і виводить повідомлення у консоль після заданої затримки.

function delayedLog(message, ms) {
        setTimeout(() => {
        console.log(message);
    }, ms); 
}
delayedLog('hello', 500)

// 2. Напишіть функцію sequentialLogs, яка послідовно виводить повідомлення у консоль з затримкою між ними.

function sequentialLogs(messages) {
  messages.forEach((message) => {
    let delay = 500+ Math.floor(Math.random() * 1500)
    setTimeout(() => {
      console.log(message);
    }, delay);
  });
}
let messages = ['message 1', 'message 2', 'message 3']
sequentialLogs(messages);

// 3. Напишіть функцію parallelLogs, яка паралельно виводить повідомлення у консоль з затримкою між ними.

async function parallelLogs(messag, delay) {
  const arrProm = [];
  for (let i = 0; i < messag.length; i++) {
      arrProm.push(new Promise(resolve => {
          setTimeout(() => {
              console.log(messag[i]);
              resolve();
          },  delay);
      }));
  }
  await Promise.all(arrProm);
}
const messag = ["first massage", "second message", "third message"];
const delay = 2000; 

parallelLogs(messag, delay);

// 4. Напишіть функцію logFirst, яка приймає масив повідомлень та затримок і виводить перше повідомлення,
// яке виконається раніше за інших.

function logFirst(mess, ms) {
  let promises = mess.map((mess, index) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mess);
      }, ms[index]);
    });
  });

  Promise.race(promises).then(data => {
      console.log(data);
    });
}

let mess = ['mess 1', 'mess 2', 'mess 3'];
let ms = [2100, 2000, 2200];
logFirst(mess, ms);

// 5. Напишіть функцію retry, яка виконує асинхронну функцію кілька разів до тих пір,
// поки вона не виконається успішно або не досягне максимальну кількість спроб.

async function retry(asyncFunc, maxNum) {
  for (let i = 0; i < maxNum; i++) {
    const result = await asyncFunc();
    if (result.status === 'success') {
      return result.value;
    } else {
      console.log(`error ${i+1}`);
    }
  }

  return 'no more attempts';
}

async function asyncFunc() {
  const random = Math.random();
  if (random < 0.6) {
    return { status: 'success', value: 'success' };
  } else {
    return { status: 'error', value: 'error' };
  }
}

retry(asyncFunc, 3)
  .then(result => console.log(result))
  .catch(error => console.log(error.message));

// 6. Напишіть функцію logProgress, яка приймає масив асинхронних завдань і виводить прогрес їх виконання у консоль.

async function logProgress(asyncTasks) {
  let counter = 0
  for (let i = 0; i < asyncTasks.length; i++) {
      const task = asyncTasks[i];
      await task;
      counter++
      let progress = Math.round((counter / asyncTasks.length) * 100)
      console.log(`completed task ${i + 1} of ${asyncTasks.length}`);
      console.log(`progress: ${progress}%`);
  }
  console.log('all tasks copleted');
}
  
const asyncTasks = [
  new Promise(resolve => setTimeout(resolve, 2300)),
  new Promise(resolve => setTimeout(resolve, 2400)),
  new Promise(resolve => setTimeout(resolve, 2500))
];
  
logProgress(asyncTasks);