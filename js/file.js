



var x = window.matchMedia("(max-width:992px)")
var z = window.matchMedia("(max-width:437px)")

myFunction(x) 
x.addListener(myFunction) 





function myFunction(x) {
  if (x.matches) { 
$('.letsgo .owl-carousel').owlCarousel({
    dots:true,
    nav:true,
    loop:true,
    margin:10,
    smartSpeed:400,
    responsiveClass:true,
    responsive:{
       0:{
        items:1,
           nav:true
    }
    }
})
 
    let newSpan = document.createElement('span')
    let newSpan2 = document.createElement('span')
    newSpan.setAttribute('class','icon-cheveron-right')
    newSpan2.setAttribute('class','icon-cheveron-left')
   document.querySelector('.letsgo .owl-next').appendChild(newSpan) 
   document.querySelector('.letsgo .owl-prev').appendChild(newSpan2) 
      
      
      
      
   $('.meetGuides .owl-carousel').owlCarousel({
    dots:false,
    nav:true,
    loop:true,
        smartSpeed:400,
    responsiveClass:true,
    responsive:{
       0:{
        items:1,
           
    },
     769:{
         items:2,
         
     }
        
    }
})   
      
      
        let newSpan1 = document.createElement('span')
    let newSpan3 = document.createElement('span')
    newSpan1.setAttribute('class','icon-cheveron-right')
    newSpan3.setAttribute('class','icon-cheveron-left')
   document.querySelector('.meetGuides .owl-next').appendChild(newSpan1) 
   document.querySelector('.meetGuides .owl-prev').appendChild(newSpan3) 
      
    
      
  } if(z.matches) {
      
      var textP = document.querySelector('#facebook-live .facebook-live__content p:nth-of-type(1)')
      
      textP.textContent = 'From our favorite place in town to the best ‘secret’ study locales, you’ll get a quick preview of some of our favorite spots on campus and in Aurora'
      
  }
 
    
}



window.onresize = function(){
    
    if(window.innerWidth > 992){
       
       $('.letsgo .owl-carousel').owlCarousel('destroy');
       /* $('.meetGuides .owl-carousel').owlCarousel('destroy');*/
    }
     if(window.innerWidth > 992){
       
       $('.meetGuides .owl-carousel').owlCarousel('destroy');
       /* $('.meetGuides .owl-carousel').owlCarousel('destroy');*/
    }
     if(window.innerWidth > 437){
        var textP = document.querySelector('#facebook-live .facebook-live__content p:nth-of-type(1)')
      
      textP.textContent = 'From the best place to grab a bite to ‘secret’ study locales, you’ll get a quick preview of some of our favorite spots on campus and in Aurora.'
    }
  
  
}


//Click Event for Meeting

function tranformCard(){
    
    var allCards = document.querySelectorAll('.mycard')
    
    allCards.forEach((item)=>{
        
        item.onclick = function(){
            
            
           if(!(item.classList.contains('rotate'))){
               this.classList.add('rotate')
               
           }else {
               this.classList.remove('rotate')
           }
           
            
        }
        
        if( window.matchMedia("(min-width: 767px)").matches){
            
                item.onmouseenter = function(){
             for(var i = 0 ; i < allCards.length ; i++){
                
                allCards[i].classList.remove('rotate')
            }
            this.classList.add('rotate')
            
        }
        
          item.onmouseleave = function(){
          
            this.classList.remove('rotate')
            
        }
            
        }
        
   
        
        
        
    })
    
  
}


tranformCard()



//change the text 





function activeLink(){
    
    
    
    var allLinks = document.querySelectorAll('.navbar__navlinks > a')
    
    
    allLinks.forEach((link)=>{
        
        
        link.onclick = function(){
            
            
            for(var i = 0 ; i < allLinks.length ; i++){
                
                allLinks[i].classList.remove('active')
            }
            
            link.classList.add('active')
        }
    })
}

activeLink()




//scrollTop


var scrollTopButton = document.querySelector("#scrollTop");

scrollTopButton.addEventListener("click", scrollPageTop);

function scrollPageTop(e) {
    e.preventDefault();

    scrollToTop(800);
}



function scrollToTop(duration) {
    if (document.scrollingElement.scrollTop === 0) return;

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance,
        oldTimestamp = null;

    function step(newTimestamp) {
        if (oldTimestamp !== null) {
            scrollY -= (totalScrollDistance * (newTimestamp - oldTimestamp)) / duration;
            if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0);
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

window.onscroll = function(){
    
     if (window.pageYOffset > 1000) {
        scrollTopButton.classList.add("hideopacity");
    } else {
        scrollTopButton.classList.remove("hideopacity");
    }
}








