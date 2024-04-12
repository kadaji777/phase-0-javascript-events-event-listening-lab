function addingEventListener() {
    // Select the input#button element
    const input = document.getElementById('button');
  
    // Define a function to be executed when the event occurs
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add an event listener for the click event, passing the function as the callback
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to set up the event listener
  addingEventListener();
  