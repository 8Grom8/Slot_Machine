import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {v4} from 'uuid';

import FormDialog from "../FormDialog";
import {shallowEqual, useSelector} from "react-redux";

const toDate = (date) => {
    return new Intl.DateTimeFormat('uk-Ua', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    }).format(new Date(date));
};

export default function DataTable() {
    const balance = useSelector(state => state.userBalance, shallowEqual)
    const data = useSelector(state => state.data, shallowEqual)
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Slot1', headerName: 'Slot1', width: 130 },
        { field: 'Slot2', headerName: 'Slot2', width: 130 },
        { field: 'Slot3', headerName: 'Slot3', width: 130 },
        { field: 'time', headerName: 'Time', width: 130, renderCell: (params)=>{
                return toDate(params.value)}},
    ];

    const rows = [
        { id: v4(), Slot1: balance, time: ''}
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
            <FormDialog />
        </div>
    );
}
