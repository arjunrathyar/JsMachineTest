document.addEventListener("DOMContentLoaded", function () {

    //FORM
    const form = document.getElementById('form');

    //DATE HANDLING
    const dateInput1 = document.getElementById('fromDate');
    const dateInput2 = document.getElementById('toDate');

    //TABLE HANDLING DROP DOWN MENU
    const approvedTab = document.getElementById('approvedTable');
    const rejectedTab = document.getElementById('rejectedTable');
    const pendingTab = document.getElementById('pendingTable');
    const $select = document.querySelector('#request');
    const basicOption = document.getElementById('basicReqs');
    const approvedOption = document.getElementById('approvedReqs');
    const rejectedOption = document.getElementById('rejectedReqs');
    const pendingOption = document.getElementById('pendingReqs');

    //EMPLOYEE VIEW
    const emplOption = document.getElementById('emplDetails');

    //BUTTONS
    const lgtBtn = document.getElementById('logOutbtn');
    const frmBtn = document.getElementById('formBtn');
    const sbmtBtn = document.getElementById('sbmtBtn');

    //CALENDER DATE HANDLING
    const today = new Date();
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    dateInput1.max = formattedDates(maxDate);
    dateInput1.min = formattedDates(minDate);
    dateInput2.max = formattedDates(maxDate);
    dateInput2.min = formattedDates(minDate);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //DATE FORMATTER

    function formattedDates(date) {
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString().padStart(2, "0");
        let day = (date.getDate()).toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    //NO. OF DAYS CALCULATOR

    function calculateDateRange() {
        const selectedDate = new Date(dateInput1.value)
        const selectedDate2 = new Date(dateInput2.value);
        const days = (selectedDate2.getTime() - selectedDate.getTime()) / (1000 * 60 * 60 * 24);

        document.getElementById('noOfDays').value = days;
    }

    //AUTOMATIC DAY COUNT ASSIGNER

    dateInput1.addEventListener('change', calculateDateRange);
    dateInput2.addEventListener('change', calculateDateRange);

    //LOG OUT

    function logout() {
        window.location.href = "Login.html";
    }

    lgtBtn.addEventListener('click', logout);

    //SUBMIT

    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });

    //VALIDATION HANDLING


    const empId = document.getElementById('empId');
    const empName = document.getElementById('empName');
    const empProj = document.getElementById('empProj');
    const cause = document.getElementById('cause');
    const source = document.getElementById('source');
    const dest = document.getElementById('dest');
    const fromDate = document.getElementById('fromDate');
    const toDate = document.getElementById('toDate');
    const noOfDays = document.getElementById('noOfDays');
    const mode = document.getElementById('mode');

    const idError = document.getElementById('idError');
    const nameError = document.getElementById('nameError');
    const projError = document.getElementById('projError');
    const causeError = document.getElementById('causeError');
    const srcError = document.getElementById('srcError');
    const destError = document.getElementById('destError');
    const froError = document.getElementById('froError');
    const toError = document.getElementById('toError');
    const modeError = document.getElementById('modeError');

    function validatorID() {
        let inputtxt = empId.value;
        let eID = /^[a-zA-Z0-9]+$/;
        if (!inputtxt.match(eID)) {
            idError.textContent = 'Please Reverify Your Input!! Note: Emp Id holds alphanumeric values only';
            empId.style.border = '1px solid';
            empId.style.borderColor = 'red';
            idError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            empId.style.border = '';
            empId.style.borderColor = '';
            sbmtBtn.style.border = '';
        }
    }

    function validatorName() {
        let inputtxt = empName.value;
        let eID = /^[a-zA-Z]+$/;
        if (!inputtxt.match(eID)) {
            nameError.textContent = 'Please Reverify Your Input!! Note: Emp Name holds alphabet values only!!';
            empName.style.border = '1px solid';
            empName.style.borderColor = 'red';
            nameError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            empName.style.border = '';
            empName.style.borderColor = '';
            sbmtBtn.style.border = '';
        }
    }




    form.addEventListener('submit', function (event) {

        event.preventDefault();

        //validation - empId
        if (!empId.value.trim()) {
            idError.textContent = 'Please Reverify Your Input!! Note: Emp Id holds alphanumeric values only';
            empId.style.border = '1px solid';
            empId.style.borderColor = 'red';
            idError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            idError.textContent = '';
            validatorID();
        }

        //validation - empName
        if (!empName.value.trim()) {
            nameError.textContent = 'Please Reverify Your Input!! Note: Emp Name holds alphabet values only!!';
            empName.style.border = '1px solid';
            empName.style.borderColor = 'red';
            nameError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            nameError.textContent = '';
            validatorName();
        }


        //validation - Project
        if (!empProj.value.trim()) {
            projError.textContent = 'Please Reverify Your Project Input!!';
            empProj.style.border = '1px solid';
            empProj.style.borderColor = 'red';
            projError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            projError.textContent = '';
            empProj.style.border = '';
            empProj.style.borderColor = '';
            sbmtBtn.style.border = '';
        }


        //validation - Cause for travel
        if (!cause.value.trim()) {
            causeError.textContent = 'Please Reverify Your Cause Input!!';
            cause.style.border = '1px solid';
            cause.style.borderColor = 'red';
            causeError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            causeError.textContent = '';
            cause.style.border = '';
            cause.style.borderColor = '';
            sbmtBtn.style.border = '';

        }


        //validation - Source
        if (!source.value.trim()) {
            srcError.textContent = 'Please Reverify Your Source Input!!';
            source.style.border = '1px solid';
            source.style.borderColor = 'red';
            srcError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            srcError.textContent = '';
            source.style.border = '';
            source.style.borderColor = '';
            sbmtBtn.style.border = '';

        }


        //validation - Destination
        if (!dest.value.trim()) {
            destError.textContent = 'Please Reverify Your Destination Input!!';
            dest.style.border = '1px solid';
            dest.style.borderColor = 'red';
            destError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            destError.textContent = '';
            dest.style.border = '';
            dest.style.borderColor = '';
            sbmtBtn.style.border = '';

        }


        //validation - Mode Of Travel

        if (!mode.value.trim()) {
            modeError.textContent = 'Please Reverify Your Mode Of Travel Input!!';
            mode.style.border = '1px solid';
            mode.style.borderColor = 'red';
            modeError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            modeError.textContent = '';
            mode.style.border = '';
            mode.style.borderColor = '';
            sbmtBtn.style.border = '';
        }

        //validation - From Date

        if (!fromDate.value.trim()) {
            froError.textContent = 'Please Reverify Your From Date Input!!';
            fromDate.style.border = '1px solid';
            fromDate.style.borderColor = 'red';
            froError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            froError.textContent = '';
            fromDate.style.border = '';
            fromDate.style.borderColor = '';
            sbmtBtn.style.border = '';
        }

        //validation - To Date

        if (!toDate.value.trim()) {
            toError.textContent = 'Please Reverify Your To Date Input!!';
            toDate.style.border = '1px solid';
            toDate.style.borderColor = 'red';
            toError.style.color = 'red';
            sbmtBtn.style.border = '1px solid red';
        }
        else {
            toError.textContent = '';
            toDate.style.border = '';
            toDate.style.borderColor = '';
            sbmtBtn.style.border = '';
        }


    });

    //CLEAR VALIDATION MARKS

    function clearError() {
        idError.textContent = '';
        nameError.textContent = '';
        empId.style.border = '';
        empId.style.borderColor = '';
        empName.style.border = '';
        empName.style.borderColor = '';
        projError.textContent = '';
        empProj.style.border = '';
        empProj.style.borderColor = '';
        causeError.textContent = '';
        cause.style.border = '';
        cause.style.borderColor = '';
        srcError.textContent = '';
        source.style.border = '';
        source.style.borderColor = '';
        destError.textContent = '';
        dest.style.border = '';
        dest.style.borderColor = '';
        modeError.textContent = '';
        mode.style.border = '';
        mode.style.borderColor = '';
        froError.textContent = '';
        fromDate.style.border = '';
        fromDate.style.borderColor = '';
        toError.textContent = '';
        toDate.style.border = '';
        toDate.style.borderColor = '';
        sbmtBtn.style.border = '';
    }

    //FORM SELECTOR

    frmBtn.addEventListener('click', () => {
        if (form.style.display === 'none') {
            clearError();
            document.getElementById("travelDetails").innerHTML = "";
            rejectedTab.style.display = 'none';
            pendingTab.style.display = 'none';
            approvedTab.style.display = 'none';
            form.style.display = 'block';
            $select.value = 'viewRequest'
        }
    });

    //APPROVE TAB SELECTOR

    approvedOption.addEventListener('click', () => {
        if (approvedTab.style.display === 'none') {
            clearError();
            document.getElementById("travelDetails").innerHTML = "";
            rejectedTab.style.display = 'none';
            pendingTab.style.display = 'none';
            approvedTab.style.display = 'block';
            form.style.display = 'none';
        }
    });

    //PENDING TAB SELECTOR

    pendingOption.addEventListener('click', () => {
        if (pendingTab.style.display === 'none') {
            clearError();
            document.getElementById("travelDetails").innerHTML = "";
            rejectedTab.style.display = 'none';
            pendingTab.style.display = 'block';
            approvedTab.style.display = 'none';
            form.style.display = 'none';
        }
    });

    //REJECT TAB SELECTOR

    rejectedOption.addEventListener('click', () => {
        if (rejectedTab.style.display === 'none') {
            clearError();
            document.getElementById("travelDetails").innerHTML = "";
            pendingTab.style.display = 'none';
            approvedTab.style.display = 'none';
            rejectedTab.style.display = 'block';
            form.style.display = 'none';
        }
    });

    //CLEAR SCREEN

    basicOption.addEventListener('click', () => {
        clearError();
        document.getElementById("travelDetails").innerHTML = "";
        rejectedTab.style.display = 'none';
        pendingTab.style.display = 'none';
        approvedTab.style.display = 'none';
        form.style.display = 'none';
    });

    //RANDOM VIEW

    let req1 = { "empId": "512", "empName": "Donald", "cause": "Client Meeting for ABC project", "source": "TVPM", "destination": "New Delhi", "fromDate": "20/10/2023", "toDate": "24/10/2023", "period": 4, "mode": "Flight" };
    const travelDetails = [];
    travelDetails.push(req1);

    emplOption.addEventListener('click', () => {
        clearError();
        rejectedTab.style.display = 'none';
        pendingTab.style.display = 'none';
        approvedTab.style.display = 'none';
        form.style.display = 'none';

        document.getElementById("travelDetails").innerHTML = `
        <h2>
        Travel Details
        </h2>
        <b>Emp Id: ${travelDetails[0].empId} </b>
        <br>
        <b>Emp Name: ${travelDetails[0].empName}</b>
        <br>
        <b>Cause for Travel: ${travelDetails[0].cause}</b>
        <br>
        <b>Source: ${travelDetails[0].source}</b>
        <br>
        <b>Destination: ${travelDetails[0].destination}</b>
        <br>
        <b>From: ${travelDetails[0].fromDate}</b> <b>To: ${travelDetails[0].toDate}</b> <b>For: ${travelDetails[0].period}</b> <b>days</b>
        <br>
        <b>Requested Mode: ${travelDetails[0].mode}</b>
            `
    });


});