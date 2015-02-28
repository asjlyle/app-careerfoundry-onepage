var myKitties = [ { title: "First Project", pic: "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg" }, 
{ title: "Second Project", pic: "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg" }, 
{ title: "Third Project", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg" }, 
{ title: "Fourth Project", pic: "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg" }
];

function initialize() {
        var mapOptions = {
          center: { lat: 51.506846, lng: -0.142846},
          zoom: 8
        };
        
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var marker = new google.maps.Marker({
      	position: mapOptions.center,
      	map: map,
      	title: 'Click to zoom'
      	})

       	google.maps.event.addListener(marker, 'click', function() {
      	map.setZoom(15);
      	map.setCenter(marker.getPosition());
		}); 
}

      google.maps.event.addDomListener(window, 'load', initialize);

      



$(document).ready(function(){

	$("#btn-submit").on("click",function(){
		console.log("clicked");
		var comment = $("textarea").val();
		console.log(comment);
		var comment_upper = comment.toUpperCase();
		console.log(comment_upper);
		$("#visible-comment").html(comment_upper +"!!!!!");

	});

	$("textarea").css("background-color","pink");

	$("textarea").on("keyup",function() {
		console.log("keyup-happened")//here we make sure we're catching the keyup
     
        // in here is where the rest of our code for this lesson will go  
	     var charCount=$("textarea").val().length;
	     console.log(charCount);

	     $("#char-count").html(charCount);

	     if(charCount>50) {
	     	$("#char-count").css("color","red")
	     } else {
	     	$("#char-count").css("color","black")
	     }

		});

	var rows=$(".my-row");
	console.log(rows)

	for(var i=0; i<rows.length; ++i) {
		if(i%2===0) {
			 $(rows[i]).css("background-color","pink");
		};
	};

	for(var i=0; i<myKitties.length;++i) {
		$('#'+i).css("background-image","url(" + myKitties[i].pic +")");
	};

	$(".image").mouseenter( function() {
		console.log(this);
		$(this).html("<p class='info'><span class='proj-title'>Title:</span> " + myKitties[this.id].title + "</p>");
	}).mouseleave(function() {
		$("p.info").html("");
	});

});
