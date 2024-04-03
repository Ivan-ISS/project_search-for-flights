// import React from 'react';
import styles from './main.module.scss';
//import { numberOfTransfer } from '../../elementsData';
import { sortSelectors } from '../../elementsData';
import Block from '../Common/Block/block';
import Button from '../Common/Button/button';
import ButtonGroup from '../Common/ButtonGroup/buttonGroup';
import { ITicket } from '../../types/ticketsType';

export interface MainProps {
    ticketData: ITicket[],
}

const Main = ({ ticketData }: MainProps) => {

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <aside className={styles.aside}>
                    <Block title={'Количество пересадок'} children={<div>Форма</div>}/>
                    <Block title={'Компании'} children={<div>Форма</div>}/>
                </aside>
                <section className={styles.ticketsArea}>
                    <ButtonGroup options={sortSelectors} properties={{size: 'large', color: 'gray'}}/>
                    <ul>
                        {ticketData.map(item => (
                            <li key={item.id}>{item.company} {item.price} {item.id}</li>
                        ))}
                    </ul>
                    <Button size={'large'} color={'purple'} border={'rounded'} children={'Загрузить еще билеты'}/>
                </section>
            </div>
        </main>
    );
};

export default Main;