import React, { useState, useEffect } from 'react'

export const Employee = ({ employees }) => {

    const [salaryEditFlag, setSalaryEditFlag] = useState(false)
    const [inputSalary, setInputSalary] = useState(employees.salary)
    const [finalSalary, setFinalSalary] = useState(employees.salary)
    const [saveStatus, setSaveStatue] = useState(true)

    useEffect(() => {
        inputSalary === finalSalary ? setSaveStatue(true) : setSaveStatue(false)
    }, [inputSalary])

    const handleInputSalaryChange = (e) => {
        let curVal = parseInt(e.target.value)
        setInputSalary(curVal)
    }

    const handleSave = () => {
        setFinalSalary(inputSalary)
        setInputSalary('')
        setSalaryEditFlag(false)
    }

    return (
        <>
            <td>{employees.name}</td>
            <td>{employees.position}</td>
            <td onClick={() => setSalaryEditFlag(true)}>{finalSalary}</td>
            {
                salaryEditFlag ? <input type='number' value={inputSalary} onChange={handleInputSalaryChange} /> : <></>
            }
            <td>
                <button onClick={handleSave} disabled={saveStatus}>
                    save
                </button>
            </td>
        </>
    )


}