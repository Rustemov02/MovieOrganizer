import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (name) => {
        const response = await axios.get(`https://www.omdbapi.com/?s=${name}&apikey=f979afc`)

        return response.data

    }
)

export const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        data: [],
        status: null,    
        listOfName: []
    },
    reducers: {
        addNameToList: (state, { payload }) => { 
            if (!state.listOfName.includes(payload)) {
                const newList = [...state.listOfName, payload]
                state.listOfName = newList   
            }
        },  
        deleteNameFromList: (state, { payload }) => { 
            state.listOfName = state.listOfName.filter(item => item !== payload)
 
        }
    },
    extraReducers: {
        //fulfilled , pending , rejected

        [fetchMovies.fulfilled]: (state, { payload }) => {
            state.data = payload.Search
            state.status = 'success'
        },
        [fetchMovies.pending]: state => {
            state.status = 'loading..'
        },
        [fetchMovies.rejected]: state => {
            state.status = 'failed'
        }

    }
})

export const {addNameToList, deleteNameFromList } = movieSlice.actions
export default movieSlice.reducer