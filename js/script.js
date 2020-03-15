$(document).ready(function () {

    // video controls
    var vid = document.getElementById("video");

    $('#play').click(function () {
        $(".section1-left").hide();
        $(".section1-right").css('width', '100%');
        $(".video-holder").css('width', '100%');
        if ($(window).width() > 1024) {
            $('#video').width('100%');
        }
        $(".play").hide();
        $(".stop").css('display', 'flex');
        vid.play();
    })

    $('#stop').click(function () {
        $(".section1-left").show();

        if ($(window).width() > 1024) {

            $(".video-holder").css('width', '500px');
            $(".section1-right").css('width', '50%');
        } else {
            $(".video-holder").css('width', '100%');
        }

        $('#video').width('1200');
        $(".stop").hide();
        $(".play").css('display', 'flex');
        vid.pause();
        vid.currentTime = 0;
    })

    // scroll trigger
    var waypoint = new Waypoint({
        element: $('#one'),
        handler: function (direction) {
            var urlup = $(this.element).attr('img-url-down');
            var urldown = $(this.element).attr('img-url-up');
            if (direction == 'down') {
                $(".img-holder img").attr('src', 'assets/images/' + urldown);
                $('.item').removeClass('active');
                $('#sec2').addClass('active')
            }
            else {
                $(".img-holder img").attr('src', 'assets/images/' + urlup);
                $('.item').removeClass('active');
                $('#sec1').addClass('active')
            }

        }, offset: 150
    })

    var waypoint = new Waypoint({
        element: $('#two'),
        handler: function (direction) {
            var urlup = $(this.element).attr('img-url-down');
            var urldown = $(this.element).attr('img-url-up');
            if (direction == 'down') {
                $(".img-holder img").attr('src', 'assets/images/' + urldown);
                $('.item').removeClass('active');
                $('#sec3').addClass('active')
            }
            else {
                $(".img-holder img").attr('src', 'assets/images/' + urlup);
                $('.item').removeClass('active');
                $('#sec2').addClass('active')
            }

        }, offset: 150
    })

    // pie charts 
    var chartList = [2, 4, 6, 10, 15, 24, 30];

    for (let i = 0; i < chartList.length; i++) {
        $('.chart' + chartList[i]).easyPieChart({
            barColor: '#9DC0D6',
            lineWidth: "10",
            size: 154,
            animate: chartList[i] * 1000,
            scaleColor: 'transparent'
        });
        $('#chart' + chartList[i]).data('easyPieChart');
    }

    $('.chart').data('easyPieChart');

    var activeTab = 'cloud-s';
    var chartList = [
        {
            one: 100,
            two: 100,
            three: 100
        },
        {
            one: 100,
            two: 100,
            three: 100
        },
        {
            one: 100,
            two: 100,
            three: 100
        }
    ];

    $(".linkbtn-holder").click(function () {
        $('.linkbtn-holder').removeClass('active');
        $(this).addClass('active');
        $("#" + activeTab).hide();
        var id = $(this).attr('id');
        var orderNum = $(this).attr('order');
        for (var property in chartList[orderNum]) {
            $('#' + id + property).data('easyPieChart').update(0);
            $('#' + id + property).data('easyPieChart').update(chartList[0][property]);
        }
        activeTab = id + "-s"
        if ($(window).width() > 1024) {
            $("#" + activeTab).css('display', 'flex');
        } else {
            $("#" + activeTab).css('display', 'block');
        }

        if (id == 'movie') {
            $("#cloud").addClass('active-last');
        }
        else {
            $("#cloud").removeClass('active-last');
        }
    })

    // switch articles
    var activeslide6 = '1';
    $(".nobtn-holder").click(function () {
        $('.nobtn-holder').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('id');
        var noselect = this.dataset.noselect;
        if (activeslide6 != noselect) {
            if (id == 'nav-three') {
                $("#nav-one").addClass('active-last');
            }
            else {
                $("#nav-one").removeClass('active-last');
            }
            $.when($('.section6-item').fadeOut(300)).done(function () {
                $('[data-no="' + noselect + '"]').fadeIn(300)
            });
            activeslide6 = noselect;
        }
    })

    // side menu
    $('.learn').click(function () {
        $('.side-screen-holder').show();
        $('.side-box').addClass('open');
        $('.screen').removeClass('open');
        $('.screen-first').addClass('open');
    })

    $('.close').click(function () {
        $('.side-box').removeClass('open');
        $('.side-screen-holder').delay(400).fadeOut(100);
    })

    $('.screen-changer').click(function () {
        $('.screen').removeClass('open');
        $('.screen-' + this.dataset.next).addClass('open');
    })

    $('.page span').click(function () {
        $('.screen').removeClass('open');
        $('.screen-first').addClass('open');
    })

    // open/close info box
    $('.expand').click(function () {
        $(".info-content").toggleClass('open');
        $('.expand').toggleClass('open');
    })

    // in case window resize
    $(window).resize(function () {
        $(".section1-left").show();
        if ($(this).width() > 1024) {
            $(".video-holder").css('width', '500px');
            $("#" + activeTab).css('display', 'flex');
            $('.section6-item').hide();
            $('[data-no="' + activeslide6 + '"]').show();
        }
        else if ($(this).width() <= 1024) {
            $(".section1-right").css('width', '100%');
            $(".video-holder").css('width', '100%');
            $("#" + activeTab).css('display', 'block');
            $('.section6-item').css('display', 'inline-block');
        }
        $('#video').width('1200');
        $(".stop").hide();
        $(".play").css('display', 'flex');
        vid.pause();
        vid.currentTime = 0;
    });

});