var prevScrollpos = window.pageYOffset;
        window.onscroll = function(){
            var currentScrollPos = window.pageYOffset;
        if(prevScrollpos > window.pageYOffset){
            document.getElementById("navbar").style.top = "0";
        }else{
            document.getElementById("navbar").style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
    }