// Write your solution in this file!
const employee = { 
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj,
        [key]: value
    }   
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj
}

function deleteFromEmployeeByKey(key, obj){
    let cloneEmployee = Object.assign({}, employee);
    delete cloneEmployee.name;
    return cloneEmployee;
}
function destructivelyDeleteFromEmployeeByKey(obj){
    delete obj.name
    return obj
}