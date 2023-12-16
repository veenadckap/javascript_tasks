var today = new Date().toISOString().split("T")[0]
document.getElementById("put").setAttribute("max", today)


let cal_btn = document.getElementById("btn");

function calculateAge() {
    let birthDateInput = document.querySelector("#put").value;
    console.log(birthDateInput);

    let birthDate = new Date(birthDateInput);
    console.log(birthDate);

    let currentDate = new Date();
    let ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
    console.log(ageInMilliseconds);

    let ageInYears = Math.abs(new Date(ageInMilliseconds).getUTCFullYear() - 1970);
    console.log(ageInYears);

    let ageInMonths = calculateMonths(birthDate, currentDate);
    let ageInDays = calculateDays(birthDate, currentDate);

    let result = `${ageInYears} years ${ageInMonths} months ${ageInDays} days`;
    document.querySelector("#hd").innerHTML = result;
}

function calculateMonths(startDate, endDate) {
    if (endDate.getMonth() >= startDate.getMonth()) {
        if (endDate.getDate() >= startDate.getDate()) {
            return endDate.getMonth() - startDate.getMonth();
        } else {
            if (endDate.getMonth() - 1 >= startDate.getMonth()) {
                return endDate.getMonth() - 1 - startDate.getMonth();
            } else {
                return endDate.getMonth() - 1 + 12 - startDate.getMonth();
            }
        }
    } else {
        return 0; 
    }
}

function calculateDays(startDate, endDate) {
    if (endDate.getDate() >= startDate.getDate()) {
        return endDate.getDate() - startDate.getDate();
    } else {
        let lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0).getDate();
        return lastDayOfMonth - startDate.getDate() + endDate.getDate();
    }
}

cal_btn.addEventListener("click", calculateAge);
