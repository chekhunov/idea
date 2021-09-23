import React from 'react';
import classNames from 'classnames'
import Menu from '../../components/menu';
import style from './Home.module.scss';

const menuItems = [
  {
    id: 0,
    value: 'Все проекты',
  },
  {
    id: 1,
    value: 'Технологии',
    isDropdown: false,
  },
  {
    id: 2,
    value: 'Бизнес',
  },
  {
    id: 3,
    value: 'Oбщество',
  },
  {
    id: 4,
    value: 'Еда',
  },
  {
    id: 5,
    value: 'Издания',
  },
  {
    id: 6,
    value: 'Фильмы и Видео',
  },
  {
    id: 7,
    value: 'Здоровье',
  },
  {
    id: 8,
    value: 'Игры',
  },
  {
    id: 9,
    value: 'Еще...',
  }
];


export default function Home() {
  const [activeId, setActiveId] = React.useState(null);
  const [activePopup, setActivePopup] = React.useState(false);

  return (
    <>
      <section className={classNames("top", style.top)}>
        <Menu 
        activePopup={activePopup} 
        menuItems={menuItems} 
        activeId={activeId} 
        setActiveId={setActiveId} 
        />
      </section>
    </>
  );
}
