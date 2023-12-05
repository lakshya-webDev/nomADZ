const textArray = [
    "At nomADZ Digital, India's premier social media marketing agency, we're experts in making your brand shine online.",
    "Our mastery in audience segmentation, social advertising, and staying ahead of social algorithm updates is your gateway to success.",
    // Add more texts as needed
];

let currentIndex = 0;

function changeText() {
    const heroDescription = document.querySelector('.hero-description p');
    heroDescription.classList.add('hidden');
    setTimeout(() => {
        heroDescription.textContent = textArray[currentIndex];
        heroDescription.classList.remove('hidden');
        currentIndex = (currentIndex + 1) % textArray.length;
    }, 500); // Set the delay to match the transition duration
}

setInterval(changeText, 5000);
