
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});



// document.addEventListener("DOMContentLoaded", () => {
//     const fadeInElements = document.querySelectorAll(".fade-in");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible");
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, { threshold: 0.1 });

//     fadeInElements.forEach(element => observer.observe(element));
// });
