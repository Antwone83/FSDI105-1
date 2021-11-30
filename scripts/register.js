console.log("User register");
//create constructor
class User{
    constructor(email,pass,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=pass;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }

}

function createRow(user){
    return `<tr>
                <td>${user.fname}</td>
                <td>${user.lname}</td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>${user.phone}</td>
                <td>${user.address}</td>
    
            </tr> `;
}
function isValid(user){
    // return false when the user is not valid
    // return true when the user is valid
    let valid = true;
    if(user.fname.length <= 0){
        //is not a valid name
        valid = false;
        $("#txtFirst").css('boorder-color', 'red');
    }
    if(user.lname.length <= 0){
        //is not a valid name
        valid = false;
    }
    if(user.password.length <= 0){
        //is not a valid name
        valid = false;
    }
    if(user.email.length <= 0){
        //is not a valid name
        valid = false;
    }
    if(user.age.length < 21){
        //is not a valid name
        valid = false;
    }
    if(user.phone.length <= 0){
        //is not a valid name
        valid = false;
    }
    if(user.address.length <= 0){
        //is not a valid name
        valid = false;
    }


    return valid;
}



function registerUser(){
    let email = $("#txtEmail").val();
    let password = $("#txtpass").val();
    let fname = $("#txtfname").val();
    let lname = $("#txtlname").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();
    let user=new User(email,password,fname,lname,age,address,phone,payment,color);
    if(isValid(user)){
        $('#usersTable').append(createRow(user));
    }
    console.log(user);
}

function init(){
    console.log("Init function");


}
window.onload=init;