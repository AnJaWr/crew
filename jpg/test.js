function sortJsonName(a,b){
    return a.name > b.name ? 1 : -1;
  };
   $(document).ready(function() {
       $.getJSON("http://app.ecwid.com/api/v1/208317/categories?format=json", function(cats){
             cats = $(cats).sort(sortJsonName);
             $.each(cats, function(index, cat){ 		
                 $('#navlist').append('<li>'+cat.name+'</li>');
     
             });                        
       });
   });