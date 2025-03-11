
document.addEventListener("DOMContentLoaded", () => {
    const bookNowButton = document.querySelector("#booknow");
  
   
    bookNowButton.addEventListener("click", () => {
      const name = document.querySelector(".name").value.trim();
      const pickup = document.querySelector(".pickup").value.trim();
      const drop = document.querySelector(".drop").value.trim();
      const number = document.querySelector(".number").value.trim();
  
    
      if (!name || !pickup || !drop || !number) {
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
      };
  
      
      console.log(data);
      alert("Your booking is confirmed!");
    });
  });
  

function gotopage(){
    window.location.href='booking .html';
}
