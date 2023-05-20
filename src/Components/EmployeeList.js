import React from "react";
import { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

// const BASE_URL = "https://resource-veterinarian-api.fly.dev/api";

export const EmployeeList = () => {
  
  const [employees, setEmployees] = useState([])

  useEffect(()=> {
    fetch(`https://resource-veterinarian-api.fly.dev/api/employees`)
    .then((response) => response.json())
    .then((response) => {
   
      setEmployees(response)
    })
    .catch((error) => console.error(error))
  }, [])

//class activity
//   let printName = (person) => {
//     return `${person.prefix ? `${person.prefix} ` : ""}${person.firstName} ${person.lastName}${person.suffix ? `, ${person.suffix}` : ""}`
// }

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(employee => {
          return (
            <Employee 
            key = {employee.id}
            employee = {employee}
            />
            )
          })}
      </section>
    </main>
  );
};

export default EmployeeList;
