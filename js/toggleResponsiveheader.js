const Logo_Muzzer = document.querySelector('.muzzerlogoresponsive');
const Responsive_Header = document.querySelector('.responsiveheader');

Logo_Muzzer.addEventListener('click', function() {
    const isResponsiveHeaderVisible = getComputedStyle(Responsive_Header).display !== 'none';

    if (isResponsiveHeaderVisible){
        Responsive_Header.classList.remove('responsiveheader-visible')
    }

    else {
        Responsive_Header.classList.add('responsiveheader-visible')
    }
})