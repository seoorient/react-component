import React, {Fragment} from 'react';
import {DEPENDENCIES, SOCIAL_CONFIG} from './constants';
import './home.css';


const Home = () => (
  <Fragment>
    <h1 className="title"><span>Коллекция Реакт компонентов.</span></h1>
    <p>В данном приложении я создал библиотеку компонентов для проектов
      на <strong>ReactJS</strong>.</p>
    <p>Целью данного приложения является не создать абсолютно универсальные
      компоненты, а научиться мыслить в компонентном стиле и постараться
      создавать гибкие и переиспользуемые модули.</p>
    <p>Я проработал создание как простых компонентов таких как кнопки,
      бейджики, иконки и т.д. так и объединение их в более сложные компоненты:
      табы, чипы, модальные окна.</p>
    <p>Все компоненты написаны с проверкой esLint.</p>
    <h3><span>Dependencies:</span></h3>
    <ul className="dependencies">
      {DEPENDENCIES.map(({id, name, link}) => (
        <li className="dependencyItem" key={id}>
          <a className="dependencyLink" href={link} rel="noopener noreferrer"
             target="_blank">{name}</a>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default Home;
