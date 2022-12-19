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
        isActive : false  ,  
        nameOfMovies: [],
        listOfName: []
    },
    reducers: {
        addNameToList: (state, { payload }) => {
            state.isActive = true
            state.nameOfMovies += payload + '-'
            const newArr = state.nameOfMovies.split('-')
            newArr.pop()
            console.log('new Arr') 
            state.listOfName = newArr.filter((item, index) => newArr.indexOf(item) === index)
            console.log(state.listOfName)
        },
        saveList: (state, { payload }) => {
            const filterPay = payload.filter((item, index) => payload.indexOf(item) === index)
        },
        deleteNameFromList: (state, { payload }) => {
            state.listOfName = state.listOfName.filter((_, index) => index != (payload.index))
            if(state.listOfName.length == 0){
                state.isActive = false
            }
            console.log('listOfName')
            console.log(state.listOfName)
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

export const { saveList, addNameToList, deleteNameFromList } = movieSlice.actions
export default movieSlice.reducer