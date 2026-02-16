// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offsets for the fixed header
                behavior: 'smooth'
            });
        }
    });
});

// 2. Simple Console Message for Portfolio Verification
console.log("Somil Badkul's Portfolio Loaded!");
console.log("Data Analyst Skills: Python, SQL, Power BI initialized.");