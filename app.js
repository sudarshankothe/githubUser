fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {

        console.log(data[1]);


        //user 1 js start here
        document.getElementById("userimg1").setAttribute("src", data[1].avatar_url);
        document.getElementById("Username1").innerText = data[1].login;
        document.getElementById("follow1").setAttribute("href", data[1].html_url);
        document.getElementById("following1").setAttribute("href", data[1].html_url);
        document.getElementById("visit-profile").setAttribute("href", data[1].html_url);
        //user 1 js end here

        //user 2 js start here
        document.getElementById("userimg2").setAttribute("src", data[2].avatar_url);
        document.getElementById("Username2").innerText = data[2].login;
        document.getElementById("follow2").setAttribute("href", data[2].html_url);
        document.getElementById("following2").setAttribute("href", data[2].html_url);
        document.getElementById("visit-profile2").setAttribute("href", data[2].html_url);
        //user 2 js end here

        //user 3 js start here
        document.getElementById("userimg3").setAttribute("src", data[3].avatar_url);
        document.getElementById("Username3").innerText = data[3].login;
        document.getElementById("follow3").setAttribute("href", data[3].html_url);
        document.getElementById("following3").setAttribute("href", data[3].html_url);
        document.getElementById("visit-profile3").setAttribute("href", data[3].html_url);
        //user 3 js end here


        //user 4 js start here
        document.getElementById("userimg4").setAttribute("src", data[4].avatar_url);
        document.getElementById("Username4").innerText = data[4].login;
        document.getElementById("follow4").setAttribute("href", data[4].html_url);
        document.getElementById("following4").setAttribute("href", data[4].html_url);
        document.getElementById("visit-profile4").setAttribute("href", data[4].html_url);
        //user 4 js end here

        //user 5 js start here
        document.getElementById("userimg5").setAttribute("src", data[5].avatar_url);
        document.getElementById("Username5").innerText = data[5].login;
        document.getElementById("follow5").setAttribute("href", data[5].html_url);
        document.getElementById("following5").setAttribute("href", data[5].html_url);
        document.getElementById("visit-profile5").setAttribute("href", data[5].html_url);
        //user 5 js end here

        //user 6 js start here
        document.getElementById("userimg6").setAttribute("src", data[6].avatar_url);
        document.getElementById("Username6").innerText = data[6].login;
        document.getElementById("follow6").setAttribute("href", data[6].html_url);
        document.getElementById("following6").setAttribute("href", data[6].html_url);
        document.getElementById("visit-profile6").setAttribute("href", data[6].html_url);
        //user 6 js end here

        //user 7 js start here
        document.getElementById("userimg7").setAttribute("src", data[7].avatar_url);
        document.getElementById("Username7").innerText = data[7].login;
        document.getElementById("follow7").setAttribute("href", data[7].html_url);
        document.getElementById("following7").setAttribute("href", data[7].html_url);
        document.getElementById("visit-profile7").setAttribute("href", data[7].html_url);
        //user 7 js end here


        //user 8 js start here
        document.getElementById("userimg8").setAttribute("src", data[8].avatar_url);
        document.getElementById("Username8").innerText = data[8].login;
        document.getElementById("follow8").setAttribute("href", data[8].html_url);
        document.getElementById("following8").setAttribute("href", data[8].html_url);
        document.getElementById("visit-profile8").setAttribute("href", data[8].html_url);
        //user 8 js end here


        //user 9 js start here
        document.getElementById("userimg9").setAttribute("src", data[9].avatar_url);
        document.getElementById("Username9").innerText = data[9].login;
        document.getElementById("follow9").setAttribute("href", data[9].html_url);
        document.getElementById("following9").setAttribute("href", data[9].html_url);
        document.getElementById("visit-profile9").setAttribute("href", data[9].html_url);
        //user 9 js end here

        //user 10 js start here
        document.getElementById("userimg10").setAttribute("src", data[10].avatar_url);
        document.getElementById("Username10").innerText = data[10].login;
        document.getElementById("follow10").setAttribute("href", data[10].html_url);
        document.getElementById("following10").setAttribute("href", data[10].html_url);
        document.getElementById("visit-profile10").setAttribute("href", data[10].html_url);
        //user 10 js end here


        //user 11 js start here
        document.getElementById("userimg11").setAttribute("src", data[11].avatar_url);
        document.getElementById("Username11").innerText = data[11].login;
        document.getElementById("follow11").setAttribute("href", data[11].html_url);
        document.getElementById("following11").setAttribute("href", data[11].html_url);
        document.getElementById("visit-profile11").setAttribute("href", data[11].html_url);
        //user 11 js end here


        //user 12 js start here
        document.getElementById("userimg12").setAttribute("src", data[12].avatar_url);
        document.getElementById("Username12").innerText = data[12].login;
        document.getElementById("follow12").setAttribute("href", data[12].html_url);
        document.getElementById("following12").setAttribute("href", data[12].html_url);
        document.getElementById("visit-profile12").setAttribute("href", data[12].html_url);
        //user 12 js end here



    })






