/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

 /*!
 * Hux Blog v1.6.0 (http://startbootstrap.com)
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0 
 */

// Tooltip Init
// Unuse by Hux since V1.6: Titles now display by default so there is no need for tooltip
// $(function() {
//     $("[data-toggle='tooltip']").tooltip();
// });


// make all images responsive
/* 
 * Unuse by Hux
 * actually only Portfolio-Pages can't use it and only post-img need it.
 * so I modify the _layout/post and CSS to make post-img responsive!
 */
// $(function() {
//  $("img").addClass("img-responsive");
// });

// responsive tables
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('table').forEach(function(table) {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
        table.classList.add('table');
    });
});

// responsive embed videos
document.addEventListener('DOMContentLoaded', function() {
    // Handle YouTube videos
    document.querySelectorAll('iframe[src*="youtube.com"]').forEach(function(iframe) {
        const wrapper = document.createElement('div');
        wrapper.className = 'embed-responsive embed-responsive-16by9';
        iframe.parentNode.insertBefore(wrapper, iframe);
        wrapper.appendChild(iframe);
        iframe.classList.add('embed-responsive-item');
    });
    
    // Handle Vimeo videos
    document.querySelectorAll('iframe[src*="vimeo.com"]').forEach(function(iframe) {
        const wrapper = document.createElement('div');
        wrapper.className = 'embed-responsive embed-responsive-16by9';
        iframe.parentNode.insertBefore(wrapper, iframe);
        wrapper.appendChild(iframe);
        iframe.classList.add('embed-responsive-item');
    });
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height(),
            bannerHeight  = $('.intro-header .container').height();     
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop(),
                    $catalog = $('.side-catalog');

                //check if user is scrolling up by mouse or keyborad
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                        $('.navbar-custom').addClass('is-visible');
                    } else {
                        $('.navbar-custom').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.navbar-custom').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                }
                this.previousTop = currentTop;


                //adjust the appearance of side-catalog
                $catalog.show()
                if (currentTop > (bannerHeight + 41)) {
                    $catalog.addClass('fixed')
                } else {
                    $catalog.removeClass('fixed')
                }
            });
    }

    // Back to Top Button functionality
    const backTopButton = document.getElementById('back-top');
    if (backTopButton) {
        backTopButton.style.display = 'none';
        let isVisible = false;
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 250 && !isVisible) {
                isVisible = true;
                backTopButton.style.display = 'block';
                backTopButton.style.opacity = '0';
                backTopButton.animate([
                    { opacity: '0' },
                    { opacity: '1' }
                ], { duration: 400, fill: 'forwards' });
            } else if (window.pageYOffset <= 250 && isVisible) {
                isVisible = false;
                const fadeOut = backTopButton.animate([
                    { opacity: '1' },
                    { opacity: '0' }
                ], { 
                    duration: 400, 
                    fill: 'forwards' 
                });
                fadeOut.addEventListener('finish', function() {
                    backTopButton.style.display = 'none';
                });
            }
        });
        
        const backTopLink = backTopButton.querySelector('a');
        if (backTopLink) {
            backTopLink.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return false;
            });
        }
    }
});