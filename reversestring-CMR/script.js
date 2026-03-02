document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userInput');
    const reverseBtn = document.getElementById('reverseBtn');
    const resultArea = document.getElementById('resultArea');
    const copyBtn = document.getElementById('copyBtn');

    // Listen for typing to count characters and show/hide the button
    input.addEventListener('input', () => {
        // We use trim() to ignore leading/trailing spaces in the count
        const text = input.value.trim(); 
        
        // Check if the character count is greater than 3
        if (text.length > 3) {
            reverseBtn.classList.remove('d-none');
        } else {
            // Hide the button if 3 or fewer characters
            reverseBtn.classList.add('d-none');
            
            // Clear the results and hide the copy button if the user deletes characters
            resultArea.textContent = "";
            copyBtn.classList.add('d-none');
        }
    });

    // Function to reverse the string
    reverseBtn.addEventListener('click', () => {
        const text = input.value;
        
        // Split into array -> reverse array -> join back to string
        const reversed = text.split('').reverse().join('');
        
        // Display result
        resultArea.textContent = reversed;
        
        // Show copy button
        copyBtn.classList.remove('d-none');
    });

    // Function to copy result to clipboard
    copyBtn.addEventListener('click', () => {
        const textToCopy = resultArea.textContent;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = "Copied! ✅";
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});