function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const form = document.getElementById('contactPhotograph');
    const formSubmit = document.getElementById('btn-submit');
    formSubmit.addEventListener('click', function (event){
        event.preventDefault();
        const formInput = Array.from(form.querySelectorAll("input"));
        for (const formData of formInput){
            console.log(formData.id, "=>", formData.value)
        }
        const formMessage = form.querySelector('textarea');
        console.log(formMessage.id, '=>', formMessage.value);
    })
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


