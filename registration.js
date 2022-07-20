const form = document.querySelector("form");
const input = document.querySelector("input");
const password2 = document.querySelector("#password2");
const username2 = document.querySelector("#username2");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const repassword = document.querySelector("#repassword");
const submit = document.querySelector(".submit");

submit.addEventListener("click", click);

function click() {
    const body = {
        age: age.value,
        password2: password2.value,
        username2: username2.value,
        repassword: repassword.value,
        email: email.value
    };

    if (password2.value === "" || username2.value === "" || age.value === "" || repassword.value === "" || email.value === "") {
        
        iziToast.settings({
            timeout: 2000,
            balloon: true,
            titleLineHeight: '100',
            position: 'center',
        });
        
        iziToast.error({
            title: 'لطفاً همه‌ی قسمت‌ها را تکمیل کنید'
        });
    return
    };
    if (password2.value !== repassword.value){
        iziToast.settings({
            timeout: 2000,
            balloon: true,
            titleLineHeight: '100',
            position: 'center',
        });
        iziToast.error({
            title:"گذرواژه به درستی تکرار نشده است"
        });
        submit.removeEventListener("click", click)
    }
    else {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        }).then(function (response) {
            return response.json()
        }).then(function (data) {
            // alert("عضویت شما با موفقیت انجام شد!"),
            iziToast.settings({
                timeout: 2000,
                balloon: true,
                titleLineHeight: '100',
                position: 'center',
            }),
            iziToast.success({
                title:"عضویت شما با موفقیت انجام شد!"
            }),

            password2.value = ""; username2.value = ""; age.value = ""; repassword.value = ""; email.value = ""
        })
    }
}