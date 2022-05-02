import React, { useState, useEffect } from 'react';


const TableHeader =
    () => <thead>
        <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
    </thead>


const TableAction = (props) => <button>Details</button>

const TableRow = (props) => {
    const [tableRows, setTableRows] = useState([]); 

    useEffect(()=> {
        setTableRows(props.list)
      }, []);

      return(
          <tbody>
              {
                  tableRows.map((person) =>{
                      const row =
                      <tr key={person.id}>
                          <td>{person.id}</td>
                          <td>{person.firstName}</td>
                          <td>{person.lastName}</td>
                          <td>{person.age}</td>
                          <td>
                              <TableAction/>
                          </td>
                      </tr>
                      return row;
                  })
              }
          </tbody>
      )
}

const DataTable = () => {

    const initValue = [
        {
            id: 1000,
            firstName: "a",
            lastName: "A",
            birthDate: "1900-01-01",
            age: "12"
        },
        {
            id: 2000,
            firstName: "b",
            lastName: "B",
            birthDate: "1900-01-02",
            age: "12"
        },
        {
            id: 3000,
            firstName: "c",
            lastName: "C",
            birthDate: "1900-01-03",
            age: "13"
        },
    ]
    const [studentList, setStudentList] = useState(initValue);

    return (
        <table>
            <TableHeader />
            <TableRow list={studentList}/>

        </table>
    );
};

export default DataTable;