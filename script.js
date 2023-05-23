

(function(window, document, undefined) {

    // code that should be taken care of right away
  
    window.onload = init;
  
    function init(){
        console.log("script loaded");

        // insert flask image
        const flaskimagecontainer = document.getElementById("flask-image");
        flaskimagecontainer.innerHTML = '<img src="./res/fluidflask/0014.png" draggable="false">';

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