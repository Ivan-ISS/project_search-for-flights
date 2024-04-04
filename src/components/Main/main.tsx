// import React from 'react';
import { useDispatch } from 'react-redux';
import { RootDispatch } from '../../redux/store';
import { fetchTicketsAsync, sortTickets } from '../../redux/slices/ticketSlice';
import styles from './main.module.scss';
import { numberOfTransfer } from '../../elementsData';
import { sortSelectors } from '../../elementsData';
import { companyNames } from '../../elementsData';
import Block from '../Common/Block/block';
import Button from '../Common/Button/button';
import ButtonGroup from '../Common/ButtonGroup/buttonGroup';
// import Checkbox from '../Common/Checkbox/checkbox';
// import Radio from '../Common/Radio/radio';
import RadioGroup from '../Common/RadioGroup/radioGroup';
import CheckboxGroup from '../Common/CheckboxGroup/checkboxGroup';
import TicketGroup from '../Common/TicketGroup/ticketGroup';
import { ITicket } from '../../types/ticketsType';

export interface MainProps {
    ticketsData: ITicket[],
}

const Main = ({ ticketsData }: MainProps) => {
    const dispatch = useDispatch<RootDispatch>();

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <aside className={styles.aside}>
                    <Block title={'Количество пересадок'} >
                        <CheckboxGroup options={numberOfTransfer} properties={{ checked: false, color: 'purple', onChange: (v) => !v }}/>
                    </Block >
                    <Block title={'Компании'}>
                        <RadioGroup options={companyNames} properties={{ /* name: 'company', */ color: 'purple' }}/>
                    </Block>
                </aside>
                <section className={styles.ticketsArea}>
                    <ButtonGroup options={sortSelectors} properties={{ size: 'large', color: 'gray', setSort: (sort) => dispatch(sortTickets(sort)) }}/>
                    <TicketGroup ticketsData={ticketsData} />
                    <Button size={'large'} color={'purple'} border={'rounded'} children={'Загрузить еще билеты'} onClick={() => dispatch(fetchTicketsAsync())}/>
                </section>
            </div>
        </main>
    );
};

export default Main;