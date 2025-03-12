document.addEventListener("DOMContentLoaded", () => {
    const bookNowButton = document.querySelector("#booknow");
  
   
    bookNowButton.addEventListener("click", () => {
      const name = document.querySelector("#name").value.trim();
      const pickup = document.querySelector("#pickup").value.trim();
      const drop = document.querySelector("#drop").value.trim();
      const number = document.querySelector("#number").value.trim();
      const time = document.querySelector("#time").value.trim();
      const date =document.querySelector("#date").value.trim();
      const vehicle=document.querySelector("#vehi").value.trim();
    
      if (!name || !pickup || !drop || !number || !time || !date || !vehicle) {
        alert("Please fill in all fields.");
        return;
      }
  
      if (isNaN(number) || number.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

      
      let data = {
        name: name,
        pickup: pickup,
        drop: drop,
        number: number,
        Time:time,
        Date:date,
        vehicle:vehicle
      };
  
      
      console.log(data);
      alert("Your booking is confirmed!");
    });
  });

document.querySelector("#pay").addEventListener("click", function () {
 
    alert("Redirecting to the payment gateway...");

  
    window.location.href = "";
});




const rates = {
  "One Way Trip": 10,
  "Two Way Trip": 15,
  "Hourly Trip": 20,
  "Innovo": 100,
  "Indica": 30,
  "Normal Van": 40,
  "Coach Van": 60,
  "Coach Bus": 100,
  "Volvo Bus": 150,
  "A/C Van": 80
};

function calculateAmount() {
  const tripType = document.getElementById('trip').value;
  const vehicleType = document.getElementById('vehi').value;

  
  let totalAmount = 0;

  
  if (rates[tripType]) {
    totalAmount += rates[tripType];
  } else {
    alert("Please choose a trip type.");
    return;
  }


  if (rates[vehicleType]) {
    totalAmount += rates[vehicleType];
  } else {
    alert("Please choose a vehicle.");
    return;
  }


  alert("Total Amount: " + totalAmount + "IND");
}


document.querySelector("#booknow").addEventListener('click', function(event) {
  event.preventDefault();
  calculateAmount();
});

