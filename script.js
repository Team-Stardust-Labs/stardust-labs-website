
var images = new Array();
var x = 0;
var forward = true;

(function(window, document, undefined) {

    // code that should be taken care of right away
  
    window.onload = init;
  
    

    function init(){
        console.log("script loaded");

        // insert flask image animation
        const flaskimagecontainer = document.getElementById("flask-image");
        flaskimagecontainer.innerHTML = '<img id="flask-image-frames" src="./res/fluidflask/0014.png" draggable="false">';

        for (let i = 1; i < 30; i++)
        {
            images.push("./res/fluidflask/00" + String(i).padStart(2, "0") + ".png")
        }

        console.log(images)
        
        

        

        //setInterval("Animate()", 100);
        


        // insert background video here
        const background_video_container = document.getElementById("background-video");
        background_video_container.innerHTML = '<source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-blue-tones-underwater-229-large.mp4" type="video/mp4">'

        var last_opened = null;
        var last_cat_active = null;

        function add_category(category = "team") {
            var cat = document.getElementById("cat-" + category);

            

            cat.onclick = function(){
            var catinfoblock = document.querySelector('.infocard-' + category);
            
            // collapse last before opening new category
            if (last_opened != null && last_opened != catinfoblock) {
                last_opened.classList.add('hidden');;
            }
            
            catinfoblock.classList.toggle('hidden');

            if (last_cat_active != null && last_cat_active != cat) {
                last_cat_active.classList.remove('active');
            }
            cat.classList.toggle('active');

            if (last_opened != catinfoblock) {
                setTimeout(scrollToLastOpened, 500)
            }

            last_opened = catinfoblock;
            last_cat_active = cat;


            
            

            };


            function scrollToLastOpened() {
                last_opened.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
            }

        }

        add_category("team");
        add_category("games");
        add_category("software");
        add_category("tools");
        add_category("videos");


       
    }
  
  })(window, document, undefined);

  function Animate() {

    if (images.length <= 1) {
        return;
    }

    document.getElementById("flask-image-frames").src = images[x]
    
    if (forward) {
        x++;
    } else {
        x--;
    }

    if ((images.length-1 == x) || (x == 1 && !forward)) {
        forward = !forward;
    }
}