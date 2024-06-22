$(document).ready(function() {
    $('.btn-img-1').on('click', function(event) {
        // Toggle the display of the menu
        $(this).next('.menu').toggleClass('show');

        // Close other dropdowns
        $('.dropdown-1 .menu').not($(this).next('.menu')).removeClass('show');

        event.stopPropagation();
    });

    // Close the dropdown if the user clicks outside of it
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown-1').length) {
            $('.dropdown-1 .menu').removeClass('show');
        }
    });
});

$('#btn-aside').click(function () {
    $('.aside-content').fadeToggle();
})



    




//CAMBIO DE THEMA

/*
document.addEventListener('DOMContentLoaded', function () {
    const btnTheme = document.getElementById('btn-theme');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add('light');
    }
    updateIcons();

    btnTheme.addEventListener('click', function () {
        if (body.classList.contains('light')) {
            body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
        }
        updateIcons();
    });

    function updateIcons() {
        if (body.classList.contains('dark')) {
            document.querySelector('.fa-moon-stars').style.display = 'inline';
            document.querySelector('.fa-sun').style.display = 'none';
        } else {
            document.querySelector('.fa-moon-stars').style.display = 'none';
            document.querySelector('.fa-sun').style.display = 'inline';
        }
    }
});*/

$(document).ready(function () {
    const $btnTheme = $('#btn-theme');
    const $body = $('body');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        $body.addClass(savedTheme);
    } else {
        $body.addClass('light');
    }
    updateIcons();

    $btnTheme.on('click', function () {
        if ($body.hasClass('light')) {
            $body.removeClass('light').addClass('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            $body.removeClass('dark').addClass('light');
            localStorage.setItem('theme', 'light');
        }
        updateIcons();
    });

    function updateIcons() {
        if ($body.hasClass('dark')) {
            $('.fa-moon-stars').hide();
            $('.fa-sun').show();
            
        } else {
            $('.fa-moon-stars').show();
            $('.fa-sun').hide();
        }
    }
});