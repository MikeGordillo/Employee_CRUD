//////// delete departments, roles, and employees via DELETE


let removeEmployee = function (employeeId) {
    return this.connection.query(
        'DELETE FROM employee WHERE id=?',
        employeeId
    )
}
let removeDepartment = function (departmentId) {
    return this.connection.query(
        'DELETE FROM department WHERE id=?',
        departmentId
    )
}
let removeRole = function (employeeRole) {
    return this.connection.query(
        'DELETE FROM role WHERE id=?',
        employeeRole
    )
}


module.exports = {
    removeEmployee,
    removeDepartment,
    removeRole,

}