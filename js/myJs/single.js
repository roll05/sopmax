$(document).ready(function(){
    var id = getUrlVars()["id"];

    //ITEMS
    var items=[
        {
            "id":1,
            "slika":{
                "src":"men/black.jpg",
                "alt":"black suit"
            },
            "naziv":"Elegant black suit",
            "kategorija":"men",
            "cena":130,
            "zvezdice":5,
            "boja":"crna"
        },
        {
            "id":2,
            "slika":{
                "src":"men/black1.jpg",
                "alt":"black suit"
            },
            "naziv":"Black suit",
            "kategorija":"men",
            "cena":115,
            "staraCena":150,
            "zvezdice":3,
            "boja":"crna"
        },
        {
            "id":3,
            "slika":{
                "src":"men/red.jpg",
                "alt":"red suit"
            },
            "naziv":"Red suit",
            "kategorija":"men",
            "cena":75,
            "zvezdice":4,
            "boja":"crvena"
        },
        {
            "id":4,
            "slika":{
                "src":"men/red1.jpg",
                "alt":"red suit"
            },
            "naziv":"Elegant Red suit",
            "kategorija":"men",
            "cena":49,
            "zvezdice":3,
            "boja":"crvena"
        },
        {
            "id":5,
            "slika":{
                "src":"men/red2.jpg",
                "alt":"red suit"
            },
            "naziv":"Very nice Red suit",
            "kategorija":"men",
            "cena":70,
            "zvezdice":4,
            "boja":"crvena"
        },
        {
            "id":6,
            "slika":{
                "src":"men/red3.jpg",
                "alt":"red suit"
            },
            "naziv":"Nice ice Red suit",
            "kategorija":"men",
            "cena":70,
            "zvezdice":4,
            "boja":"crvena"
        },
        {
            "id":7,
            "slika":{
                "src":"men/green.jpg",
                "alt":"green suit"
            },
            "naziv":"Green suit",
            "kategorija":"men",
            "cena":90,
            "zvezdice":4,
            "boja":"zelena"
        },
        {
            "id":8,
            "slika":{
                "src":"men/green1.jpg",
                "alt":"green suit"
            },
            "naziv":"Elegant Green suit",
            "kategorija":"men",
            "cena":90,
            "zvezdice":4,
            "boja":"zelena"
        },
        {
            "id":9,
            "slika":{
                "src":"men/green2.jpg",
                "alt":"green suit"
            },
            "naziv":"The most elegant Green suit",
            "kategorija":"men",
            "cena":9900,
            "zvezdice":4,
            "boja":"zelena"
        },
        {
            "id":10,
            "slika":{
                "src":"women/black.jpg",
                "alt":"black suit"
            },
            "naziv":"Black dress",
            "kategorija":"women",
            "cena":250,
            "zvezdice":2,
            "boja":"crna"
        },
        {
            "id":11,
            "slika":{
                "src":"women/black1.jpg",
                "alt":"black suit"
            },
            "naziv":"Super Black dress",
            "kategorija":"women",
            "cena":180,
            "zvezdice":4,
            "boja":"crna"
        },
        {
            "id":12,
            "slika":{
                "src":"women/black2.jpeg",
                "alt":"black suit"
            },
            "naziv":"Elegant Black dress",
            "kategorija":"women",
            "cena":196,
            "zvezdice":4,
            "boja":"crna"
        },
        {
            "id":13,
            "slika":{
                "src":"women/black3.jpg",
                "alt":"black suit"
            },
            "naziv":"The most elegant Black dress",
            "kategorija":"women",
            "cena":350,
            "zvezdice":4,
            "boja":"crna"
        },
        {
            "id":14,
            "slika":{
                "src":"women/green.jpg",
                "alt":"green suit"
            },
            "naziv":"Green dress",
            "kategorija":"women",
            "cena":280,
            "zvezdice":2,
            "boja":"zelena"
        },
        {
            "id":15,
            "slika":{
                "src":"women/green1.jpg",
                "alt":"green suit"
            },
            "naziv":"Super Green dress",
            "kategorija":"women",
            "cena":400,
            "zvezdice":4,
            "boja":"zelena"
        },
        {
            "id":16,
            "slika":{
                "src":"women/green2.jpg",
                "alt":"green suit"
            },
            "naziv":"The most elegant Green dress",
            "kategorija":"women",
            "cena":400,
            "zvezdice":4,
            "boja":"zelena"
        },
        {
            "id":17,
            "slika":{
                "src":"women/red.jpg",
                "alt":"red suit"
            },
            "naziv":"The most elegant Red dress",
            "kategorija":"women",
            "cena":550,
            "zvezdice":5,
            "boja":"crvena"
        },
        {
            "id":18,
            "slika":{
                "src":"women/red1.jpg",
                "alt":"red suit"
            },
            "naziv":"Red dress",
            "kategorija":"women",
            "cena":1500,
            "zvezdice":4,
            "boja":"crvena"
        },
        {
            "id":19,
            "slika":{
                "src":"women/red2.jpg",
                "alt":"red suit"
            },
            "naziv":"Best Red dress",
            "kategorija":"women",
            "cena":420,
            "zvezdice":2,
            "boja":"crvena"
        },
        {
            "id":20,
            "slika":{
                "src":"women/red3.jpg",
                "alt":"red suit"
            },
            "naziv":"Elegant Red dress",
            "kategorija":"women",
            "cena":250,
            "zvezdice":4,
            "boja":"crvena"
        },
        {
            "id":21,
            "slika":{
                "src":"shoes/black.jpg",
                "alt":"black shoes"
            },
            "naziv":"Black shoes",
            "kategorija":"shoes",
            "cena":700,
            "zvezdice":4,
            "boja":"crna"
        },
        {
            "id":22,
            "slika":{
                "src":"shoes/green.jpg",
                "alt":"green shoes"
            },
            "naziv":"Green shoes",
            "kategorija":"shoes",
            "cena":500,
            "zvezdice":4,
            "boja":"zelena"
        },
        {
            "id":23,
            "slika":{
                "src":"shoes/green1.jpg",
                "alt":"green shoes"
            },
            "naziv":"Best Green shoes",
            "kategorija":"shoes",
            "cena":550,
            "zvezdice":5,
            "boja":"zelena"
        },
        {
            "id":24,
            "slika":{
                "src":"shoes/red1.jpg",
                "alt":"red shoes"
            },
            "naziv":"Best Red shoes",
            "kategorija":"shoes",
            "cena":550,
            "zvezdice":3,
            "boja":"crvena"
        },
        {
            "id":25,
            "slika":{
                "src":"shoes/red2.jpg",
                "alt":"red shoes"
            },
            "naziv":"Red shoes",
            "kategorija":"shoes",
            "cena":2000,
            "zvezdice":3,
            "boja":"crvena"
        },
    ]


    //DINAMICKO ISPISIVANJE MENIJA
    var menu=[
        {
            "link":"index.html",
            "tekst":"Home",
        },
        {
            "link":"shop.html",
            "tekst":"Shop",
            "class":"menu-has-children active",
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
            "tekst":"Author"
        },
        {
            "link":"DOKUMENTACIJA.pdf",
            "tekst":"DOKUMENTACIJA"
        },
    ]
    IspisiMeni(menu);
    itemIspis(items,id);
})

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function IspisiMeni(podatak){
    var ispis="";
    for(var i=0;i<podatak.length;i++){
        if(podatak[i].hasOwnProperty('children')){
            ispis+='<li class="has-children active"><a href="'+podatak[i]['link']+'">'+podatak[i]['tekst']+'</a>'+
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

function itemIspis(podatak, id){
    ispis="";
    for(var i=0;i<podatak.length;i++){
        if(podatak[i]['id']==id){
           ispis+='<div class="col-md-6">'+
            '<div class="item-entry">'+
              '<a href="#" class="product-item md-height d-block">'+
                '<img src="images/'+podatak[i]["slika"]["src"]+'" alt="'+podatak[i]['slika']['alt']+'" class="img-fluid">'+
              '</a>'+
              
            '</div>'+

          '</div>'+
          '<div class="col-md-6">'+
            '<h2 class="text-black">'+podatak[i]['naziv']+'</h2>';
            if(podatak[i].hasOwnProperty("staraCena")){
                ispis+='<del>$'+podatak[i]['staraCena']+'.00</del>';
            }
            ispis+='$'+podatak[i]['cena']+'.00</strong>'+
            '<div class="star-rating">';
            for(var y=0; y<podatak[i]['zvezdice'];y++){
                ispis+='<span class="icon-star2 text-warning"></span>';
            }
            for(var y=podatak[i]['zvezdice'];y<5;y++){
                 ispis+='<span class="icon-star2"></span>';
            }
            ispis+='</div>'+
            '</div>';
        }
            
    }
    $(".proizvod").html(ispis);
    for(var i=0;i<podatak.length;i++){
        if(podatak[i]['id']==id){
            $("#nazivArtikla").html(podatak[i]['naziv']);
        }
    }
}