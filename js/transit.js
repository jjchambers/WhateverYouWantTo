$.getJSPN('http://data.cityofchicago.org/resource/8pix-ypme.json', function (transitstops){
  $('#transitstoplist').empty();
  
  $.each(transitstops, function(i, transitstop){
    $('#transitstoplist').append(generateLStopLink(lstop));
    });
    
    $('#transitstoplist').listview('refresh');
    });
    
    function generateLStopLink(transitstop){
      return '<li><a href="javascript:void(0)'
              +'"onclick="goToStopDetailPage(\''
              +transitstop.stop_name
              +'\',\''
              +transitstop.station_descriptive_name + '\')">'
              +transitstop.stop_name
              +'</a></li>'
    }
    
    
    function goToStopDetailPage(transitstopName){
    //create the page html template
    var transitstopPage = $("<div data-role= 'page' data-url=station><div data-role='header'><h1>"
                   + transitstopName + "</h1></div><div data-role='content'></div><div data-role='footer'><h4>"
                   + transitstopName + "</h4></div></div>");
    
    //append the new page to the page calculator
    transitstopPage.appendTo( $.mobile.PageContainer);
    //go to the newly created page
    $.mobile.changePage( transitstopPage);
      
 }