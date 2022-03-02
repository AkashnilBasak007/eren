let student1 = {
    name : 'Tonmoy',
    age : 21,
    subject : 'JavaScript',
    hello : sayHello
}

let student2 ={
    name : 'Akash',
    age : 21,
    subject : 'JavaScript',
    hello : sayHello
}

function sayHello(){
    console.log(this.name + " says Hello." + "I am here to learn " + this.subject);
}

student1.hello();
student2.hello();