document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('makePlanLink').addEventListener('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('makePlanModal'), {
            keyboard: false
        });
        myModal.show();
    });

    function saveEvent() {
        // Add your logic here to save the event details
        // For example, you can get the values from the form using document.getElementById
        // and then perform any necessary actions (e.g., updating the page, sending data to the server)
        // Finally, close the modal
        var myModal = new bootstrap.Modal(document.getElementById('makePlanModal'));
        myModal.hide();
    }

    document.getElementById('makePlanModal').addEventListener('hidden.bs.modal', function () {
        // Code to execute when the modal is hidden
    });

    $(document).ready(function () {
        // Initialize datepicker
        $('#date').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true
        });

        // Initialize timepicker
        $('#time').timepicker({
            minuteStep: 1,
            showSeconds: false,
            showMeridian: false,
            defaultTime: false
        });
    });

    // Additional code to fix the event time input
    $('#time').timepicker({
        minuteStep: 1,
        showSeconds: false,
        showMeridian: false,
        defaultTime: false
    });
});

function submitForm(event) {
    event.preventDefault();
    const userType = document.getElementById('userType').value;
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('messageInput').value;

    // Retrieve existing form data from localStorage
    const formDataArrayString = localStorage.getItem('formDataArray');
    const formDataArray = formDataArrayString ? JSON.parse(formDataArrayString) : [];

    // Create a new form data object
    const formData = {
        userType,
        title,
        date,
        time,
        message
    };

    // Append the new form data to the array
    formDataArray.push(formData);

    // Save the updated array back to localStorage
    localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

    document.getElementById('contactForm').reset();

    const successMessageElement = document.getElementById('successMessage');
    successMessageElement.textContent = 'Submitted, Nice plan!';
    successMessageElement.style.display = 'block';

    setTimeout(() => {
        successMessageElement.textContent = '';
        successMessageElement.style.display = 'none';
    }, 1500);
}

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve form data array from localStorage
    const formDataArrayString = localStorage.getItem('formDataArray');

    if (formDataArrayString) {
        const formDataArray = JSON.parse(formDataArrayString);

        // Display the latest form data on the page (modify this as needed)
        const latestFormData = formDataArray[formDataArray.length - 1];
        document.getElementById('displayUserType').textContent = latestFormData.userType;
        document.getElementById('displayTitle').textContent = latestFormData.title;
        document.getElementById('displayDate').textContent = latestFormData.date;
        document.getElementById('displayTime').textContent = latestFormData.time;
        document.getElementById('displayMessage').textContent = latestFormData.message;
    }
});
