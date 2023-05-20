const users=[{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}]

let select_button = document.getElementById("select-profession");
let filter_button = document.getElementById("filter");
let add_user_button = document.getElementById("add-user");

function filterByProfession(){
    var value = select_button.value.toLowerCase();
    console.log(value);
    document.getElementById('users-list').innerHTML='';
    users.filter(
        (e)=>(value==="")?true:e.profession===value
    ).forEach((e)=>{
        let div_card=`
        <div>
            <p>${e.name}</p>
            <p>${e.profession}</p>
            <p>${e.age}</p>
        <div>
        `
        document.getElementById('users-list').innerHTML+=div_card
    });
}
filterByProfession()

function addUser(){
    let id = users.length+1;
    let name = document.getElementById('name').value;
    let profession = document.getElementById('profession').value;
    let age = document.getElementById('age').value;
    let new_user = {id,name,profession,age};
    users.push(new_user);
    let div_card=`
        <div>
            <p>${name}</p>
            <p>${profession}</p>
            <p>${age}</p>
        <div>
        `
    document.getElementById('users-list').innerHTML+=div_card

    let select = document.getElementById("select-profession");
    var option = document.createElement("option");
    option.text = profession;
    select.add(option);
}
