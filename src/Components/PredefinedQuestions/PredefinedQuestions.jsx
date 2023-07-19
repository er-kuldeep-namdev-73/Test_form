import React from 'react'
import Field from '../Field/Field'
import FormContext from '../../context/FormContext';
import Button from '../Button/Button';
import { DataGrid } from '@mui/x-data-grid';
import { useContext } from 'react';
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
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

const PredefinedQuestions = () => {

    const {formData} = useContext(FormContext);

    let testTypeOptions = [
        { label: 'coding', value: 'coding' },
        { label: 'screening', value: 'screening' }
    ]

    return (
        <div>

            <Field
                control="input"
                fieldName="predefined.totalQuestions"
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
                    multiSelect={"true"}
                />



                <Field
                    control="selectlib"
                    fieldLabel="Question Type"
                    fieldPlaceHolder="Question Type"
                    fieldOptions={testTypeOptions}
                    fieldClass="w-[400px]"
                    multiSelect={"true"}
                />
                
                <Button
                    btnClass='rounded bg-blue-600 w-[80px] text-white p-2 mr-[2px] mt-[35px]'
                >
                    Search
                </Button>
                <Button
                    btnClass='rounded bg-blue-600 w-[80px] text-white p-2 mr-[2px] mt-[35px]'
                >
                    Clear
                </Button>
                <Button
                    btnClass='rounded bg-blue-600 text-white p-2 mr-[2px] mt-[35px]'
                >
                    Add New Question
                </Button>
                
            </div>


            <div className='h-[400px] mt-5'>
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



        </div>
    )
}

export default PredefinedQuestions