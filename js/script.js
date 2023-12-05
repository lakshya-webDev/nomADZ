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

$(document).ready(function () {
    
    $('#timelineCarousel').on('slide.bs.carousel', function (event) {
      var index = $(event.relatedTarget).index();
      $('.timeline-indicator').removeClass('active');
      $('.timeline-indicator').eq(index).addClass('active');
  
      // Reset progress bar width
      $('.timeline-indicator-progress').width(0);
  
      // Animate progress bar
      $('.timeline-indicator.active .timeline-indicator-progress').animate({
        width: '100%'
      }, 5000); // Set the duration to match your slide interval
    });
  });
  