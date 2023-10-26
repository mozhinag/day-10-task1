function submitform() {
    const form = document.getElementById('infoForm');
    const table = document.getElementById('infoTable');
    const formData = new FormData(form);

    const newRow = table.insertRow(-1); 
    const cellNames = ['fname', 'lname', 'address', 'pin','gender','foods','state','country'];

    cellNames.forEach((fieldName) => {
        const newCell = newRow.insertCell();
        newCell.textContent = fieldName === 'foods' ? formData.getAll(fieldName).join(', ') : formData.get(fieldName);
    });

   
    form.reset();
}
