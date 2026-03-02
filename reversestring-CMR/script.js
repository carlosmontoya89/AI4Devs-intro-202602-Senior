document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userInput');
    const reverseBtn = document.getElementById('reverseBtn');
    const resultArea = document.getElementById('resultArea');
    const copyBtn = document.getElementById('copyBtn');

    // Function to reverse the string
    reverseBtn.addEventListener('click', () => {
        const text = input.value;
        
        if (text.trim() === "") {
            resultArea.textContent = "Please enter some text first!";
            copyBtn.classList.add('d-none');
            return;
        }

        // Logic: Split into array -> reverse array -> join back to string
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