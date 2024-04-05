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
        tickets: [] as ITicket[],
        filteredTickets: [] as ITicket[],
        ticketsDuplicate: [] as ITicket[],
        filteredCompanies: [] as string[],
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
        sortTicketsPrice(state) {
            state.tickets = state.tickets.slice().sort((a, b) => a.price - b.price) as ITicket[];
        },
        sortTicketsTransfer(state) {
            state.tickets = state.tickets.slice().sort((a, b) => a.connectionAmount - b.connectionAmount) as ITicket[];
        },
        filterTicketsByCompany(state, action) {
            state.filteredTickets = state.tickets.filter(ticket => ticket.company === action.payload);
        },
      },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTicketsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTicketsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tickets = [...state.tickets, ...action.payload as ITicket[]];

                if (state.sorting !== '') {
                    if (sortingFunctions[state.sorting]) {
                        state.tickets = state.tickets.slice().sort(sortingFunctions[state.sorting]);
                    }
                }
            })
            .addCase(fetchTicketsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ? action.error.message : '';
            });
    },
});

export const { sortTicketsPrice, sortTicketsTransfer, filterTicketsByCompany, sortSwitch } = dataSlice.actions;

export default dataSlice.reducer;