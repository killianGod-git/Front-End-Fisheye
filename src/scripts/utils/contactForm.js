function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const form = document.getElementById('contactPhotograph');
    form.addEventListener('submit', e =>{
        e.preventDefault();
        validateForm(form)
    } )

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


function validateForm(form){
        const formInput = Array.from(form.querySelectorAll("input"));
        for (const formData of formInput){
            console.log(formData.id, "=>", formData.value)
        }
        const formMessage = form.querySelector('textarea');
        console.log(formMessage.id, '=>', formMessage.value);
        closeModal()
}