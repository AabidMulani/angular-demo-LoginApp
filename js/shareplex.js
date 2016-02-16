// JavaScript Document
// Close the lightbox
function mainclosebox()
{
   document.getElementById('discoverInstance').style.display='none';
   document.getElementById('startDiscovery').style.display='block';
   document.getElementById('closeBtn').style.display='none';
   document.getElementById('discoveryInstance').style.display='none';
   
   
   
   
}

$(document).ready(function(){
	
  divHeight();
  function divHeight()
  {
	var x = window.innerHeight - 75;
	$('.container').height(x);
	var y = window.innerHeight - 100;
	$('#middleDiv').height(y);
	//$('#rightmenuDiv').height(x);
  }	
	
 $("#btnstartDiscovery").click(function(){
       $("#discover").show();
	    $("#discoverInstance").show();
	   $("#startDiscovery").hide();
	   $("#authenticateDiv").hide(); 
	   $("#manageDiv").hide(); 
	     $("#closeBtn").show();
  });

 $("#btnDiscovery").click(function(){
       $("#discoveryInstance").show();
	    $("#discoverInstance").hide();
	   $("#startDiscovery").hide();
	   $("#manageDiv").hide(); 
	    $("#closeBtn").show();
	   
  });
 $("#nextBtn").click(function(){
       $("#discoveryInstance").hide();
	    $("#discoverInstance").hide();
	   $("#startDiscovery").hide();
	   $("#manageDiv").hide(); 
	    $("#closeBtn").show();
		 $("#authenticateDiv").show(); 
	   
  });
 $("#authenticateBtn").click(function(){
       $("#discoveryInstance").hide();
	   $("#discoverInstance").hide();
	   $("#startDiscovery").hide();
	   $("#closeBtn").show();
	   $("#authenticateDiv").hide(); 
	   $("#manageDiv").show(); 
		 
	   
  });

   $("#backBtn").click(function(){
       
	  $("#discoveryInstance").hide();
	  $("#discoverInstance").show();
	  $("#manageDiv").hide(); 
	  $("#closeBtn").show();
		 
	   
  });
  
     $("#disablebtn").click(function(){
       
	
	  $("#authenticateDiv").hide();
	    $("#discoveryInstance").show();
	  $("#manageDiv").hide(); 
	  $("#closeBtn").show();
		 
	   
  });


	
});


