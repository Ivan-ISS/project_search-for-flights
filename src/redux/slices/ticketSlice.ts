import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ITicket } from '../../types/ticketsType';
import { fetchUsers } from '../../data';


// Объект с функциями сортировки
export const sortingFunctions: { [key: string]: (a: ITicket, b: ITicket) => number } = {
    'Самый дешевый': (a, b) => a.price - b.price,
    'Самый быстрый': (a, b) => a.duration - b.duration,
    'Самый оптимальный': (a, b) => a.connectionAmount - b.connectionAmount
};

export const fetchTicketsAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetchUsers();
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

            state.tickets = [];
            state.filteredCompanies.forEach(element => {                                            // Ставим фильтр по всем компаниям в переменной
                state.tickets = [ ...state.tickets, ...state.allTickets.filter(ticket => ticket.company === element)];
            });

            if (!state.filteredCompanies.length) state.tickets = state.allTickets;                  // Если все фильтры отключены, то показываем все билеты

            if (state.sorting !== '' && sortingFunctions[state.sorting])                            // Проверка: содержит ли переменная с сортировкой какое-либо значение
                state.tickets = state.tickets.slice().sort(sortingFunctions[state.sorting]);        // Если содержит, то выполняем сортировку
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

                if (state.filteredCompanies.length) {                                               // Проверка: содержит ли переменная с фильтрами какое-либо значение  
                    state.tickets = state.allTickets.filter((ticket) => {                           // Если содержит, то фильтруем билеты (после загрузки доп-х билетов)
                        return state.filteredCompanies.length === 0 || state.filteredCompanies.includes(ticket.company);
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

export const { sortSwitch, filterTicketsByCompany } = dataSlice.actions;

export default dataSlice.reducer;