
// var x = document.getElementById('Login');
// var y = document.getElementById('Register'); 
// var z = document.getElementById('btn');
// var user = document.getElementById('user')
// function Register(){
//     x.style.left = "-400px";
//     y.style.left = "50px";
//     z.style.left="110px"
    
// }
// function Login(){
//     x.style.left = "50px";
//     y.style.left = "450px";
//     z.style.left="0px"
// } 
 let save = document.querySelector('#save');
 let firstname = document.querySelector("#fName")
 let lastname = document.querySelector("#sName")
 let age  = document.querySelector("#age")
 let favouriteClub = document.querySelector("#fClub") 
 let CurrentLevel  = document.querySelector("#cLevel")  


   let UserInfo= []
   save.addEventListener('click', (event)=> {
     event.preventDefault()
      const UserData = { firstname: firstname.value,
    lastname : lastname.value,
    age : age.value,
    favouriteClub : favouriteClub.value,
    CurrentLevel : CurrentLevel.value };

  UserInfo.push(UserData)
   document.querySelector('#save').value= ""
  document.querySelector("#fName").value= ""
  document.querySelector("#sName").value= ""
   document.querySelector("#age").value= ""
  document.querySelector("#fClub").value= "" 
  document.querySelector("#cLevel").value= ""

  document.getElementById("table").innerHTML= UserInfo.map((UserData)=>{
 return(
  `<tr>
  <td>${UserData.firstname}</td>
  <td>${UserData.lastname}</td>
  <td>${UserData.age} </td>
  <td>${UserData.favouriteClub}</td>
 <td>${UserData.CurrentLevel}</td>
 <button onClick="remove(${UserData.id})">delete</button>
 </tr>`
 )
   
      })
})
 
   

 

