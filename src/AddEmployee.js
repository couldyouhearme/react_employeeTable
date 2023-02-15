import React, { useState, useEffect } from 'react'

export const AddEmployee = ({ employees, setEmployees }) => {
    const [name, setName] = useState('')
    const [pos, setPos] = useState('')
    const [salary, setSalary] = useState('')
    const [addFlag, setAddFlag] = useState(true)

    useEffect(() => {
        if (name !== '' && pos !== '' && salary !== '') {
            setAddFlag(false)
        }
    }, [name, pos, salary])

    const handleAddNew = () => {
        if (name !== '' && pos !== '' && salary !== '') {
            setEmployees([...employees, { id: employees.length, name, position: pos, salary }])
            setName('')
            setPos('')
            setSalary('')
            setAddFlag(true)
        }
    }

    const newEmployee = <tr>
        <th><input type='text' value={name} onChange={(e) => setName(e.target.value)} /></th>
        <th><input type='text' value={pos} onChange={(e) => setPos(e.target.value)} /></th>
        <th><input type='text' value={salary} onChange={(e) => setSalary(e.target.value)} /></th>
        <th><button onClick={handleAddNew} disabled={addFlag}>add</button></th>
    </tr>

    return newEmployee
}