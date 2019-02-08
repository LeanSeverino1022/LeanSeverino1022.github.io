
{
    const data = [
        {
            title: "work 1",
            url: "https://css-tricks.com/video-screencasts/",
            img: "../images/github.png"
        },
        {
            title: "work 2",
            url: "https://css-tricks.com/video-screencasts/",
            img: "../images/github.png"
        }
    ]
   
    function createGallery() {

        let works = data.map(function (item) {

            // create a div with an img inside...<div><anchor><img></anchor></div>
            let div = document.createElement("div");
            $(div).attr({ class: 'col-xs-12 col-sm-6 col-md-4 github-card' });

            let anchor = document.createElement("a");
            $(anchor).attr({ href: 'https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_image' });

            let img = document.createElement("img");
            $(img).attr({ class: 'img-responsive' , alt:'github-ss', src: 'icons/git.svg'});

            // return card. 1 card = 1 project
            return $(div).append($(anchor).append(img)) 

    })

    $(".portfolio_grid > .row").append(works);
}



}