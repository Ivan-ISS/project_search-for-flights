import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ITicket } from '../../types/ticketsType';
import { fetchUsers } from '../../data';

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
        status: 'idle',
        error: '',
    },
    reducers: {
        sortTicketsPrice(state) {
                state.tickets = state.tickets.slice().sort((a, b) => a.price - b.price) as ITicket[];
        },
        sortTickets(state, action) {
            if (action.payload === 'Самый дешевый') {
                state.tickets = state.tickets.slice().sort((a, b) => a.price - b.price) as ITicket[];
            }
            if (action.payload === 'Самый оптимальный') {
                state.tickets = state.tickets.slice().sort((a, b) => a.connectionAmount - b.connectionAmount) as ITicket[];
            }
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
            })
            .addCase(fetchTicketsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ? action.error.message : '';
            });
    },
});

export const { sortTickets, filterTicketsByCompany } = dataSlice.actions;

export default dataSlice.reducer;