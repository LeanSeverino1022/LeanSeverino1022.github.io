if(typeof appNamespace === "undefined") {
    window.appNamespace = {};
}


{
    let data = [
        {
            title: 'Friend Finder',
            description: 'some text here',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/people-finder-react.png',
            skills: ['react', 'html','css','javascript']
        },
        {
            title: 'Drag-to-scroll library',
            description: 'Tiny Library to easily enable click and drag scrolling to any content. Scroll just like how you do it on a tablet or smartphone',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/dragtoscroll.png'
        },
        {
            title: 'Sink-em Game',
            description: 'Game created with ImpactJS, a JavaScript Game Engine ',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/sinkem-game.png'
        },
        {
            title: 'Live Product Customizer',
            description: 'This feature allows customers to customize a product with a live preview. Used in multiple projects(e.g., living-room, clothing, and kitchen).',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/custom-clothes.png' 
        },
        {
            title: 'JavaScript Algorithms and Data Structures Certification',
            // description: 'Certificate curriculum should take approximately 300 hours to complete and includes 5 required projects.',
            description: '',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/certificate-webdesign.png' 
        },
        {
            title: 'Responsive Web Design Certification',
            description: '',
            url: 'https://css-tricks.com/video-screencasts/',
            img: 'images/gallery/certificate-algo.png' 
        }
       
    ];
   
    window.appNamespace.renderWorks = function() {
        const works = data.map(function(item) {
    
            const $outerDiv = $('<div>').attr({
                class: 'col-xs-12 col-sm-6 col-md-4'
            });
    
            const $card = $('<div>').attr({
                class: 'github-card shadow'
            });
    
            const $cardImage = $('<div>').attr({ class: 'card-image'}).css('background-image', `url(${item.img})`);
            // const $img = $('<img>').attr({
            //     alt: 'github-ss',
            //     src: item.img
            // });
    
            const $cardContent = $('<div>').attr({ class: 'card-content' });
            const $contentTitle = $('<span>').attr({ class: 'card-title' }).text(item.title);
            const $cardDesc = $('<p>').text(item.description); 
    
            console.log(item.description);
    
            const $cardSkills = $('<div class="text-left card-action"><a class="btn icon-circle"><img src="icons/html.svg" alt="HTML5"></a><a class="btn icon-circle"><img src="icons/css.svg"></a><a class="btn icon-circle"><img src="icons/javascript.svg"></a><a class="btn icon-circle"><img src="icons/react.svg"></a><a class="btn icon-circle"><img src="icons/css.svg"></a></div>');
            // text(item.description);
    
            $card.append($cardImage);
            $card.append($cardContent.append($contentTitle,$cardDesc));            
    
            // return card. 1 card = 1 project
            return $outerDiv.append($card);   
        });
    
        $('.portfolio_grid.row').append(works);
    }
}