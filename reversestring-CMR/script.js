document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userInput');
    const resultArea = document.getElementById('resultArea');
    const copyBtn = document.getElementById('copyBtn');

    // Listen for typing to reverse the string in real-time
    input.addEventListener('input', () => {
        const text = input.value;
        // We still use trim() to ensure the user types actual characters, not just spaces
        const trimmedText = text.trim(); 
        
        // Check if the actual character count is greater than 3
        if (trimmedText.length > 3) {
            // Reverse the text instantly
            const reversed = text.split('').reverse().join('');
            
            // Display result
            resultArea.textContent = reversed;
            
            // Show copy button
            copyBtn.classList.remove('d-none');
        } else {
            // Clear the results and hide the copy button if 3 or fewer characters
            resultArea.textContent = "";
            copyBtn.classList.add('d-none');
        }
    });

    // Function to copy result to clipboard
    copyBtn.addEventListener('click', () => {
        const textToCopy = resultArea.textContent;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = "Copied! ✅";
            
            // Revert the button text after 2 seconds
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});