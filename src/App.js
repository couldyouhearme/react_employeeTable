import React, { useState } from 'react'
import { Employee } from './Employee'
import { AddEmployee } from './AddEmployee'

const employeeList = [
  {
    id: 0,
    name: 'Amy',
    position: 'software engineer',
    salary: 150000
  },
  {
    id: 1,
    name: 'Tom',
    position: 'software developer',
    salary: 135000
  },
]

const App = () => {
  const [employees, setEmployees] = useState(employeeList)

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          employees && employees.map((employee, idx) => {
            return (
              <tr key={idx}>
                <Employee employees={employee} />
              </tr>
            )
          })
        }
        <AddEmployee employees={employees} setEmployees={setEmployees} />
      </tbody>
    </table>)
}

export default App