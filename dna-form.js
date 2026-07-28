// DNA Seed Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const dnaInput = document.getElementById('dnaInput');
    const nameInput = document.getElementById('nftNameInput');
    const generateBtn = document.getElementById('generateDnaNftBtn');
    const resultDiv = document.getElementById('dnaResult');
    const resultMessage = document.getElementById('dnaResultMessage');
    const resultPreview = document.getElementById('dnaResultPreview');
    
    if (!generateBtn) return;
    
    generateBtn.addEventListener('click', async function() {
        const dnaSeed = dnaInput.value.trim();
        if (!dnaSeed) {
            alert('Please enter a DNA seed string.');
            dnaInput.focus();
            return;
        }
        
        // Disable button during generation
        generateBtn.disabled = true;
        generateBtn.textContent = '⏳ Generating...';
        resultDiv.style.display = 'none';
        
        try {
            const response = await fetch('http://localhost:5000/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    dna_seed: dnaSeed,
                    name: nameInput.value.trim() || undefined
                })
            });
            
            const data = await response.json();
            
            if (data.status === 'success') {
                // Show success
                resultMessage.textContent = data.message;
                resultDiv.style.display = 'block';
                
                // Embed preview if available
                if (data.preview_url) {
                    resultPreview.innerHTML = `
                        <iframe src="${data.preview_url}" title="NFT Preview"></iframe>
                        <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #8395a7;">
                            Coherence: ${data.coherence} | 
                            <a href="${data.preview_url}" target="_blank">Open full preview</a>
                        </p>
                    `;
                } else {
                    resultPreview.innerHTML = `<p>✅ NFT generated! Check the portfolio grid.</p>`;
                }
                
                // Refresh the grid after a short delay
                setTimeout(() => {
                    location.reload();
                }, 3000);
                
            } else {
                resultMessage.textContent = `❌ Error: ${data.message || 'Unknown error'}`;
                resultDiv.style.display = 'block';
                resultPreview.innerHTML = '';
            }
        } catch (error) {
            resultMessage.textContent = `❌ Connection error: ${error.message}. Make sure the server is running.`;
            resultDiv.style.display = 'block';
            resultPreview.innerHTML = '';
        } finally {
            generateBtn.disabled = false;
            generateBtn.textContent = '✨ Generate My Egg';
        }
    });
    
    // Allow Enter key to submit
    dnaInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
});
EOF<script src="dna-form.js"></script>
