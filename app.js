function validateName() {
    const fname = document.getElementById('fname').value;

    // Regular expressions for each criteria
    const nospacesRegex =   /^([A-z0-9!@#$%^&*().,<>{}[\]<>?_=+\-|;:\'\"\/])*[^\s]\1*$/;
    

    // Validate each criteria
    validateCriteria(nospacesRegex, 'nospaces', fname);

}

function validateCriteria(regex, elementId, fname) {
    const element = document.getElementById(elementId);
    if (regex.test(fname)) {
        element.classList.remove('invalid');
        element.classList.add('valid');
    } else {
        element.classList.remove('valid');
        element.classList.add('invalid');
    }
}
// let isUserExist = array.some(patient => patient.FullName === FullName);
//     if (isUserExist) {
//         alert("User already exists. Please use a different name.");
//         return;}
        function validatePassword() {
            const password = document.getElementById('password').value;

            // Regular expressions for each criteria
            const lengthRegex = /.{8,}/;
            const lowercaseRegex = /[a-z]/;
            const uppercaseRegex = /[A-Z]/;
            const digitRegex = /\d/;
            const specialRegex = /[!@#$%^&*(),.?":{}|<>]/;

            // Validate each criteria
            validateCriteria(lengthRegex, 'length', password);
            validateCriteria(lowercaseRegex, 'lowercase', password);
            validateCriteria(uppercaseRegex, 'uppercase', password);
            validateCriteria(digitRegex, 'digit', password);
            validateCriteria(specialRegex, 'special', password);
        }

        function validateCriteria(regex, elementId, password) {
            const element = document.getElementById(elementId);
            if (regex.test(password)) {
                element.classList.remove('invalid');
                element.classList.add('valid');
            } else {
                element.classList.remove('valid');
                element.classList.add('invalid');
            }
        }
       
        function validateEmail() {
            const email = document.getElementById('email').value;

            // Regular expressions for each criteria
            const emailRegex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
            
            // Validate each criteria
            validateCriteria(emailRegex, 'emailvalid', email);

        }

        function validateCriteria(regex, elementId,email) {
            const element = document.getElementById(elementId);
            if (regex.test(email)) {
                element.classList.remove('invalid');
                element.classList.add('valid');
            } else {
                element.classList.remove('valid');
                element.classList.add('invalid');
            }
        }
        function validateNumber() {
            const phone = document.getElementById('phone').value;

            // Regular expressions for each criteria
            const typePhoneRegex = /^[0-9]{10}$/;
            const startPhoneRegex = /^\b07/;
            // const lengthPhoneRegex = /.{10}$/;
            
            // Validate each criteria
            validateCriteria(typePhoneRegex, 'typePhone', phone);
            validateCriteria(startPhoneRegex, 'startPhone', phone);
           

        }

        function validateCriteria(regex, elementId,phone) {
            const element = document.getElementById(elementId);
            if (regex.test(phone)) {
                element.classList.remove('invalid');
                element.classList.add('valid');
            } else {
                element.classList.remove('valid');
                element.classList.add('invalid');
            }
        }

       



let array = [];

function Person(fullName, userPassword, birthDate, phoneNum, userGender, userDisease) {
    this.fullName = fullName;
    this.userPassword = userPassword;
    this.birthDate = birthDate;
    this.phoneNum = phoneNum;
    this.userGender = userGender;
    this.userDisease = userDisease;
}

function render(event) {
    event.preventDefault();
    let pateintForm = event.target;
    let Fname = pateintForm.elements['fname'].value;
    let Password = pateintForm.elements['password'].value;
    let Birth = pateintForm.elements['birth'].value;
    let Phone = pateintForm.elements['phone'].value;
    let Gender = pateintForm.elements['gender'].value;
    let cDisease = pateintForm.elements['Chronic Diseases'].value;

    let pateint = new Person(Fname, Password , Birth, Phone, Gender, cDisease);
    array.push(pateint);
    localStorage.setItem("pateintArray", JSON.stringify(array));

    let text = JSON.parse(localStorage.getItem("pateintArray"));

    let carddd = document.getElementById("carddd");
    carddd.innerHTML = "";
    text.forEach(function(sss) {
        let z = document.createElement("div");
        
        z.classList.add("cardd");
        let patientDetails = `
            <img src="profilepic.jpg" alt="">
            <h2>${sss.fullName}</h2>
            <p>Password: ${sss.userPassword}</p>
            <p>Date of Birth: ${sss.birthDate}</p>
            <p>Gender: ${sss.userGender}</p>
            <p>Chronic Diseases: ${sss.userDisease}</p>
            <p>Phone Number: ${sss.phoneNum}</p>`;
        z.innerHTML = patientDetails;
        carddd.appendChild(z);
    });
}

let pateintForm = document.getElementById("form");
pateintForm.addEventListener("submit", render);