import React from 'react'
import Field from '../Field/Field'
import { DataGrid } from '@mui/x-data-grid';
// import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'Question Title', width: 350 },
    { field: 'firstName', headerName: 'Question Level', width: 200 },
    { field: 'lastName', headerName: 'Technology', width: 200 },
    {
      field: 'age',
      headerName: 'Question Type',
      width: 350,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

const PredefinedQuestions = () => {

    let testTypeOptions = [
        { label: 'coding', value: 'coding' },
        { label: 'screening', value: 'screening' }
    ]


    return (
        <div>

            <Field
                control="input"
                fieldName="testName"
                fieldType="text"
                fieldLabel="Total No. of Predefined Question"
                fieldPlaceHolder="Predefined Question"
                fieldErrorMsg="Error Message"
                fieldClass="w-[500px]"
            />


            <div className='flex justify-between items-center'>

                <Field
                    control="selectlib"
                    fieldLabel="Technology"
                    fieldPlaceHolder="Technology"
                    fieldOptions={testTypeOptions}
                    fieldClass="w-[400px]"
                    multiSelect={true}
                />



                <Field
                    control="selectlib"
                    fieldLabel="Question Type"
                    fieldPlaceHolder="Question Type"
                    fieldOptions={testTypeOptions}
                    fieldClass="w-[400px]"
                    multiSelect={true}
                />

                <button className={'rounded bg-blue-600 w-[80px] text-white p-2 mr-[2px] mt-[35px]'}>Search</button>
                <button className={'rounded bg-blue-600 w-[80px] text-white p-2 mr-[2px] mt-[35px]'}>Clear</button>
                <button className={'rounded bg-blue-600 text-white p-2 mr-[2px] mt-[35px]'}>Add New Question</button>

            </div>


            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />



        </div>
    )
}

export default PredefinedQuestions