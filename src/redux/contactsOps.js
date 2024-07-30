import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";  
axios.defaults.baseURL = 'https://66a8b1abe40d3aa6ff590040.mockapi.io/'

export const fetchContacts = createAsyncThunk("contacts/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;      
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
    }
    })

export const addContact = createAsyncThunk("contacts/addContacts", 
    async(newTask,thunkAPI )=>{
        try {
            const response = await axios.post("/contacts", newTask);
            return response.data; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
        });
export const deleteContact = createAsyncThunk("contacts/deleteContacts", 
    async(contactId,thunkAPI  )=> {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })
