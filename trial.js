// document.getElementById('showAnimation').addEventListener('click', function() {
//     const giftBox = document.getElementById('giftBox');
//     const cake = document.getElementById('cake');

//     // Reset styles to initial state
//     giftBox.style.display = 'none';
//     cake.style.display = 'none';

//     // Start animation
//     giftBox.style.display = 'block';
//     setTimeout(() => {
//         giftBox.style.display = 'none';
//         cake.style.display = 'block';
//     }, 2000); // Adjust time as needed
// });

    function checkScreenWidth() {
        if (window.innerWidth < 1120) { // Adjust the pixel value as needed
            window.location.href = 'index.html';
        }
    }
    
    // Check screen width on window resize
    window.addEventListener('resize', checkScreenWidth);
    
    // Initial check on page load
    document.addEventListener('DOMContentLoaded', checkScreenWidth);
