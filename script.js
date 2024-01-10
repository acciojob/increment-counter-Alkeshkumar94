
            // Get the counter element and the increment button
            const counterElement = document.getElementById('counter');
            const incrementButton = document.getElementById('incrementBtn');

            // Initialize counter value
            let counterValue = 1;

            // Function to update the counter and show an alert
            function incrementCounter() {
                // Display the current counter value in an alert
                alert('un-incremented value: ' + counterValue);

                // Increment the counter value
                counterValue++;

                // Update the counter element's text content
                counterElement.textContent = counterValue;
            }

            // Attach the incrementCounter function to the button click event
            incrementButton.addEventListener('click', incrementCounter);