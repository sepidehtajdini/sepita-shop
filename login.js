
const modal = document.querySelector(".modal");
const modalbody = document.querySelector(".modal-body");
const formlabel = document.querySelector(".form-label");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const vorood = document.querySelector(".vorood");

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

vorood.addEventListener("click", onclk);
function onclk() {
    const body = {
        password: password.value,
        username: username.value};
   
 {fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
            iziToast.settings({
                timeout: 2000,
                titleLineHeight: '30',
                position: 'center',
            });
            iziToast.info({
                title: "خوش آمدید"
            })
            password.value = ""; username.value = ""
        })
    }
}