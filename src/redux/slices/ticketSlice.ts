import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../data';

export const fetchUsersAsync = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetchUsers();
        return response;
    }
);

export interface TicketTime {
    startTime: string;
    endTime: string;
}

export interface Ticket {
    id: number;
    from: string;
    to: string;
    company: string;
    price: number;
    currency: 'RUB';
    time: TicketTime;
    duration: number;
    connectionAmount: number | null;
}

const dataSlice = createSlice({
    name: 'users',
    initialState: {
      users: [] as Ticket[],
      status: 'idle',
      error: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsersAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload as Ticket[];
            })
            .addCase(fetchUsersAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ? action.error.message : '';
            });
    },
});

export default dataSlice.reducer;