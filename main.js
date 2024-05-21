
let newSafetyIncident;
let safety=[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
];
let safetyForm = document.getElementById("safety-form");

let employees = [
    {num: 1, empName: "Hector Escobar"},
    {num: 2, empName: "Karina Alanis"},
    {num: 3, empName: "Tania Huerta"},
    {num: 4, empName: "Pedro Ruiz"},
    {num: 5, empName: "Luis Martinez"},
    {num: 6, empName: "Samantha Balderas"},
    {num: 7, empName: "Martin Leija"},
    {num: 8, empName: "Ramiro Cervantes"},
    {num: 9, empName: "Paloma Manriquez"},
    {num: 10, empName: "Raul Elizondo"},
    {num: 11, empName: "Carlos Rodriguez"},
    {num: 12, empName: "Mariana Encinia"}
];

safetyForm.addEventListener("submit", function(event){
    event.preventDefault();
    recordASafetyIncident();
    clearSafetyForm();

})

//crear el objeto y llamar a la funcion para agregarlo al final del array
function recordASafetyIncident(){

    class SafetyIncident{
        constructor (employeeId, employeeName, shift, area, sup, type, description, registrationDate){
            this.employeeId = employeeId;
            this.employeeName = employeeName;
            this.shift = shift;
            this.area = area;
            this.sup = sup; 
            this.type = type;
            this.description = description;
            this.registrationDate = registrationDate;
            
        }
    };

    let getEmployeeId = document.getElementById("safety-employeeId").value;
    let getEmployeeName = document.getElementById("safety-employeeName").value;
    let getShift = document.getElementById("safety-shift").value;
    let getArea = document.getElementById("safety-area").value;
    let getSup = document.getElementById("safety-supervisor").value;
    let getType = document.getElementById("safety-incidentCode").value;
    let getDescription = document.getElementById("safety-incidentDescription").value;
    let getRegistrationDate = new Date();

    newSafetyIncident = new SafetyIncident(getEmployeeId,getEmployeeName,getShift,getArea,getSup,getType,getDescription,getRegistrationDate);
    
    addSafetyIncident(newSafetyIncident);
}

//agregar el nuevo incidente al final del array
function addSafetyIncident(newSafetyIncident){
safety.push(newSafetyIncident);
}

//Limpiar los campos del formulario
function clearSafetyForm(){
    safetyForm.reset();
}
//-----------------------------------------------------
//mostrar eventos inseguros

let safetyFiltersForm = document.getElementById("safetyFiltersForm");
let safetyRecordTableBody =document.getElementById("safety-table-body");


safetyFiltersForm.addEventListener("submit", function(event){
    event.preventDefault();
    /*showSafetyInicidentsRecord();*/

   

    let filter1 = document.getElementById("filtro1").value;
    let filter2 = document.getElementById("filtro2").value;
    let filter3 = document.getElementById("filtro3").value;
    
    console.log(filter1);
    console.log(filter2);
    console.log(filter3);

    let filterSafety = safety.filter((object)=>{ 
    return (filter1 === "all" || object.area === filter1) &&
           (filter2 === "all" || object.shift === filter2) &&
           (filter3 === "all" || object.type === filter3);

        });

    safetyRecordTableBody.innerHTML='';

    filterSafety.forEach((safetyItem) =>{
        let row = `<tr>
        <td>${safetyItem.employeeId}</td>
        <td>${safetyItem.employeeName}</td>
        <td>${safetyItem.area}</td>
        <td>${safetyItem.sup}</td>
        <td>${safetyItem.shift}</td>
        <td>${safetyItem.type}</td>
        <td>${safetyItem.description}</td>
        </tr>`
        
        safetyRecordTableBody.innerHTML += row;
    });

});
