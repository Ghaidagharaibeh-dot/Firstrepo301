'use strict'
let createTble = document.getElementById('table');
let firstRow = document.createElement('tr');
createTble.appendChild(firstRow);

let tablehead1 = document.createElement('th');
firstRow.appendChild(tablehead1);
tablehead1.textContent = 'Studant Name';

let tablehead2 = document.createElement('th');
firstRow.appendChild(tablehead2);
tablehead2.textContent = 'Studant Grade';

let tablehead3 = document.createElement('th');
firstRow.appendChild(tablehead3);
tablehead3.textContent = 'Course';



function
Grades(theName, theCourse, theGrade) {

    this.theName = theName;
    this.theCourse = theCourse;
    this.theGrade = Math.floor(Math.random() * 101);;

    Grades.arr.push(this);
    //  setitemFun();

}

Grades.arr = [];


if (JSON.parse(localStorage.getItem('Grades')) !== null) {
    localStorage.getItem('Grades', Grades.arr)

}



let buttom = document.getElementById('form');

buttom.addEventListener('submit', submitFormFun);

function submitFormFun(event) {
    event.preventDefault();
    let studan = event.target.studantname.value;
    console.log(event.target.studantname.value);
    let course = event.target.options.value;
    console.log(event.target.options.value);

    new Grades(studan, course);
    console.log(Grades.arr);

    render();
    //setitemFun();

}



function render() {

    for (let i = 0; i < Grades.arr.length; i++) {
        let tableRows = document.createElement('tr');
        createTble.appendChild(tableRows);


        let tabledata1 = document.createElement('td');
        tableRows.appendChild(tabledata1);
        tabledata1.textContent = Grades.arr[i].theName;

        let tabledata2 = document.createElement('td');
        tableRows.appendChild(tabledata2);
        tabledata2.textContent = Grades.arr[i].theGrade;

        let tabledata3 = document.createElement('td');
        tableRows.appendChild(tabledata3);
        tabledata3.textContent = Grades.arr[i].theCourse;



    }

    // setitemFun();
}



function setitemFun() {
    let setitemlocal = JSON.stringify(Grades.arr);
    localStorage.setitem('Grades', setitemlocal);
    //render();
    // getitemfun();

}


function getitemfun() {
    JSON.parse(localStorage.getItem('Grades'))


    // let getitem = localStorage.getItem('Grades');
    // console.log(getitem)
    // let normaltypeof = JSON.parse(getitem);



}
getitemfun();
// getitem();
//render();