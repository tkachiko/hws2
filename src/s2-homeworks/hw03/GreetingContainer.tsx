import React, {ChangeEvent, useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: UserType[] // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (value: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
  if (!name.trim().length) {
    setName('')
    setError('Ошибка! Введите имя!');
  } else {
    setName('');
    setError('');
    addUserCallback(name);
  }// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
};

export const pureOnBlur = (name: string, setError: (value: string) => void) => { // если имя пустое - показать ошибку
  !name.trim().length && setError('Ошибка! Введите имя!');
};

export const pureOnEnter = (e: React.KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
  e.key === 'Enter' && addUser();
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                   users,
                                                                   addUserCallback,
                                                                 }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>(''); // need to fix any
  const [error, setError] = useState<string>(''); // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    setError('');
    setName(e.currentTarget.value); // need to fix
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length; // need to fix
  const lastUserName = (users.length > 0) ? users[users.length - 1].name : "" // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
