// 1. Робота з Map
// - Створіть Map, яка зберігає інформацію про студентів та їхні оцінки. Ключем буде ім'я студента, а значенням — оцінка.
// - Додайте в Map трьох студентів з їхніми оцінками.
// - Виведіть оцінку конкретного студента.
// - Оновіть оцінку одного зі студентів.
// - Видаліть запис про одного студента.
// - Виведіть усі ключі та значення з Map.

const obj = {
    Ivan: 12,
    Petro: 12,
    Vasyl: 12
}
const arr = Object.entries(obj)

let map = new Map(arr)
console.log(map);

map.set('Olena',12)
map.set('Anna',12)
map.set('Isabella',12)
console.log(map);
console.log('Оцінка Ізабели: ',`${map.get('Isabella')}`);
console.log(map.set('Anna',10));
console.log(map.delete('Olena'));
map.forEach((value,key) => console.log(key,value))

console.log('-----------');

// 2. Використання Set
// - Створіть Set, що містить унікальні значення від 1 до 5.
// - Додайте кілька повторюваних значень у Set і перевірте, чи додалися вони. 
// - Видаліть значення з Set.
// - Перевірте наявність значення у Set.
// - Виведіть усі значення з Set.

const set = new Set([1, 2, 3, 4, 5])
console.log(set);

set.add(1)
set.add(3)
set.add(5)
console.log(set);

set.delete(4)
console.log(set);

console.log(set.has(1));

set.forEach((value) => console.log(value))

console.log(set.entries());
console.log(set.values());
console.log(set.keys());

console.log('-----------');

// 3. Робота з WeakMap
// - Створіть WeakMap, яка зберігає об'єкти користувачів і їхні налаштування.
// - Додайте кілька користувачів і налаштування до WeakMap.
// - Видаліть посилання на один з об'єктів користувачів.
// - Перевірте, чи залишився об'єкт у WeakMap.

let ob = {name: 'Vasyl'}
const weakmap = new WeakMap([[ob, 12]])

let user1 = {name: 'Petro'}
let user2 = {name: 'Olena'}
    
weakmap.set(user1, 12)
weakmap.set(user2, 12)

console.log(weakmap);

weakmap.delete(user2)
console.log(weakmap);

console.log(weakmap.has(ob));

console.log('------------');

// 4. Використання WeakSet
// - Створіть WeakSet, що містить об'єкти студентів.
// - Додайте кілька об'єктів студентів у WeakSet.
// - Видаліть посилання на один з об'єктів студентів.
// - Перевірте, чи залишився об'єкт у WeakSet.

let ob2 = {name: 'Anna'}
let ob3 = {name: 'Ivan'}

let weakset = new WeakSet([ob2, ob3])
console.log(weakset);

let student1 = {name:'Isabella'}
let student2 = {name:'Dmytro'}

weakset.add(student1)
weakset.add(student2)

console.log(weakset);

weakset.delete(student2)
console.log(weakset);

console.log(weakset.has(student1));