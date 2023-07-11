import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  Errand  from '../../types/Errand';
import { ApiService } from '../../services/api.service';


interface listErrandsProps {
  id: string;
}

export const listErrandsAction = createAsyncThunk('errands/allList', async (props: listErrandsProps) => {
  const result = await ApiService.listErrands(props.id);

  return result;
});

export const errandsSlice = createSlice({
  name: 'errands',
  initialState: [] as Errand[],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(listErrandsAction.fulfilled, (state, action) => {
      return action.payload.data ?? [];
    });
  }
});

export default errandsSlice.reducer;
