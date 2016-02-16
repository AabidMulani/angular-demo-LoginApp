function gradient(id, level)
{
	var box4 = document.getElementById(id);
	box4.style.opacity = level;
	box4.style.MozOpacity = level;
	box4.style.KhtmlOpacity = level;
	box4.style.filter = "alpha(opacity=" + level * 100 + ")";
	box4.style.display="block";
	return;
}
function fadein(id) 
{
	var level = 0;
	while(level <= 1)
	{
		setTimeout( "gradient('" + id + "'," + level + ")", (level* 1000) + 10);
		level += 0.01;
	}
}
// Open the lightbox
function openbox4(formtitle, fadin)
{
  var box = document.getElementById('box4'); 
  document.getElementById('shadowing4').style.display='block';

  var btitle = document.getElementById('boxtitle4');
  btitle.innerHTML = formtitle;
  if(fadin)
  {
	 gradient("box4", 0);
	 fadein("box4");
  }
  else
  { 	
    box.style.display='block';
  }  	
}

// Close the lightbox
function closebox4()
{
   document.getElementById('box4').style.display='none';
   document.getElementById('shadowing4').style.display='none';
   document.getElementById('discoveryInstance').style.display='none';
   document.getElementById('discoverInstance').style.display='none';
   document.getElementById('authenticateDiv').style.display='none';
   document.getElementById('manageDiv').style.display='none';
   document.getElementById('startDiscovery').style.display='block';
   document.getElementById('closeBtn').style.display='none';
  
   
}

function gradient(id, level)
{
	var box5 = document.getElementById(id);
	box5.style.opacity = level;
	box5.style.MozOpacity = level;
	box5.style.KhtmlOpacity = level;
	box5.style.filter = "alpha(opacity=" + level * 100 + ")";
	box5.style.display="block";
	return;
}
function fadein(id) 
{
	var level = 0;
	while(level <= 1)
	{
		setTimeout( "gradient('" + id + "'," + level + ")", (level* 1000) + 10);
		level += 0.01;
	}
}
// Open the lightbox
function openbox5(formtitle, fadin)
{
  var box = document.getElementById('box5'); 
  document.getElementById('shadowing5').style.display='block';

  var btitle = document.getElementById('boxtitle5');
  btitle.innerHTML = formtitle;
  if(fadin)
  {
	 gradient("box5", 0);
	 fadein("box5");
  }
  else
  { 	
    box.style.display='block';
  }  	
}

// Close the lightbox
function closebox5()
{
   document.getElementById('box5').style.display='none';
   document.getElementById('shadowing5').style.display='none';
}

function gradient(id, level)
{
	var box6 = document.getElementById(id);
	box6.style.opacity = level;
	box56.style.MozOpacity = level;
	box6.style.KhtmlOpacity = level;
	box6.style.filter = "alpha(opacity=" + level * 100 + ")";
	box6.style.display="block";
	return;
}
function fadein(id) 
{
	var level = 0;
	while(level <= 1)
	{
		setTimeout( "gradient('" + id + "'," + level + ")", (level* 1000) + 10);
		level += 0.01;
	}
}
// Open the lightbox
function openbox6(formtitle, fadin)
{
  var box = document.getElementById('box6'); 
  document.getElementById('shadowing6').style.display='block';

  var btitle = document.getElementById('boxtitle6');
  btitle.innerHTML = formtitle;
  if(fadin)
  {
	 gradient("box6", 0);
	 fadein("box6");
  }
  else
  { 	
    box.style.display='block';
  }  	
}

// Close the lightbox
function closebox6()
{
   document.getElementById('box6').style.display='none';
   document.getElementById('shadowing6').style.display='none';
}