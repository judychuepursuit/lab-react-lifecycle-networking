import { useState, useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false)
  const [pets, setPets] = useState([]);
  const BASE_URL = `https://resource-veterinarian-api.fly.dev/api/`;

  //NOT working? (ex:"Susan Gallegos")
  // BASE_URL = https://resource-veterinarian-api.fly.dev/api
  // Get all employees: `${BASE_URL}/employees`
  // Get a single employee: `${BASE_URL}/employees/${employee.id}`
  // Get all pets: `${BASE_URL}/api/pets`
  // Get all pets assigned to an employee: `${BASE_URL}/api/pets?employeeId=${employee.id}`

  useEffect(()=> {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setPets(response)
    })
    .catch((error) => console.error(error))
  }, [])

  const toggleShowPets = () => {
    setShowPets(!showPets)
  }

  let firstLast = `${employee.firstName} ${employee.lastName}`
  let newname = employee.prefix 
  ? `${employee.prefix} ${firstLast} ${employee.postfix}` : employee.postfix 
  ? `${employee.firstName} ${employee.lastName}, ${employee.postfix}`: `${employee.firstName} ${employee.lastName}`;
         
  return (
    <article className="employee">
      <h3>{newname}</h3>
      <h4>{employee.title}</h4>
      {showPets ?(
        <>
        <PetList pets={pets} key={pets.id}/>
        <button onClick={toggleShowPets}>Hide Pets</button>
        </>):(
        <button onClick={toggleShowPets}>Show Pets</button>
      )}
    </article>
  );
};


//   return (
//     <article className="employee">
//       <h3>{employee.firstName} {employee.lastName}</h3>
//       <h4>{employee.title}</h4>
//       <button onClick={toggleShowPets}>{showPets ? "Hide Pets" : "Show Pets"}</button>
//       {showPets ? <PetList pets={pets}/> : <></>}
//     </article>
//   );
// };

export default Employee;
