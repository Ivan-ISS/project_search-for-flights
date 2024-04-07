import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ITicket } from '../../types/ticketsType';
import { fetchTickets } from '../../data';
import transfersNameToNumber from '../../utils/transfersNameToNumber';

// Объект с функциями сортировки
export const sortingFunctions: { [key: string]: (a: ITicket, b: ITicket) => number } = {
    'Самый дешевый': (a, b) => a.price - b.price,
    'Самый быстрый': (a, b) => a.duration - b.duration,
    'Самый оптимальный': (a, b) => a.connectionAmount - b.connectionAmount
};

export const fetchTicketsAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetchTickets();
        console.log(response);
        return response;
    }
);

const dataSlice = createSlice({
    name: 'tickets',
    initialState: {
        tickets: [] as ITicket[],           // Массив с билетами, который будем изменять (после фильтров)
        allTickets : [] as ITicket[],       // Массив со всеми билетами (на основе которого будем фильтровать) - неизменямый массив
        filteredCompanies: [] as string[],  // Переменная, содержащая названия компаний, по которым ставится фильтр
        filteredTransfers: [] as number[],
        transfersName: [] as string[],
        sorting: '',
        status: 'idle',
        error: '',
    },
    reducers: {
        sortSwitch(state, action: PayloadAction<string>) {
            state.sorting = action.payload;
            if (sortingFunctions[state.sorting]) {
                state.tickets = state.tickets.slice().sort(sortingFunctions[state.sorting]);
            }
        },
        filterTicketsByCompany(state, action) {
            const company = action.payload;

            if (!state.filteredCompanies.includes(company)) {                                       // После нажатия кнопки фильтра:
                state.filteredCompanies.push(company);                                              // Добавляем фильтр в переменную если его там еще нет
            } else {
                state.filteredCompanies = state.filteredCompanies.filter((c) => c !== company);     // Удаляем фильтр из переменной если он там был
            }

            if (state.filteredCompanies.length || state.filteredTransfers.length) {                 // Ставим все фильтры, которые есть
                state.tickets = state.allTickets.filter((ticket) => {
                    return (
                        state.filteredCompanies.length === 0 || state.filteredCompanies.includes(ticket.company)
                    ) && (
                        state.filteredTransfers.length === 0 || state.filteredTransfers.includes(ticket.connectionAmount)
                    );
                });
            }

            if (!state.filteredCompanies.length && !state.filteredTransfers.length) state.tickets = state.allTickets;  // Если все фильтры отключены, то показываем все билеты

            if (state.sorting !== '' && sortingFunctions[state.sorting])                            // Проверка: содержит ли переменная с сортировкой какое-либо значение
                state.tickets = state.tickets.slice().sort(sortingFunctions[state.sorting]);        // Если содержит, то выполняем сортировку
        },
        filterTicketsByTransfers(state, action) {
            const transfersName = action.payload;

            if (!state.filteredTransfers.includes(transfersNameToNumber(transfersName))) {
                state.filteredTransfers.push(transfersNameToNumber(transfersName));
                state.transfersName.push(transfersName);
            } else {
                state.filteredTransfers = state.filteredTransfers.filter((c) => c !== transfersNameToNumber(transfersName));
                state.transfersName = state.transfersName.filter((c) => c !== transfersName);
            }

            if (state.filteredCompanies.length || state.filteredTransfers.length) {
                state.tickets = state.allTickets.filter((ticket) => {
                    return (
                        state.filteredCompanies.length === 0 || state.filteredCompanies.includes(ticket.company)
                    ) && (
                        state.filteredTransfers.length === 0 || state.filteredTransfers.includes(ticket.connectionAmount)
                    );
                });
            }

            if (!state.filteredTransfers.length && !state.filteredCompanies.length) state.tickets = state.allTickets;

            if (state.sorting !== '' && sortingFunctions[state.sorting])
                state.tickets = state.tickets.slice().sort(sortingFunctions[state.sorting]);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTicketsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTicketsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tickets = [...state.tickets, ...action.payload as ITicket[]];                 // Создаем массив с билетами, который будем изменять (после фильтров)
                state.allTickets = [...state.allTickets, ...action.payload as ITicket[]];           // Создаем массив со всеми билетами (на основе которого будем фильтровать)

                if (state.filteredCompanies.length || state.filteredTransfers.length) {             // Проверка: содержит ли переменная с фильтрами какое-либо значение
                    state.tickets = state.allTickets.filter((ticket) => {                           // Если содержит, то фильтруем билеты (после загрузки доп-х билетов)
                        return (
                            state.filteredCompanies.length === 0 || state.filteredCompanies.includes(ticket.company)
                        ) && (
                            state.filteredTransfers.length === 0 || state.filteredTransfers.includes(ticket.connectionAmount)
                        );
                    });
                }

                if (state.sorting !== '' && sortingFunctions[state.sorting])                        // Проверка: содержит ли переменная с сортировкой какое-либо значение
                    state.tickets = state.tickets.slice().sort(sortingFunctions[state.sorting]);    // Если содержит, то выполняем сортировку (после загрузки доп-х билетов)
            })
            .addCase(fetchTicketsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ? action.error.message : '';
            });
    },
});

export const { sortSwitch, filterTicketsByCompany, filterTicketsByTransfers } = dataSlice.actions;

export default dataSlice.reducer;