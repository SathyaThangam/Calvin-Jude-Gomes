$('document').ready(function () {

    let mainContent;
    let count = 0;

    // UI SETTINGS

    $('#roomSelector').hide();
    $('#datePicker1').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#datePicker2').datepicker({
        uiLibrary: 'bootstrap4'
    });

    $('#guest').on('click', function (e) {
        $('#roomSelector').toggle();
    });

    $('#increment').on('click', function () {
        var temp = parseInt($('#roomCount').html());
        temp++;
        if (temp > 0) {
            $('#decrement').removeAttr('disabled');
        }
        $('#roomCount').html(temp);

        var updateRoom = $('#guest').val();
        var up = updateRoom.split(" ");
        up[3] = temp;
        var finalRoom = up.join(" ");
        $('#guest').val(finalRoom);
    })
    
    $('#decrement').on('click', function () {
        var temp = parseInt($('#roomCount').html());
        --temp;
        if (temp < 2) {
            $('#decrement').attr('disabled', 'disabled');
        }
        $('#roomCount').html(temp);

        var updateRoom = $('#guest').val();
        var up = updateRoom.split(" ");
        up[3] = temp;
        var finalRoom = up.join(" ");
        $('#guest').val(finalRoom);
    })

    $(document).on("click", ".dropdown-item", function () {
        var temp = $(this).html();
        var idid = $(this).attr("id");
        $('#dropdownMenuButton').val(temp);
        $('#dropdownMenuButton').attr("cityid", idid);
    });


    // MAIN FUNCTIONALITIES



    // SEARCH DROPDOWN

    $('#dropdownMenuButton').keyup(() => {
        let searchValue = $('#dropdownMenuButton').val();
        const searchQuery = `https://www.oyorooms.com/api/pwa/autocompletenew?query=${searchValue}&region=1&userId=ae061dfdacbf1939cbfe6344daa0091b&additionalFields=rating%2Csupply%2Ctrending%2Ctags%2Ccategory`;
        // console.log(searchQuery);

        fetch(searchQuery)
            .then((res) => res.json())
            .then((data) => {
                let output = ``;
                data.responseObject.slice(-5).forEach(item => {
                    output += `
                    <a class="dropdown-item" href="#" id="${item.city.name}">${item.displayName}</a>
                `;
                });
                $('.dropdown-menu').html(output);
            });
    })

    //LOAD HOTEL DATA

    $('#contentSearch').on('click', (e) => {

        e.preventDefault();

        let place = encodeURI($('#dropdownMenuButton').val());
        var temp = place.split(",").join("%252C%2520");
        console.log(temp);

        var city = $('#dropdownMenuButton').attr('cityid');
        console.log(city);

        var fromDate = new Date($('#datePicker1').val());
        fromDay = fromDate.getDate();
        if(fromDay<10) {
            var something = fromDay.toString();
            fromDay = '0' + something;
        }
        fromMonth = fromDate.getMonth() + 1;
        if(fromMonth<10) {
            var something = fromMonth.toString();
            fromMonth = '0' + something;
        }
        fromYear = fromDate.getFullYear();

        var toDate = new Date($('#datePicker2').val());
        toDay = toDate.getDate();
        if(toDay<10) {
            var something = toDay.toString();
            toDay = '0' + something;
        }
        toMonth = toDate.getMonth() + 1;
        if(toMonth<10) {
            var something = toMonth.toString();
            toMonth = '0' + something;
        }
        toYear = toDate.getFullYear();

        var updateRoom = $('#guest').val();
        var up = updateRoom.split(" ");
        guestNo = up[3];
        roomNo = up[0];

        const searchQuery = `https://www.oyorooms.com/api/pwa/getListingPage?url=%2Fsearch%3Flocation%3D${temp}%26city%3D${city}%26checkin%3D${fromDay}%252F${fromMonth}%252F${fromYear}%26checkout%3D${toDay}%252F${toMonth}%252F${toYear}%26roomConfig%255B%255D%3D1%26guests%3D${guestNo}%26rooms%3D${roomNo}&locale=en`;

        console.log(searchQuery);

        fetch(searchQuery)
            .then((res) => res.json())
            .then((data) => {
                mainContent = data;
                let output = ``;
                data.searchData.hotels.slice(-2).forEach((item) => {
                    count++;
                    console.log(count);
                    output += `
                        <div class="row cards">
                            <div class="col">
                                <img src="${item.best_image}" alt="" height="250px" width="400px">
                            </div>
                            <div class="col">
                                <h3>${item.name}</h3>
                                <h4>${item.short_address}</h4>
                                <h2>${item.pricing_info[0].average_price_single}</h2>
                                <p>per room per night</p>
                                <button class="btn btn-primary">Book Now</button>
                            </div>
                        </div>
                    `;
                });
                $('#landingPage').html(output);
            });
    })


    //LOAD DATA ON SCROLL

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() >= $(document).height()){

            let output = ``;
            mainContent.searchData.hotels.slice(count, count+2).forEach((item) => {
                console.log(count)
                count++;
                output += `
                    <div class="row cards">
                        <div class="col">
                            <img src="${item.best_image}" alt="" height="250px" width="400px">
                        </div>
                        <div class="col">
                            <h3>${item.name}</h3>
                            <h4>${item.short_address}</h4>
                            <h2>${item.pricing_info[0].average_price_single}</h2>
                            <p>per room per night</p>
                            <button class="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                `;
            });
            $('#landingPage').append(output);
        }
      });
});