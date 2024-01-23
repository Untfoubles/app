// document.addEventListener('DOMContentLoaded', function () {
//    function isElementInViewport(el) {
//        var rect = el.getBoundingClientRect();
//        return (
//            rect.top >= 0 &&
//            rect.left >= 0 &&
//            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//        );
//    }

//    function handleScroll() {
//        containers.forEach(function (container) {
//            if (isElementInViewport(container) && !container.classList.contains('active')) {
//                container.classList.add('active');
//            } else if (!isElementInViewport(container) && container.classList.contains('active')) {
//                container.classList.remove('active');
//            }
//        });

//        if (isElementInViewport(header) && !header.classList.contains('active')) {
//            header.classList.add('active');
//        } else if (!isElementInViewport(header) && header.classList.contains('active')) {
//            header.classList.remove('active');
//        }
//    }

//    var containers = document.querySelectorAll('.container');
//    var header = document.getElementById('header');

//    // Initial check when the page loads
//    handleScroll();

//    // Simulate scroll event once when the page loads
//    window.addEventListener('scroll', handleScroll);
//    handleScroll();
// });
