const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const button = document.getElementById('btn');

form.addEventListener('submit',e=>{
    e.preventDefault();
    ans();
});
const ans =clearclass=>{
    if(message.value!=''){
        alert('form submitted');
        fullname.value='';
        email.value='';
        message.value='';
    }
    else{
        alert('first fill the form');
    }
}
