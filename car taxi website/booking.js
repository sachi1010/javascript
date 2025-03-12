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

  
    window.location.href = "https://www.paymentgateway.com";
});
