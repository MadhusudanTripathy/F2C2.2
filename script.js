const users=[{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}]

let select_button = document.getElementById("select-profession");
let filter_button = document.getElementById("filter");
let add_user_button = document.getElementById("add-user");

function updateUserListDOM(arr){
    return arr.forEach((e)=>{
        let div_card=`
        <div class='user-card'>
        <p>${e.id}</p>
        <p>Name: ${e.name}</p>
        <p>Profession: ${e.profession}</p>
        <p>Age: ${e.age}</p>
        <div>
        `
        document.getElementById('users-list').innerHTML+=div_card
    });
}

updateUserListDOM(users)

function filterByProfession(){
    var value = select_button.value;
    console.log(value);
    console.log(users);
    document.getElementById('users-list').innerHTML='';
    updateUserListDOM(users.filter(
        (e)=>(value==="")?true:e.profession.toLowerCase()===value.toLowerCase()
        ))
}
    
function addUser(){
    let id = users.length+1;
    let name = document.getElementById('name').value;
    let profession = document.getElementById('profession').value;
    let age = document.getElementById('age').value;
    
    let new_user = {id,name,profession,age};
    
    let select = document.getElementById("select-profession");
    let option = document.createElement("option");
    
    //add user and update list
    users.push(new_user);
    document.getElementById('users-list').innerHTML='';
    updateUserListDOM(users);
    
    //add option in select
    option.text = profession;
    select.add(option);
}
