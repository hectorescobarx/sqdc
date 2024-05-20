
let newSafetyIncident;
let safety=[];
let safetyForm = document.getElementById("safety-form");

safetyForm.addEventListener("submit", function(event){
    event.preventDefault();
    recordASafetyIncident();
    clearSafetyForm();

})

//crear el objeto y llamar a la funcion para agregarlo al final del array
function recordASafetyIncident(){

    class Incident{
        constructor (employeeId, employeeName, shift, area, sup, type, description){
            this.employeeId = employeeId;
            this.employeeName = employeeName;
            this.shift = shift;
            this.area = area;
            this.sup = sup; 
            this.type = type;
            this.description = description;
        }
    };

    let getEmployeeId = document.getElementById("safety-employeeId").value;
    let getEmployeeName = document.getElementById("safety-employeeName").value;
    let getShift = document.getElementById("safety-shift").value;
    let getArea = document.getElementById("safety-area").value;
    let getSup = document.getElementById("safety-supervisor").value;
    let getType = document.getElementById("safety-incidentCode").value;
    let getDescription = document.getElementById("safety-incidentDescription").value;

    newSafetyIncident = new Incident(getEmployeeId,getEmployeeName,getShift,getArea,getSup,getType,getDescription);
    
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