// export function addBook(formData){
// //    console.log(formData, "hi")

//     let adding = JSON.parse(localStorage.getItem("formData")); 
//     adding.push(formData);
//     localStorage.setItem("formData", JSON.stringify(adding));
//     console.log(adding,"this")
    
// }

export function addBook(formData) {
    let existingData = localStorage.getItem("formData");
    let adding = existingData ? JSON.parse(existingData) : [];

    adding.push(formData);
    localStorage.setItem("formData", JSON.stringify(adding));
    // console.log(adding, "this");
}