

function validateInput(){
   
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;
    let validate = true;

    if(userName ==="" || email ==="" || phone==="" || date==="" || time==="" || people==="")
    {
        alert("All boxes are required!");
        validate = false;
    }else if(!isValideEmail(email))
    {
        alert("Wrong email format");
        validate = false;
    }else if(!isValideDate(date))
    {
        alert("Invalid date selected!");
        validate = false;
    }
    console.log(time);


    if(validate === true)
    {
        console.log(userName, email, phone, date, time, people);
    }
}

function isValideDate(date){

    const currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth()+1;
    var year = currentDate.getFullYear();

    const dateAsArray = date.split("-");

    if(day<10) 
    {
        day='0'+day;
    } 

    if(month<10) 
    {
        month='0'+month;
    } 

    if(Number(dateAsArray[0]) < Number(year) || (Number(dateAsArray[0]) === Number(year) && Number(dateAsArray[1])  < Number(month)) || (Number(dateAsArray[0]) === Number(year) && Number(dateAsArray[1])  === Number(month) && Number(dateAsArray[2]) < Number(day)))
    {
        return false;
    }else
     {
         return true;
     }
}

function isValideEmail(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) 
  {
      return true;
  } else
    {
         return false;
    }
}




