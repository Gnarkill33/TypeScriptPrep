/* Создайте тип Status с возможными значениями: "pending", "in-progress", "completed".
Создайте тип User с полями: name: string, age: number, status: Status.
Создайте функцию updateStatus, которая принимает объект User и новый status: Status и возвращает обновленный объект User.
*/

type Status = "pending" | "in-progress" | "completed";

type User = {
  name: string;
  age: number;
  status: Status;
};

const updateStatus = (user: User, newStatus: Status): User => {
  return { ...user, status: newStatus };
};

/* Создайте тип HttpMethod с возможными значениями: "GET", "POST", "PUT", "DELETE".
Создайте тип Request с полями: method: HttpMethod, url: string, body?: any.
Создайте функцию makeRequest, которая принимает объект Request и возвращает строку с описанием запроса.
*/

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type RequestMessage = {
  method: HttpMethod;
  url: string;
  body?: any;
};

const makeRequest = (request: RequestMessage): string => {
  return `Request: ${request.method}, ${request.url}`;
};

/* Создайте функцию logValue, которая принимает значение любого типа T и выводит его в консоль.
Используйте эту функцию для вывода разных типов данных.
*/

function logValue<T>(arg: T): void {
  console.log(arg);
}

/* Partial и Required:
Создайте объект типа User c полями name, age и email.
Используйте Partial<User> для создания нового объекта, который может содержать только часть свойств объекта User.
Используйте Required<User> для создания нового объекта, который обязательно должен содержать все свойства объекта User.
*/

type AnotherUser = {
  name: string;
  age: number;
  email: string;
};

const userOne: Partial<AnotherUser> = {
  age: 31,
};

const userTwo: Required<AnotherUser> = {
  name: "Matilda",
  age: 50,
  email: "mat@example.com",
};

/* Pick и Omit:
    - Используйте `Pick<User, 'name' | 'age'>` для создания нового объекта, содержащего только свойства `name` и `age` объекта `User`.
    - Используйте `Omit<User, 'email'>` для создания нового объекта, который не содержит свойство `email`.
*/

const userThree: Pick<AnotherUser, "name" | "age"> = {
  name: "Jane",
  age: 28,
};

const userFour: Omit<AnotherUser, "email"> = {
  name: "Anna",
  age: 25,
};

/* Readonly
    - Создайте объект `user` типа `User`.
    - Используйте `Readonly<User>` для создания нового объекта, который будет только для чтения. Попробуйте изменить значение одного из свойств этого объекта и посмотрите, что произойдет.
*/

const userFive: Readonly<AnotherUser> = {
  name: "Jack",
  age: 45,
  email: "jack@example.com",
};

userFive.email = "newemail@example.com";

/* Record: Создайте тип UserRecord как Record<string, User>, в котором ключ - это идентификатор пользователя, а значение - объект User. Используйте этот тип для создания коллекции пользователей.
 */

type UserRecord = Record<string, AnotherUser>;
const users: UserRecord = {
  "1": { name: "John", age: 30, email: "john@example.com" },
  "2": { name: "Jane", age: 28, email: "jane@example.com" },
  "3": { name: "Jack", age: 45, email: "jack@example.com" },
};

/* typeof: Используйте оператор typeof для определения типа переменной и вывода его в консоль.*/

console.log(typeof userOne);
