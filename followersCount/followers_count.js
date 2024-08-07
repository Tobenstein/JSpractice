let count = 0; // Initialize count to 0
function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
  }
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Congrats, people know your business.");
       }   else if (count === 20) {
            alert("Your dirt all in these streets.");
        }
            else if (count === 30) {
                alert("oh my GOD GROW UP")
            }
    }
