import { supabase } from '../supabase/client';
import { useState, useEffect } from 'react';
import React from 'react';
import { Table } from 'antd';

function DriversTable() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await supabase.from('drivers').select('*');
                setData(response.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    const columns = [
        {
            title: 'Driver Name',
            dataIndex: 'driver_name',
            key: 'driver_name',
        },
        {
            title: 'iRacing Number',
            dataIndex: 'iracing_number',
            key: 'iracing_number',
        }
    ]

    console.log(data);

    return (
        <div>
            <Table dataSource={data} columns={columns} />
        </div>
    );
}

export default DriversTable;

