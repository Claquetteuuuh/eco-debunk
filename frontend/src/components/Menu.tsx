import { ChildrenInterface } from '../interface/childrenInterface';

import { MenuItem } from './MenuItem';

import '../assets/scss/menu.scss';
import { useRef } from 'react';

export const Menu = (props: ChildrenInterface) => {

    const menu: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const handleCrossClick = () => {
        if (menu.current) {
            menu.current.classList.remove('open');
        }
    }

    const handleMenuClick = () => {
        if (menu.current) {
            menu.current.classList.add('open');
        }
    }
    return (
        <>
            <div className='bars-container' onClick={ handleMenuClick }>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <div className="menu" ref={ menu }>
                <div className="close" onClick={ handleCrossClick }></div>
                <div className='circle'></div>
                <nav>
                    <ul>
                        <MenuItem to='/' text='Home'/>
                        <MenuItem to='/post' text='Post'/>
                        <MenuItem to='/topics' text='Topics'/>
                        <MenuItem to='/sign-in' text='Sign In'/>
                    </ul>
                </nav>
            </div>
            { props.children }
        </>
    );
}