// Palindrome Checker
const palindromeInput = document.getElementById('palindromeInput');
const checkPalindromeButton = document.getElementById('checkPalindrome');
const palindromeResult = document.getElementById('palindromeResult');

checkPalindromeButton.addEventListener('click', () => {
    const text = palindromeInput.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isPalindrome = text === text.split('').reverse().join('');
    palindromeResult.textContent = isPalindrome ? 'It\'s a palindrome!' : 'It\'s not a palindrome.';
});

// Navigation
const homeLink = document.getElementById('homeLink');
const aboutLink = document.getElementById('aboutLink');
const contactLink = document.getElementById('contactLink');

const homeSection = document.getElementById('homeSection');
const aboutSection = document.getElementById('aboutSection');
const contactSection = document.getElementById('contactSection');

function showSection(sectionToShow) {
    [homeSection, aboutSection, contactSection].forEach(section => {
        section.classList.add('hidden');
    });
    sectionToShow.classList.remove('hidden');
}

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(homeSection);
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(aboutSection);
});

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(contactSection);
});
