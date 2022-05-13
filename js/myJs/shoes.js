$(document).ready(function(){

    //ITEMS
    var items=[
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
    itemIspis(items);
    
    $("#potvrdiFilter").click(function(){
        filter(items);
    });
})

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

function itemIspis(podatak){
    ispis="";
    for(var i=0;i<podatak.length;i++){
            ispis+='<div class="col-lg-6 col-md-6 item-entry mb-4">'+
            '<a href="single.html?id='+podatak[i]["id"]+'" class="product-item md-height d-block">'+
              '<img src="images/'+podatak[i]["slika"]["src"]+'" alt="'+podatak[i]['slika']['alt']+'" class="img-fluid">'+
            '</a>'+
            '<h2 class="item-title"><a href="#">'+podatak[i]['naziv']+'</a></h2>'+
            '<strong class="item-price">';
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
    $(".proizvodi").html(ispis);
}
        
    //FILTRIRANJE
    function filter(data){
        var x = document.getElementById("cenaOd").value;
        var y = document.getElementById("cenaDo").value;
        var a = document.getElementById("sortiranje");
        var b = document.getElementById("sortiranje").selectedIndex;
        var c = a.options[b].value;
        var crvena = document.querySelector('#color1').checked;
        var zelena = document.querySelector('#color2').checked;
        var crna = document.querySelector('#color3').checked;
        
        if(c==0 && x==0 && y==0)ispisi(data);
        if(crvena || zelena || crna ) boje(data);
        else if(c!=0)sortiranje(data);
        else if(x!=0)cenaOd(data);
        else if(y!=0)cenaDo(data);
        
        
    }

    function boje(data){
        var x = document.getElementById("cenaOd").value;
        var y = document.getElementById("cenaDo").value;
        var a = document.getElementById("sortiranje");
        var b = document.getElementById("sortiranje").selectedIndex;
        var c = a.options[b].value;
        var crvena = document.querySelector('#color1').checked;
        var zelena = document.querySelector('#color2').checked;
        var crna = document.querySelector('#color3').checked;
        var boje=[];
        crvena ? boje.push("crvena") : false; 
        zelena ? boje.push("zelena") : false; 
        crna ? boje.push("crna") : false; 
        var podatak=[];
        for(var i=0;i<data.length;i++){
            for(var n=0;n<boje.length;n++){
                if(data[i]['boja']==boje[n]){
                    
                    podatak.push(data[i]);
                }
            }
        }
        if(c==0 && x==0 && y==0)ispisi(podatak);

        if(c!=0)sortiranje(podatak);
        else if(x!=0)cenaOd(podatak);
        else if(y!=0)cenaDo(podatak);
    }

    //SORTIRANJE
    function sortiranje(data){
        var x = document.getElementById("cenaOd").value;
        var y = document.getElementById("cenaDo").value;
        var a = document.getElementById("sortiranje");
        var b = document.getElementById("sortiranje").selectedIndex;
        var c = a.options[b].value;
        if(c==1)rastuce(data);
        else if(c==2)opadajuce(data);
        function rastuce(data){	
            function sortiraj(){
                for( var i=0;i<data.length;i++){
                    for(var j=1;j<data.length;j++)
                            
                        return function(i,j){
                            if( i.cena > j.cena){
                                return 1;
                            }
                            else if( i.cena < j.cena ){
                                return -1;
                            }
                                return 0;
                    }
                }
            }
            var podatak = data.sort(sortiraj());
            ispisi(podatak);
            if(x>0)cenaOd(podatak);
            else if(y>0)cenaDo(podatak);
        }
        function opadajuce(data){	
            function sortiraj(){
                for( var i=0;i<data.length;i++){
                    for(var j=1;j<data.length;j++)
                            
                        return function(i,j){
                            if( i.cena < j.cena){
                                return 1;
                            }
                            else if( i.cena > j.cena ){
                                return -1;
                            }
                                return 0;
                    }
                }
            }
            var podatak = data.sort(sortiraj());
            ispisi(podatak);
            if(x>0)cenaOd(podatak);
            else if(y>0)cenaDo(podatak);
        }
    };

    //SORITIRANJE PO CENI
    function cenaOd(data){
        var x = document.getElementById("cenaOd").value;
        var y = document.getElementById("cenaDo").value;
                var podatak=[];
                for(var i=0; i<data.length; i++){
                    if(x<data[i].cena){
                        podatak.push(data[i]);
                    }
                }
            if(x>0 && y==0){
                ispisi(podatak);
            }
            else{
            cenaOdDo(podatak);
            }
    }

    function cenaDo(data){
        var x = document.getElementById("cenaOd").value;
        var y = document.getElementById("cenaDo").value;
                var podatak=[];
                for(var i=0; i<data.length; i++){
                    if(y>data[i].cena){
                        podatak.push(data[i]);
                    }
                }
                ispisi(podatak);
    }

    function cenaOdDo (podatak){
        var x = document.getElementById("cenaOd").value;
        var y = document.getElementById("cenaDo").value;
            var podatak2 = [];
                for(var i=0; i<podatak.length; i++){
                    if(y>podatak[i].cena){
                        podatak2.push(podatak[i]);
                    }
                }
         ispisi(podatak2);
    }

    //ISPIS NAKON FILTRIRANJA I SORTIRANJA
    function ispisi(podatak){
        ispis="";
        for(var i=0;i<podatak.length;i++){
                ispis+='<div class="col-lg-6 col-md-6 item-entry mb-4">'+
                '<a href="single.html?id='+podatak[i]["id"]+'" class="product-item md-height d-block">'+
                  '<img src="images/'+podatak[i]["slika"]["src"]+'" alt="'+podatak[i]['slika']['alt']+'" class="img-fluid">'+
                '</a>'+
                '<h2 class="item-title"><a href="#">'+podatak[i]['naziv']+'</a></h2>'+
                '<strong class="item-price">';
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
        $(".proizvodi").html(ispis);
    }