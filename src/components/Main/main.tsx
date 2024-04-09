// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../../redux/store';
import { fetchTicketsAsync } from '../../redux/slices/ticketSlice';
import styles from './main.module.scss';
import { numberOfTransfer } from '../../elementsData';
import { sortSelectors } from '../../elementsData';
import { companyNames } from '../../elementsData';
import Block from '../Common/Block/block';
import Button from '../Common/Button/button';
import ButtonGroup from '../Common/ButtonGroup/buttonGroup';
import RadioGroup from '../Common/RadioGroup/radioGroup';
import CheckboxGroup from '../Common/CheckboxGroup/checkboxGroup';
import TicketGroup from '../Common/TicketGroup/ticketGroup';
import DropdownMenu from '../DropdownMenu/dropdownMenu';
import Loader from '../Common/Loader/loader';
import Message from '../Common/Message/message';
import { ITicket } from '../../types/ticketsType';

export interface MainProps {
    ticketsData: ITicket[],
}

const Main = ({ ticketsData }: MainProps) => {
    const dispatch = useDispatch<RootDispatch>();
    const loading = useSelector((state: RootState) => state.dataTickets.status);
    const messageChecking = useSelector((state: RootState) => state.dataTickets.messageChecking);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <aside className={styles.aside}>
                    <Block title={'Количество пересадок'} color={'white'}>
                        <CheckboxGroup options={numberOfTransfer} properties={{ checked: false, color: 'purple' }}/>
                    </Block >
                    <Block title={'Компании'} color={'white'}>
                        <RadioGroup options={companyNames} properties={{ /* name: 'company', */ color: 'purple' }}/>
                    </Block>
                </aside>
                <section className={styles.ticketsArea}>
                    <ButtonGroup options={sortSelectors} properties={{ size: 'small', color: 'gray', /* setSort: (sort) => dispatch(sortTickets(sort)) */ }}/>
                    <div className={styles.menu}>
                        <DropdownMenu color={'purple'}>
                            <Block title={'Компании'} color={'purple'} padding={'paddingOff'}>
                                <RadioGroup options={companyNames} properties={{ /* name: 'company', */ color: 'white' }}/>
                            </Block>
                            <Block title={'Количество пересадок'} color={'purple'} padding={'paddingOff'}>
                                <CheckboxGroup options={numberOfTransfer} properties={{ checked: false, color: 'white' }}/>
                            </Block>
                        </DropdownMenu>
                    </div>
                    <TicketGroup ticketsData={ticketsData} />
                        {
                            loading === 'in progress'
                            ? <Loader />
                            : messageChecking === 'load more'
                            ? <Message />
                            : null
                        }
                    <Button size={'large'} color={'purple'} border={'rounded'} /* style={{fontSize: '24px'}} */ children={'Загрузить еще билеты'} onClick={() => dispatch(fetchTicketsAsync())}/>
                </section>
            </div>
        </main>
    );
};

export default Main;