function object() {
    input = new String();
    console.log(typeof (input));
}

function boolean() {
    input = true;
    console.log(typeof (input));
}

function number() {
    input = 24;
    console.log(typeof (input));
}

function string() {
    input = "This is a string";
    console.log(typeof (input));

}

function undifined() {
    let x;
    console.log(x);
}

object();
boolean();
number();
string();
undifined();