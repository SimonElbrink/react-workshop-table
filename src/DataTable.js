import React, { useState} from 'react';


const DataTable = () => {

    const initValue = [
        {
            id: 1000,
            firstName: "a",
            lastName: "A",
            birthDate: "1900-01-01",
            age: 12
        },
        {
            id: 2000,
            firstName: "b",
            lastName: "B",
            birthDate: "1900-01-02",
            age: 12
        },
        {
            id: 3000,
            firstName: "c",
            lastName: "C",
            birthDate: "1900-01-03",
            age: 13
        },
    ]

    const [studentList, setStudentList] = useState(initValue);

    const [showDetails, setShowDetails] = useState(false);
    const [person, setPerson] = useState(
        { id: 0, firstName: "", lastName: "", birthDate: "", age: 0 }
    )

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


    const TableAction = (props) => {

        const showData = () => {
            setPerson(props.personData);
            setShowDetails(true)

        }

        return <button className='btn btn-primary' onClick={showData} >Details</button>
    }

    const TableRow = (props) => {

        const tableRows = props.list
        return (
            <tbody>
                {
                    tableRows.map((person) => {
                        const row =
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.firstName}</td>
                                <td>{person.lastName}</td>
                                <td>{person.age}</td>
                                <td>
                                    <TableAction personData={person} />
                                </td>
                            </tr>
                        return row;
                    })
                }
            </tbody>
        )
    }

    const ShowStudentDetails = () => {
        console.log(person);

        return (
            showDetails ?
                <div>
                    <h1>Person Information</h1>
                    <p>ID: {person.id}</p>
                    <p>Name: {person.firstName} {person.lastName}</p>
                    <p>birthDate: {person.birthDate}</p>
                    <button onClick={() => { setPerson({}); setShowDetails(false); }}>Hide</button>
                </div>
                :
                <React.Fragment />
        )
    }

    return (
        <div className='container mt-5'>
            <h1>List of People</h1>
            <table className="table table-striped border">
                <TableHeader />
                <TableRow list={studentList} />
            </table>
            <ShowStudentDetails person={person} />
        </div>

    );
};

export default DataTable;