function prepareChai(type){
    if(type === "Masala Chai"){
        console.log("Adding spices to the chai");
        
    } else {
        console.log("preparing regular chai");
        
    }
}

prepareChai("Masala Chai")
prepareChai("Ginger Chai")


/* ek online store main, agar customer ka total bill amount 1000 se jayda hai, toh 10%
 discount milta hai, nhi toh full amount pay krna padta hai. */

 function calculateTotal(amount){
    // convert to number
    if (amount > 1000){
        return amount * 0.9
    } else {
        return amount
    }
 }

 let finalBill = calculateTotal(1200)
 console.log(finalBill);
 console.log(calculateTotal(1300));
 
 
 /* ek traffic light system mein, agar light "red" hai, toh "stop" print karo.
  Agar "yello" hai, toh "slow down" print karo. Agar "green" hai, toh "Go" print kro.*/
  
  function trafficLightSystem(color){

    switch (color) {
        case "Red":
            console.log("Stop");
            break;
        
        case "Yellow":
            console.log("Slow");
            break;
                
        case "Green":
            console.log("Go");
            break;
    
        default:
            console.log("Chalan kat do");
    }

  }

  trafficLightSystem("Yellow");
  trafficLightSystem("Red");
  trafficLightSystem("Green");
  trafficLightSystem("Brown");


  function checktruthyvalue(value) {
    if (value) {
        console.log("Truthy");
        
        
    }else{
        console.log("falsy");
        
    }
    
  }

  checktruthyvalue(1)
  checktruthyvalue(0)
  checktruthyvalue("Girdhar")
  checktruthyvalue("")
  checktruthyvalue([])
  checktruthyvalue([1, 2, 3])


  function login(username, password){
    if(username === 'admin' && (password === "1234" || loginIp == "127")){
        console.log("Login Successful");
        
    }else {
        console.log("Invalid Credentials");
        
    }
  }