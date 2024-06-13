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