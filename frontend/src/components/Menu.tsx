import { ChildrenInterface } from '../interface/childrenInterface';

import { MenuItem } from './MenuItem';

import '../assets/scss/menu.scss';
import { useEffect, useRef } from 'react';

export const Menu = (props: ChildrenInterface) => {

    const menu: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const barsContainer: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const handleClick = (e: any) => {
            if (
                (menu.current && menu.current.classList.contains('open')) 
                && ((menu.current !== (e.target as Node)) || (!menu.current.contains(e.target as Node)))
                && (barsContainer.current !== (e.target as Node) || (!barsContainer.current.contains(e.target as Node)))
            ) {
               menu.current.classList.remove('open');
            }
        };
    
        window.addEventListener('click', handleClick);
    
        // Nettoyer l'effet
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []); 

    return (
        <>
            <div className='bars-container' onClick={ handleMenuClick } ref={ barsContainer }>
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