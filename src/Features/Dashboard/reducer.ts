import  { createSlice, PayloadAction } from 'redux-starter-kit';
import {MetricsState,SelectPayload} from './types';
import { IState } from '../../store';
const initialState: MetricsState = {
    selected:[],   
}

const slice = createSlice({
    initialState,
    name:'metricsReducer',
    reducers:{
        metricsSelected: (state, action: PayloadAction<SelectPayload>) => {
            const {selected} = action.payload;
            return {
                ...state,
                selected,
            };
        },
    }
})

export const getSelectedItems = ({metrics}: IState) => metrics.selected

export const { reducer, actions } = slice;
