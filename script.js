document.addEventListener('DOMContentLoaded', function () {
    const startDateInput = document.getElementById('booking-start-date');
    const endDateInput = document.getElementById('booking-end-date');
    const today = new Date().toISOString().split('T')[0];

    console.log("startDateInput:", startDateInput); // Verifica se startDateInput está sendo selecionado

    if (startDateInput) {
        console.log("startDateInput type:", startDateInput.type); // Verifica o tipo de input

        if (startDateInput.type === 'date') {
            startDateInput.setAttribute('min', today);
        }

        startDateInput.addEventListener('input', function () {
            endDateInput.setAttribute('min', startDateInput.value);
        });
    }
});
