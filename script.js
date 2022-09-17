function validateForm(){
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var productinterest = document.forms["myForm"]["productinterest"].value;
    var birthday = document.forms["myFrom"]["birthday"].value;

    if (name == "") {
        alert("name must be filled out")
        return false;

    }
    if (email == "") {
        alert("email must be filled out")
        return false;
        
    }
}