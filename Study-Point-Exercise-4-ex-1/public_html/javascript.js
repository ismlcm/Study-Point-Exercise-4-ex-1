/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// 1. DOM MANIPUTATION - SET VALUE FROM FORM TO DIV'S
$('#submit').click(function () {

    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var phone = $("#phone").val();
    var email = $("#email").val();

    $("#div1").html("<b>Firstname:</b> " + firstname);
    $("#div2").html("<b>Lastname:</b> " + lastname);
    $("#div3").html("<b>Phone:</b> " + phone);
    $("#div4").html("<b>Email:</b> " + email);
});

// 2. EVENTS - WRITE TO AN DIV ELEMENT
function writeToDiv(divId, theText) {

    var id = "#" + divId;

    $(id).html(theText);

}

$("div.divs").click(function () {

    var id = $(this).attr('id');
    var myText = "Hello World!";

    writeToDiv(id, myText);
});

// 3.CALLBACKS
$( document ).ready(function() {
// Dummy student
var student = {
    id:"1000",
    name:"Ismail",
    classroom:"Class B"
};

var students = [];

function callback_1(){
    
    console.log(student);
}

function callback_2(){
    
    students.push(student);
}

function adminStud(student, callback){
    
    if (callback == "consolLog"){
        
        callback_1();
    }
    else if (callback == "addToArray"){
        
        callback_2();
    }
}

adminStud(student, callback_1());
adminStud(student, callback_2());

console.log(students[0]);

});