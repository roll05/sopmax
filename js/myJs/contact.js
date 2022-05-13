$(document).ready(function(){

    document.getElementById('submit').addEventListener('click',function(e){
        e.preventDefault();
    
        document.getElementById('submit').addEventListener('click',proveri());
    
    })

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
            "tekst":"Contact",
            "class":"active"
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

function proveri(){
    var greske=[];

    //ID POLJA ZA PROVERU
    var ids=['name','lastname','address','phoneNumber','email','subject','message'];
    

    //REGULARNI IZRAZI ZA POLJA
    var reName=/^[A-ZĐŠŽĆČ][a-zđšžćč]{2,12}$/;
    var reSurname=/^[A-ZĐŠŽĆČ][a-zđšžćč]{2,50}(\s[A-ZĐŠŽĆČ][a-zđšžćč]{2,50})*$/;
    var reAddress=/^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})*\s[0-9]{1,4}(\/[0-9]{1,4})?$/;
    var rePhone=/^06[0-9]{1}[0-9]{6}([0-9]{1})?$/;
    var reEmail = /^[\w]+[\.\_\-\w]*\@[\w]+([\.][\w]+)+$/;
    var reSubject=/^[A-ZĐŠŽĆČa-zđšžćč\s0-9]+$/;
    var reTekst=/^[\d\s\w]+$/;

    //PROVERAVAMO VREDNOSTI POLJA REGULARNIM IZRAZIMA
    for(var i=0;i<ids.length;i++){
        if (ids[i] == 'name') reName.test(document.getElementById(ids[i]).value) ? true : greske.push('*Incorrect First name, First letter must be capital and the others must be small and dont make spacing');
        else if (ids[i] == 'lastname') reSurname.test(document.getElementById(ids[i]).value.trim()) ? true : greske.push('*Incorrect Last Name, First letter must be capital and the others must be small');
        else if (ids[i] == 'address') reAddress.test(document.getElementById(ids[i]).value) ? true : greske.push('*Incorrect address. First capital letter, others small, space and number');
        else if (ids[i] == 'phoneNumber') rePhone.test(document.getElementById(ids[i]).value) ? true : greske.push('*Incorrect phoneNumber, must start with 06 and must have 9 caracters');
        else if (ids[i] == 'email') reEmail.test(document.getElementById(ids[i]).value) ? true : greske.push('*Incorrect email, you must ener valid email address');
        else if (ids[i] == 'subject') reSubject.test(document.getElementById(ids[i]).value) ? true : greske.push('*Incorrect subjecs, only numbers, capital and small letters');
        else if (ids[i] == 'message') reTekst.test(document.getElementById(ids[i]).value ) ? true : greske.push('*Incorrect message, you cant send empty message');
    }

    //PROVERAVAMO DA LI IMA NEREGULARNIH UNOSA
    if(greske.length==0){
        //SVI UNOSI SU DOBRI
        document.getElementById('porukaPoslata').innerHTML='<p> Dear, '+document.getElementById('name').value+' '+document.getElementById('lastname').value+' your email is sent! Expect response as soon as posible! Best regrets!</p>';
        document.getElementById('greske').innerHTML = '';
    }else{
        //ISPIS GRESAKA AKO IH IMA
        var ispisGresaka='<p>';
        for(var i=0;i<greske.length;i++){
            ispisGresaka+=greske[i]+"<br>";
        }
        ispisGresaka+='</p>';
        document.getElementById('greske').innerHTML = ispisGresaka;
        document.getElementById('porukaPoslata').innerHTML = "";
    }

}