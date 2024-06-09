import { supabase } from '../supabase/client';
import { useState, useEffect } from 'react';
import React from 'react';
import { Table, Divider, Radio } from 'antd';


function DriversTable() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await supabase.from('drivers').select('*').limit(10);
                const dataWithKeys = response.data.map((item, index) => ({ key: index, ...item }));
                setData(dataWithKeys);
                console.log('Had to refresh data')
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
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'iRacing Number',
            dataIndex: 'iracing_number',
            key: 'iracing_number',
        }
    ]

    const rowSelection = {
        type: 'radio',
        getCheckboxProps: (record) => ({
            disabled: record.driver_name === 'Disabled User',
            name: record.driver_name,
        }),
    };

    return (
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                    console.log(value);
                }}
                value={selectionType}>

            </Radio.Group>
            <Divider />
            <Table dataSource={data} 
                   columns={columns} 
                   rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                   }}
                   onRow={(record) => ({
                    onClick:() => {
                        setSelectedRows([record]);
                    },
                   })}
                   />
        </div>
    );
}

export default DriversTable;

