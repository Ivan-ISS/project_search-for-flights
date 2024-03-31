import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ITicket } from '../../types/ticketsType';
import { fetchUsers } from '../../data';

export const fetchUsersAsync = createAsyncThunk(
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
        sortTickets(state) {
          state.filteredTickets = state.tickets.slice().sort((a, b) => a.price - b.price) as ITicket[];
        },
        filterTicketsByCompany(state, action) {
          state.filteredTickets = state.tickets.filter(ticket => ticket.company === action.payload);
        },
      },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsersAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.tickets = [...state.tickets, ...action.payload as ITicket[]];
            })
            .addCase(fetchUsersAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ? action.error.message : '';
            });
    },
});

export const { sortTickets, filterTicketsByCompany } = dataSlice.actions;

export default dataSlice.reducer;