$(document).ready(function(){
    //PODACI ZA DINAMICKO ISPISIVANJE NAVIGACIJE
    var menu=[
        {
            "link":"index.html",
            "tekst":"Home",
        },
        {
            "link":"shop.html",
            "tekst":"Shop",
            "class":"menu-has-children",
            "children":[
                {
                    "link":"men.html",
                    "tekst":"Men Collection",
                },
                {
                    "link":"women.html",
                    "tekst":"Women Collestion",
                },
                {
                    "link":"shoes.html",
                    "tekst":"Shoes",
                }
            ]
        },
        {
            "link":"contact.html",
            "tekst":"Contact"
            
        },
        {
            "link":"about.html",
            "tekst":"Author",
            "class":"active"
        },
        {
            "link":"DOKUMENTACIJA.pdf",
            "tekst":"DOKUMENTACIJA"
        },
    ]
	IspisiMeni(menu);
})

//DINAMICKO ISPISIVANJE NAVIGACIJE
function IspisiMeni(podatak){
    var ispis="";
    for(var i=0;i<podatak.length;i++){
        if(podatak[i].hasOwnProperty('children')){
            ispis+='<li class="has-children"><a href="'+podatak[i]['link']+'">'+podatak[i]['tekst']+'</a>'+
            '<ul class="dropdown">';
                for(var j=0;j<podatak[i]['children'].length;j++){
                    ispis+='<li><a href="'+podatak[i]['children'][j]['link']+'">'+podatak[i]['children'][j]['tekst']+'</a>';
                };	
            ispis+='</ul>'+
          '</li>';
        }else if(podatak[i].hasOwnProperty('class')){
            ispis+='<li class="'+podatak[i]['class']+'"><a href="'+podatak[i]['link']+'">'+podatak[i]['tekst']+'</a></li>';
        }else{
            ispis+='<li><a href="'+podatak[i]['link']+'">'+podatak[i]['tekst']+'</a></li>';
        }
    }
    $(".site-menu").html(ispis);
}