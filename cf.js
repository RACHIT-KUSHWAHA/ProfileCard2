const formInputs = document.querySelectorAll(
  ".floating-contact-form .form-container .form-input"
);

const contactIcon = document.querySelector(
  ".floating-contact-form .contact-icon"
);

const formContainer = document.querySelector(
  ".floating-contact-form .form-container"
);

contactIcon.addEventListener("click", () => {
  formContainer.classList.toggle("active");
});

formInputs.forEach((i) => {
  i.addEventListener("focus", () => {
    i.previousElementSibling.classList.add("active");
  });
});

formInputs.forEach((i) => {
  i.addEventListener("blur", () => {
    if (i.value === "") {
      i.previousElementSibling.classList.remove("active");
    }
  });
});
async function cfSubmitMessage() {
    var cfvalue = {
      name: GEBID("name").value,
      email: GEBID("email").value.toLowerCase(),
      message: GEBID("message").value,
    };
    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    if (cfvalue.name === "" || cfvalue.email === ""   || cfvalue.message === "") {
        return;
    } 
    else if (!emailRegex.test(cfvalue.email)) {
        return;
    } else {
        GEBID("submit").removeAttribute("onclick");
        GEBID("submit").classList.remove("color");
        GEBID("submit").classList.add("onclick");
        GEBID("submit").innerHTML = "Sending...";

        try {
        var sendmessage = await (
            await fetch(
            'https://conform.ukqqdzfj.workers.dev/',
            {
                method: "POST",
                body: JSON.stringify(cfvalue),
            }
            )
        ).json();

        if (sendmessage.status) {
            GEBID("submit").innerHTML = "Sent!";

            localStorage.setItem(
            "contact-form",
            JSON.stringify({
                sent: true,
                canSendUnix: new Date().getTime() + 43200000,
            })
            );
        } else {
            throw new Error("Error");
        }
        } catch (error) {
        console.log(error);
        GEBID("submit").innerHTML = "Error!";
        }
      }
}

function GEBID(id) {
    return document.getElementById(id);
}