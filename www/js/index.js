var currentPage = 1;
var strings = ["asian.jpg", "1990.jpg", "angryschool.jpg", "asianfather.jpg", "badluckbrian.jpg", "beargrills.jpg", "aliens.jpg", "braceyourselves.jpg", "brujeria.jpg", "butthurtdweller.jpg", "philosoraptor.jpg", "boromir.jpg", "chinesekid.jpg", "chubbygirl.jpg", "attractiveconv.jpg", "scumbaggirl.jpg", "chucknorris.jpg", "clarity.jpg", "confessionkid.jpg", "collegefreshman.jpg", "correction.jpg", "dareyou.jpg", "datass.jpg", "dicaprio.jpg", "disastergirl.jpg", "drunkmom.jpg", "duhh.jpg", "dwight.jpg", "eviltodler.jpg", "facepalm.jpg", "finallyover.jpg", "frustrated.jpg", "gollum.jpg", "goodguygreg.jpg", "grammarnazi.jpg", "grandmainternet.jpg", "interesting.jpg", "internet.jpg", "ironman.jpg", "jealousgirl.jpg", "backinmyday.jpg", "negra.jpg", "neo.jpg", "agentsmith.jpg", "nomedigas.jpg", "notime.jpg", "angrywalter.jpg", "notimpressed.jpg", "novicia.jpg", "overlyattachedgirlfriend.jpg", "oaboyfriend.jpg", "oficinista.jpg", "oprah.jpg", "parker.jpg", "pauld.jpg", "photogenic.jpg", "policiatestigo.jpg", "problems.jpg", "badarghippie.jpg", "karatekyle.jpg", "keanu.jpg", "laughingmen.jpg", "lazycollegesenior.jpg", "leavebalone.jpg", "leche.jpg", "luckylarry.jpg", "minor.jpg", "morpheus.jpg", "mvp.jpg", "rastateacher.jpg", "redditorswife.jpg", "redneck.jpg", "regret.jpg", "sadkeanu.jpg", "sammy.jpg", "skeptical.jpg", "sparta.jpg", "sparta2.jpg", "steffi.jpg", "stonerstanley.jpg", "succesful.jpg", "successkid.jpg", "thirdworld.jpg", "thumb.jpg", "timberlake.jpg", "metalhead.jpg", "middleclassmilf.jpg", "provincial.jpg", "scumbagbrain.jpg", "vendetta.jpg", "women.jpg", "awesometeacher.jpg", "einstein.jpg", "jesus.jpg", "trolgirl.jpg", "turista.jpg", "tyler.jpg", "infancia.jpg", "jokerrainbow.jpg", "josephducreux.jpg", "nerdgirl.jpg", "overeducated.jpg", "programmer.jpg", "scumbag.jpg", "sexadvice.jpg", "weirdface.jpg", "loseminds.jpg", "unhelpful.jpg", "vengeancedad.jpg", "whyfuck.jpg", "willsmith.jpg", "willywonka.jpg", "yaomin.jpg", "yaowonka.jpg", "yodawg.jpg", "foreveralone.jpg", "challenge.jpg", "yuno.jpg", "jackie.jpg", "mrbean.jpg", "alegria.jpg", "badas.jpg", "trollface.jpg", "truestory.jpg", "tomesu4.jpg", "xallthey.jpg", "yao.jpg", "okayguy.jpg", "ragefu.jpg", "why.jpg", "bob.jpg", "bob1.jpg", "50corazones.jpg", "patricksays.jpg", "ash.jpg", "professoroak.jpg", "chavo8.jpg", "florinda.jpg", "donramon.jpg", "futuramafry.jpg", "takemymoney.jpg", "leela.jpg", "herculeshades.jpg", "hipsterariel.jpg", "homer.jpg", "tabla.jpg", "crosseyedgoku.jpg", "nappa.jpg", "dinkleberg.jpg", "toystory.jpg", "southpark.jpg", "chemdog.jpg", "badadvice.jpg", "advicegod.jpg", "advicemall.jpg", "advicedog.jpg", "antijokechicken.jpg", "anxietycat.jpg", "apathydog.jpg", "aristocat.jpg", "artowl.jpg", "aviatordog.jpg", "awesome.jpg", "sociallyawkwardpenguin.jpg", "awesomeawkward.jpg", "awkwardsocial.jpg", "chihuahua.jpg", "chilllemur.jpg", "businesscat.jpg", "chemistrycat.jpg", "chronicillness.jpg", "foca.jpg", "confessionbear.jpg", "depressedcat.jpg", "crazywolf.jpg", "insanitywolf.jpg", "interestingcat.jpg", "frog.jpg", "laraza.jpg", "pony.jpg", "surprisekoala.jpg", "badspider.jpg", "bicho.jpg", "ted.jpg", "trap.jpg", "yoda.jpg", "stonerdog.jpg", "rene.jpg", "richraven.jpg", "sadcat.jpg", "slowpoke.jpg", "racistdog.jpg", "nc.jpg", "maladvice.jpg", "lionking.jpg", "gatosh.jpg", "grumpycat.jpg", "homophobic.jpg", "monos.jpg", "papercat.jpg", "paranoidparrot.jpg", "pato.jpg", "pedobear.jpg", "foulbachelorfrog.jpg", "bonobolife.jpg", "baby.jpg", "drunkbaby.jpg", "angrybaby.jpg", "babygodfather.jpg", "babylove.jpg", "screambaby.jpg", "daria.jpg", "fpsnoob.jpg", "evilkid.jpg", "borat.jpg", "boxxy.jpg", "brucelee.jpg", "brucew.jpg", "captain.jpg", "caray.jpg", "aniston.jpg", "barneystinson.jpg", "barneywin.jpg", "beyonce.jpg", "bieber.jpg", "billgates.jpg", "billmurray.jpg", "billoreily.jpg", "christina.jpg", "clooney.jpg", "comillas.jpg", "cryingparker.jpg", "deniro.jpg", "docbrown.jpg", "drevil.jpg", "gangam.jpg", "gangam3.jpg", "hefner.jpg", "hilton.jpg", "jayz.jpg", "johnysins.jpg", "kaepernick.jpg", "lindsay.jpg", "mark.jpg", "matias.jpg", "miley.jpg", "minaj.jpg", "onedir.jpg", "sasha.jpg", "seagal.jpg", "shanaynay.jpg", "seestiro.jpg", "shaq.jpg", "skrillex.jpg", "snoopdog.jpg"];//, "tebow.jpg", "thehell.jpg", "thicke.jpg", "tyson.jpg", "vindiesel.jpg", "wasthere.jpg", "angrydumbledore.jpg", "cuchis.jpg", "cucho.jpg", "findyou.jpg", "freezing.jpg", "friendzone.jpg", "gandalf.jpg", "harypotter.jpg", "angryarnold.jpg", "heresjohny.jpg", "hernan.jpg", "hideyokids.jpg", "howard.jpg", "impusibru.jpg", "jacksparrow.jpg", "mask.jpg", "powers.jpg", "pulp.jpg", "rapistedward.jpg", "scary.jpg", "house.jpg", "iknow.jpg", "soldier.jpg", "sparrow.jpg", "wolowitz.jpg", "zombie.jpg", "bane.jpg", "batman.jpg", "badfactman.jpg", "batmanslap.jpg", "headhache.jpg", "spidercomputer.jpg", "whispering.jpg", "chickenspider.jpg", "notbad.jpg", "obama.jpg", "obamaphone.jpg", "obamapissed.jpg", "obamarie.jpg", "scumbagobama.jpg", "staffobama.jpg", "putin.jpg", "queen.jpg", "arjona.jpg", "banderas.jpg", "bolillo.jpg", "bonet.jpg", "calle13.jpg", "chavez.jpg", "chente.jpg", "falcao.jpg", "cristiano.jpg", "dayaanna.jpg", "escobar2.jpg", "focalizate.jpg", "grisales.jpg", "hayek.jpg", "lapiedra.jpg", "lloron.jpg", "maduro.jpg", "marimar.jpg", "mecatie.jpg", "messi.jpg", "mexicano.jpg", "montana.jpg", "mourinho.jpg", "nati.jpg", "nerasloma.jpg", "noexiste.jpg", "uribe.jpg", "vergara.jpg", "padre.jpg", "pekerman.jpg", "penanieto.jpg", "pepe.jpg", "piedad.jpg", "pitbull.jpg", "quevedo.jpg", "ramos.jpg", "riano.jpg", "ivanramiro.jpg", "jessyk.jpg", "jmsantos.jpg", "juangabriel.jpg", "lalinde.jpg", "wachiturro.jpg", "fernandez.jpg", "zarco.jpg", "zepequeno.jpg", "bozzo.jpg", "casocerrado.jpg", "minecraft.jpg", "creeper.jpg", "aoe.jpg", "gta.jpg", "confucious.jpg", "couch.jpg", "drivegranma.jpg", "kimyongun.jpg", "reddit.jpg", "genetics.jpg", "sadtrooper.jpg", "slenderman.jpg", "omsk.jpg", "ecce.jpg", "homo.jpg"];
var lastPage = 100;
var xpictures = 15;
var loaded = false;
var passDataObject = { selectedId: null };
var fuente;
var imageData;
var currentPage;
var userLang;
var width;
var height;
var canvas = document.getElementById('canvas');
var base64;
var cropped = false;
var srcSet = false;
var imgCrop;


function fillGrid(){
    if(loaded === false){
        loaded = true;
    var screenWidth = screen.width;
    switch(screenWidth){
        case 320: //iphone 4s, 5, 5s
            xpictures = 15;
            break;
        case 768: //ipad 2, air, air2, pro, retina
            xpictures = 30;
            break;
        case 375: //iphone 6
            xpictures = 28;
            break;
        case 414: //iphone 6+
            xpictures = 28;
            break;
        
    }
    var totalMemes = strings.length;
    var pages = totalMemes / xpictures;

    for(var s=1;s<=pages+1;s++){
        var container = document.getElementById("container");
        var memeGrid = document.createElement('div');
        memeGrid.id = "badges-slidepage-"+s+"";
        if(s==1){
            memeGrid.className = "psPage center current";
        }
        else{
            memeGrid.className = "psPage right";
        }
        memeGrid.setAttribute("page",s);
        container.appendChild(memeGrid);
        var i = (s - 1) * xpictures;
        var f = s * xpictures;
        if(s==1){
            var pageIndicator = document.getElementById("pageIndicator");
            var li = document.createElement('li');
            li.className = "active";
            li.setAttribute('onclick',"pagingSlider.setPage('.myPageContainerClass',"+s+");");
            pageIndicator.appendChild(li);
        }
        else {//if(s<=pages){
            var pageIndicator = document.getElementById("pageIndicator");
            var li = document.createElement('li');
            li.setAttribute('onclick',"pagingSlider.setPage('.myPageContainerClass',"+s+");");
            pageIndicator.appendChild(li);
        }
        for(k=i;k<f;k++)
        {   
            var currentString = strings[k];
            if(currentString === undefined){
                break;
            }
            /*var link = document.createElement("a");
            img.classList.add('link');
            link.setAttribute("href","#memeedit");//?currentPage="+1+"&meme="+currentString);*/
            var img = document.createElement("img");
            img.src = "./img/"+currentString;
            img.classList.add('gridpicture');
            img.id = currentString;
            memeGrid.appendChild(img);
        }
    }
    $('.gridpicture').unbind('click').click(function(e) {
        e.preventDefault();
        passDataObject.selectedId = this.id;
        $.mobile.changePage('#memeedit');//, { transition: 'slide'} );
    });
    }
}




function goForward(){
    if(currentPage < lastPage){
        currentPage += 1;
        fillGrid(currentPage);
    }
}
function goBackward(){
    if(currentPage > 1) {
        currentPage -= 1;
        fillGrid(currentPage);
    }
}

function checkLanguage() {
    navigator.globalization.getPreferredLanguage(
        function (language) {
            userLang = (language.value).substring(0,2);
            window.localStorage.setItem("deviceLanguage", userLang);
        },
        function () {

        }
      );
}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // fix and dirty ;)
        $('.listening').remove();
        $('h1').remove();
        $('.app').css('background', 'none');
        $('.app').css('padding', '0');
        $('.app').css('margin', '0');
        $('.app').css('top', '0');
        $('.app').css('left', '0');
        $('.app').css('width', '100%');
        
        ////FLURRY
        if (window.plugins && window.plugins.flurry) {
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
            if (isAndroid) {
                var androidKey = getAndroidKey();
                window.plugins.flurry.startSession(androidKey, function () {
                    console.log('AndroidFlurry Success!');
                }, function () {
                    alert('Flurry Error!');
                });
            } else {
                var iOSKey = getiOSKey();
                window.plugins.flurry.startSession(iOSKey, function () {
                    console.log('iOS Flurry Success!');
                    window.plugins.flurry.setSessionReportsOnCloseEnabled(true); // iOS only
                    window.plugins.flurry.setSessionReportsOnPauseEnabled(true); // iOS only
                }, function () {
                    alert('Flurry Error!');
                });
            }
        }
        else{console.log("que paila");}
        ////FLURRY
        var userLang = window.localStorage.getItem("deviceLanguage");
        if(userLang === null){
            checkLanguage();
        }
         

        /**
         * pagingSlider binding
         */
        
        $$('#wrapper').swipeLeft(function(){
            pagingSlider.slidePageFrom(".myPageContainerClass", 'right');
            
        });
        
        $$('#wrapper').swipeRight(function(){
            pagingSlider.slidePageFrom(".myPageContainerClass", 'left');
        });


    
        fillGrid();    

        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');

//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');

//        console.log('Received Event: ' + id);
    }
};


///MEMEDIT
function showInfo(){
    userLang = window.localStorage.getItem("deviceLanguage");
    if(userLang == "es"){
        swal({   title: "Easy Memes v1.0",   text: "<span id='thanks'>Contacto: <a href=\"mailto:danywarner@gmail.com \" style=\"text-decoration: none;\">danywarner@gmail.com</a><br> Twitter: <a href=\"http://twitter.com/danywarner\" style=\"color:#58a9f1;text-decoration: none;\">@danywarner</a><br/>Agradecimientos: <br/><a href=\"http://twitter.com/jhohantorres\" style=\"color:#58a9f1;text-decoration: none;\">@JhohanTorres</a><br/><a href=\"http://twitter.com/jalejoleon\" style=\"color:#58a9f1;text-decoration: none;\">@Jaleoleon</a><br/> </span>",   imageUrl: "./icons/raptor180.png", html: true });
    }else{
        swal({   title: "Easy Memes v1.0",   text: "<span id='thanks'>Contact: <a href=\"mailto:danywarner@gmail.com\">danywarner@gmail.com</a><br> Twitter: <a href=\"http://twitter.com/danywarner\" style=\"color:#58a9f1;text-decoration: none;\">@danywarner</a><br/>Thanks to: <br/>Alejandro León<br/>Jhohan Torres<br> </span>",   imageUrl: "./icons/raptor180.png", html: true });
    }
    
}

function setVariables(){

    userLang = window.localStorage.getItem("deviceLanguage");
    var backText = document.getElementById("BackToGridk");
    var placeHolderTopText;
    var placeHolderBtmText;
    if (userLang == "es"){
        placeHolderTopText = "Texto superior";
        placeHolderBtmText = "Texto inferior";
        backText.innerHTML = "Atrás";
    }
    else if(userLang == "de"){
        placeHolderTopText = "Top-text";
        placeHolderBtmText = "Untertext";
        backText.innerHTML = "Zurück";
    }
    else if(userLang == "fr"){
        placeHolderTopText = "Texte du haut";
        placeHolderBtmText = "Texte du bas";
        backText.innerHTML = "Précédent";
    }
    else if(userLang == "it"){
        placeHolderTopText = "Testo superiore";
        placeHolderBtmText = "Testo inferiore";
        backText.innerHTML = "Indietro";
    }
    else {
        placeHolderTopText = "Top Text";
        placeHolderBtmText = "Bottom Text";
        backText.innerHTML = "Back";
    }
    
    $("#topTextk").attr('placeholder',placeHolderTopText);
    $("#bottomTextk").attr('placeholder',placeHolderBtmText);
}

function start(fuente){
    cropped = false;
    window.sessionStorage.clear();
    var placeHolderText;
    $("#topTextk").val("");
    $("#bottomTextk").val("");

    //top.addEventListener("keyup", setCropedFalse);
    //bottom.addEventListener("keyup", setCropedFalse);
        
    if(fuente === "abcxyz.jpg") {
       /* var i2 = src.search("abcxyz=")+7;
        imageData = src.substring(i2,src.length);
        img.src = imageData;*/
    }
    else{
        $("#kkk").attr('src',fuente);
    }

    ////hacerlo siempre. en las precargadas se bloquea si se intenta hacer de otra forma
    //setTimeout(function(){ adjustSize(img); }, 100);

    
    
    
    
   /* var fontSize = "30px";
    top.style.fontSize = fontSize;
    bottom.style.fontSize = fontSize;
    if(screen.width == 768){
            fontSize = "44px";
            top.style.fontSize = fontSize;
            bottom.style.fontSize = fontSize;
    }
    else if(screen.width == 414){
            fontSize = "40px";
            top.style.fontSize = fontSize;
            bottom.style.fontSize = fontSize;
    }*/
    
    

} 

function setCropedFalse(){
    cropped = false;
}



function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            context.strokeText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
        context.strokeText(line, x, y);
}

function adjustSize(img){
    var MAX_WIDTH = 300;
    var MAX_HEIGHT = 300;
    var high = false;
    var wide = false;
    width = img.width;
    height = img.height;

    if (width > height) {
      if (width > MAX_WIDTH) {
        height *= MAX_WIDTH / width;
        width = MAX_WIDTH;
        wide = true;
      }
    } else {
      if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }
    }

    //alert("W: "+width+" H: "+height);
    img.width = width;
    img.height = height;
    
    img.style.display = "inherit";
    /*if(cropped == true && sizeStored == false){
        sizeStored = true;
        window.localStorage.setItem("width", width);
        window.localStorage.setItem("height", height);
    }*/
    document.getElementById("topText").style.display = "inherit";
    document.getElementById("bottomText").style.display = "inherit";
    if(wide === true ){
        document.getElementById("topText").style.marginTop = "-"+height+"px";
    }
}


function crop(){
    if(cropped === false){
        cropped = true;
            var srcCrop=fuente;
            /*if(srcCrop!="abcxyz.jpg"){
                srcCrop = "img/"+srcCrop;
            }
            else{
                srcCrop = imageData;
            }
            imgCrop.src = srcCrop;*/
            $('#imgcrop').attr('src', srcCrop);
        
        var ccc = document.getElementById("imgcrop");
        var w = 300;
        var h = 300;
        var topText = document.getElementById("topTextk");
        var bottomText = document.getElementById("bottomTextk");
        //setTimeout(function(){ adjustSize(imgCrop); }, 1000);
        
        /*if(w>0){
            window.sessionStorage.setItem("width", w);
            window.sessionStorage.setItem("height", h); 
        }else{
            w = window.sessionStorage.getItem("width");
            h = window.sessionStorage.getItem("height");
            imgCrop.width = w;
            imgCrop.height = h;
        }*/
        //alert("w: "+ ccc.width);
        canvas.width = w;
        canvas.height = h;
        if(w === 0 || w === null){
            alert("W: "+w+" h: "+h);
        }
        var ctx = canvas.getContext('2d');
        ctx.drawImage(ccc, 0,0,w,h, 0,0,w,h);
        var fontSize = 50*(h/500);
        if(w > h){
            fontSize = 50*((h+100)/500);
        }
        if(screen.width == 768){
            fontSize = 30;
        }
        ctx.font = 'bold '+fontSize+'px Helvetica';
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.textAlign = 'center';
        ctx.fillStyle = "#ffffff";

        wrapText(ctx, topText.value.toUpperCase(), w/2, 30, w, 35);
        wrapText(ctx, bottomText.value.toUpperCase(), w/2, h*0.82, w, 35); 

        
        /*setTimeout(function(){ 
            window.plugins.socialsharing.share(null, 'Android', 'data:image/jpeg;base64,'+canvas.toDataURL(), null);
        }, 5);*/
        base64=canvas.toDataURL();
        window.plugins.socialsharing.share(null, 'Android', 'data:image/jpeg;base64,'+base64, null);
        //window.plugins.socialsharing.share(null, 'Android filename', 'data:image/png;base64,R0lGODlhDAAMALMBAP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUKAAEALAAAAAAMAAwAQAQZMMhJK7iY4p3nlZ8XgmNlnibXdVqolmhcRQA7', null);
    }else{
        window.plugins.socialsharing.share(null, 'Android', 'data:image/jpeg;base64,'+base64, null);
    }
    document.getElementById("imgcrop").style.width = 0;
    document.getElementById("imgcrop").style.height = 0;
        
        //window.plugins.socialsharing.share(null, 'Android filename', 'data:image/png;base64,R0lGODlhDAAMALMBAP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUKAAEALAAAAAAMAAwAQAQZMMhJK7iY4p3nlZ8XgmNlnibXdVqolmhcRQA7', null);
        
        //window.plugins.socialsharing.share(null, null, 'https://www.google.nl/images/srpr/logo4w.png', null);

}

$( document ).on( "pagebeforeshow", "#memeedit", function( event ) {
    fuente = "img/"+passDataObject.selectedId;
    start(fuente);
    //start(fuente);
});
$( document ).on( "pageinit", "#memeedit", function( event ) {
    setVariables();
});


//CLOSEMEMEDIT
