var domainNameStart ="False";
var domainName="";
var url=window.parent.location.href;


for (var i=0; i<url.length; i++){
    if( url[i]=="." && domainNameStart=="True"){
        domainNameStart="False";
        break;
    }
    if(domainNameStart=="True"){
        domainName+=url[i];
    }
    if(url[i]=="." && domainNameStart=="False"){
        domainNameStart="True";
    }
}

console.log("www." +domainName + ".com");
    
if(domainName=="facebook" || domainName=="youtube"|| domainName=="instagram" || domainName=="tumblr"){
    console.log("Study/Work Mode activated, please try again later!");
	
    var div = document.createElement("DIV");
    div.setAttribute("id", "Blocker");

    elements=document.getElementsByTagName("div");
    scripts=document.getElementsByTagName("script");
	
    for(var i=0;i<elements.length;i++){
        elements[i].style.opacity="0";
        elements[i].style.width="0";
        elements[i].style.height="0";
        elements[i].style.zIndex="-100";
    }
		
	document.body.appendChild(div);
	document.body.style.width=window.innerWidth+"px";
	document.body.style.height=window.innerHeight+"px";
	document.body.style.position="relative";
	div.style.opacity="1";

	div.style.backgroundColor="white";
	div.style.zIndex="1000000000000";
	div.style.position="absolute";
	div.style.width="100%";
	div.style.height="100%";
	div.style.textAlign="center";
	div.style.paddingTop="25%";
		
	var message = document.createElement("blocker");
	
    div.setAttribute("id", "Blocker");
	div.appendChild(message);

	message.style.color="black";
	message.style.fontSize="40px";
	message.innerHTML = "You must study/work, please try again later!";
	
}	