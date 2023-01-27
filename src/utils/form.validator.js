export default function validForm(formId, formEvent, callback) {
  const forms = document.querySelectorAll(`#${formId}`);
  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    if (!form.checkValidity()) {
      formEvent.preventDefault();
      formEvent.stopPropagation();
      form.classList.add("was-validated");
      callback(false, form);
    }

    if (form.checkValidity()) {
      callback(true, form);
    }
  });
}
