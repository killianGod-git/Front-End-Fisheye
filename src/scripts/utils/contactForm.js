function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const form = document.getElementById('contactPhotograph');
    form.addEventListener('submit', e =>{
        e.preventDefault();
        validateForm(form)
        
    } )
    accessibilityModal()
    document.addEventListener('keydown', function(e) {
    let isEscapePressed = e.key === 'Escape' ;
    
    if (isEscapePressed) {
       closeModal()
    }
});
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
function accessibilityModal(){
    const  focusableElements =
    'button, [href], input,  [tabindex]:not([tabindex="-1"])';
    const modal = document.querySelector('#contact_modal'); 

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; 
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; 


document.addEventListener('keydown', function(e) {
  let isTabPressed = e.key === 'Tab';

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey ) { 
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
    }
  } else {
    if (document.activeElement === lastFocusableElement) { 
      firstFocusableElement.focus(); 
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();
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