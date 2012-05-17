//jQuery extend
$.fn.flicker = function(cssText,step,num,callback){
        var animate ;
            var o =this.eq(0);
            var oStyle = o[0].style.cssText;
            var fn = function(){
                fn.n = fn.n || 0;
                if(fn.n>num){
                    window.clearInterval(animate);
                    o[0].style.cssText = oStyle;
                    if(typeof callback == "function"){
                        callback();
                    }
                    return;
                }
                if(fn.n%2 == 0){
                    o[0].style.cssText = cssText;
                }
                else{
                    o[0].style.cssText = oStyle;
                }
                fn.n++;
            }
            animate = window.setInterval(fn,step); 
        return this;
    };

