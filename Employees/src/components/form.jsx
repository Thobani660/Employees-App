
// function EmployeeForm(){
//     const [employee, setEmployee] = useState({
//       name: '',
//       email: '',
//       department: '',
//       designation: '',
//     });
    
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setEmployee({
//         ...employee,
//         [name]: value,
//       });
//     };
    
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log(employee);
//     };
   
//     return (
//     <div>
//       <form onSubmit={handleSubmit}>
//             <label>
//                  Name:
//             <input
//                 type="text"
//                 name="name"
//                 value={employee.name}
//                 onChange={handleChange}
//             />
//             </label>
//             <br />
//                 <label>
//                 Email:
//                 <input
//                     type="email"
//                     name="email"
//                     value={employee.email}
//                     onChange={handleChange}
//                 />
//                 </label>
//                  <br />
//                 <label>
//                 Department:
//                 <select
//                     name="department"
//                     value={employee.department}
//                     onChange={handleChange}
//                 >
//                     <option value="">Select Department</option>
//                     <option value="HR">HR</option>
//                     <option value="Tech">Tech</option>
//                     <option value="Finance">Finance</option>
//                 </select>
//                 </label>
//                     <br />
//                 <label>
//                 Designation:
//                 <input
//                     type="text"
//                     name="designation"
//                     value={employee.designation}
//                     onChange={handleChange}
//                 />
//                 </label>
//                       <br />
//                  <button type="submit">Submit</button>
//       </form>
//     </div>
//     );
//     }
    
//     export default EmployeeForm;