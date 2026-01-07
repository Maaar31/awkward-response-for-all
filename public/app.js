const responseText = document.getElementById('responseText');
const categoryDisplay = document.getElementById('categoryDisplay');
const loader = document.getElementById('loader');
const getAwkwardBtn = document.getElementById('getAwkwardBtn');
const catBtns = document.querySelectorAll('.cat-btn');
const copyBtn = document.getElementById('copyBtn');

let currentCategory = 'all';

// Category Buttons Logic
catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        catBtns.forEach(b => b.classList.remove('active'));
        // Add to clicked
        btn.classList.add('active');
        // Update state
        currentCategory = btn.dataset.cat;
    });
});

// Fetch Awkwardness
async function fetchResponse() {
    // UI Loading State
    responseText.classList.add('hidden');
    loader.classList.remove('hidden');
    getAwkwardBtn.disabled = true;
    copyBtn.classList.add('hidden');

    // Simulate slight delay for dramatic effect
    await new Promise(r => setTimeout(r, 400));

    try {
        let url = '/random';
        if (currentCategory !== 'all') {
            url += `/${currentCategory}`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error('Awkward error occurred');

        const data = await res.json();

        // UI Update
        loader.classList.add('hidden');
        responseText.classList.remove('hidden');

        // Typewriterish reveal logic (simple replacement for now)
        responseText.textContent = data.text;

        categoryDisplay.textContent = `CAT: ${data.category.toUpperCase()}`;
        categoryDisplay.classList.remove('hidden');
        copyBtn.classList.remove('hidden');

    } catch (err) {
        responseText.textContent = "Something went wrong. Now it's really awkward.";
        loader.classList.add('hidden');
        responseText.classList.remove('hidden');
    } finally {
        getAwkwardBtn.disabled = false;
        // Re-focus button so enter key works
        getAwkwardBtn.focus();
    }
}

// Event Listeners
getAwkwardBtn.addEventListener('click', fetchResponse);

// Copy to Clipboard
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(responseText.textContent);

    // Quick visual feedback
    const originalIcon = copyBtn.innerHTML;
    copyBtn.innerHTML = `<span>✓</span>`;
    setTimeout(() => {
        copyBtn.innerHTML = originalIcon;
    }, 1000);
});

// Initial load? Nah, let's wait for user interaction. It's more awkward to stare at a blank box.
