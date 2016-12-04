
$(document).ready(function(){

  lightbox.modules.actions.init();

});

var  lightbox = {
  modules: {}
};

lightbox.modules.load = (function(){

  return{

    // On stocke toutes les images de la galerie dans un tableau
    storeImages: function(){
      var array_images = [];
      $("#My-lightbox-gallery img").each(function(){
        array_images[array_images.length] = this;
      });
      return array_images;
    }

  }

})();

lightbox.modules.actions = (function(){

  return{

    init: function(){
      $("#My-lightbox-gallery .vignette img").on("click", this.open);
    },

    // On ouvre la lightbox
    open: function(){
      lightbox.modules.actions.changeImage(this);
      $("#lightbox").fadeToggle("slow");
      lightbox.modules.events.init();
    },

    // On remplace l'image de la lightbox par celle qui est en paramètre
    changeImage: function(image){
      var src = $(image).attr("src");
      $("#lightbox img").attr("src", src);
    }

  }

})();

lightbox.modules.events = (function(){

  return{

    init: function(){
      $("#lightbox_close").on("click", this.close);
      $("#lightbox_previous").on("click", this.previous);
      $("#lightbox_next").on("click", this.next);
    },

    // On ferme la lightbox
    close: function(){
      $("#lightbox").fadeToggle("slow");
    },

    // On affiche l'image précédente
    previous: function(){
      var img_src = $("#lightbox img").attr("src");
      var arr_img = lightbox.modules.load.storeImages();
      var i = 0;
      $.each(arr_img, function(){
        if(img_src === $(this).attr("src")){
          lightbox.modules.actions.changeImage(arr_img[i-1]);
          return false;
        }
        i = i+1;
      });
    },

    next: function(){
      var img_src = $("#lightbox img").attr("src");
      var arr_img = lightbox.modules.load.storeImages();
      var i = 0;
      $.each(arr_img, function(){
        if(img_src === $(this).attr("src")){
          lightbox.modules.actions.changeImage(arr_img[i+1]);
          return false;
        }
        i = i+1;
      });
    }

  }

})();
