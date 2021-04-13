var time = 1300;
        var sc = 0;
        var clear = 0;
        var reset = 0;
 //       var enemycounter1 = 0;
 //       var enemycounter2 = 0;
 //       var enemycounter3 = 0;
        score();
        function score() {
    document.getElementById("myscore").innerHTML =
     "Score:"+ sc;
}
      
        
        function enemy(top,anything){
            
            var position = 0;
            
            var id = setInterval(frame,anything);
            
    /*        enemycounter1++;
            if(enemycounter1 > 1)
            {
                clearInterval(id);
                enemycounter1--;
            }
       */
            function frame() {
            
            var elem = document.getElementById("sharkie");
            var elem2 = document.getElementById("squidie");
            
            var elements = document.getElementById('squidie'),
                  styles = window.getComputedStyle(elements),
                    tops = styles.getPropertyValue('top'),
                    lefts = styles.getPropertyValue('left'),
                    rights = styles.getPropertyValue('right');
            
            
            var elementk = document.getElementById('sharkie'),
                  stylek = window.getComputedStyle(elementk),
                    topk = stylek.getPropertyValue('top'),
                    leftk = stylek.getPropertyValue('left'),
                  rightk = stylek.getPropertyValue('right');
                  
            var elementw = document.getElementById('whaletrail'),
                  stylew = window.getComputedStyle(elementw),
                  topw = stylew.getPropertyValue('top'),
                  rightw = stylew.getPropertyValue('right');
            
            //yeah it will be better to crop image
            
                if(tops==topk && rights==rightk ){
                    alert("Game Over\n\nMade by Mihir Baviskar & Ryan La");
                    document.getElementById("over").innerHTML ="Game Over";
                    clearInterval(id);
                    console.log("Clear");
                    clear = 1;
                    reset = 0;
                    
                }
                if(tops==topw && rights==rightw) {
                    alert("Game Over\n\nMade by IHS Computer Science Club");
                    document.getElementById("over").innerHTML ="Game Over";
                    clearInterval(id);
                    console.log("Clear");
                    clear = 1;
                    reset = 0;
                    
                }
                else
                {
                   // console.log('tops'+tops+'topk'+tops+'rights'+rights
                    //+'rightk'+rightk+'lefts'+lefts+'leftk'+leftk);
                
                
                if(position==120) {
                    clearInterval(id);
                    if(anything>10){
                    anything = anything -2;
                    }
                    
                    var x = Math.floor((Math.random() * 4) + 1);
                    if(x==1) {
                        secondenemy(35, anything);
                    }
          /*          else if(x==2)
                    {
                        thirdenemy(75.6, anything);
                    } */
                    else{
                        enemy(50, anything);
                    }
                    sc++;
                    score();
                }
                else{
                    position++;
                    elem.style.right = position - 20 + "%";
                    elem.style.top = top + "%";
                }
                
                }//changed temp
                
                //console.log(elem.style.top);
                //console.log(elem2.style.top);
                //console.log(elem.style.right);
                //console.log(elem2.style.right);
                
            }
        }
        
        function secondenemy(top, anything){
            
            var position = 0;
            
            var id = setInterval(frame,anything);
            
          /*  if(enemycounter2 > 1)
            {
                clearInterval(id);
                enemycounter2 = enemycounter2 - 1;
            }
            
       */
            function frame() {
            
            var elem2 = document.getElementById("whaletrail");
            
            var elements = document.getElementById('squidie'),
                  styles = window.getComputedStyle(elements),
                    tops = styles.getPropertyValue('top'),
                    rights = styles.getPropertyValue('right');
            
            
            var elementk = document.getElementById('whaletrail'),
                  stylek = window.getComputedStyle(elementk),
                    topk = stylek.getPropertyValue('top'),
                    rightk = stylek.getPropertyValue('right');
            
                if(tops==topk && rights==rightk){
                    alert("Game Over");
                    document.getElementById("over").innerHTML ="Game Over";
                    clearInterval(id);
                    clear = 1;
                    reset = 0;
                    elem2.style.right =110+'%';
                }
                else
                {
                
                if(position==120) {
                    clearInterval(id);
                    if(anything>10){
                    anything = anything -2;
                    }
                    var x = Math.floor((Math.random() * 3) + 1);
                    if(x==1) {
                        secondenemy(35, anything);
                    }
               /*     else if(x==2) {
                        thirdenemy(75.6, anything);
                    } */
                    else{
                        enemy(50, anything);
                    }
                    sc++;
                    score();
                }
                else{
                    position++;
                    elem2.style.right = position - 20 + "%";
                    elem2.style.top = top + "%";
                }
                
                }
            }
        }
        
         function seaweedmove(top, anything){
            
            var elem = document.getElementById("seaweedy");
            var position = 0;
            
            var id = setInterval(frame, anything);
            
            var squid = document.getElementById("squidie"),
                styles = window.getComputedStyle(squid),
                    tops = styles.getPropertyValue('top'),
                    rights = styles.getPropertyValue('right');
            
            var shark = document.getElementById("sharkie"),
                stylek = window.getComputedStyle(shark),
                    topk = stylek.getPropertyValue('top'),
                    rightk = stylek.getPropertyValue('right');
       
            function frame() {
                if(clear == 1){
                    clearInterval(id);
                    console.log("Clear");
                }
                else
                {
                    if(position==150) {
                        clearInterval(id);
                        if(anything>15){
                        anything = anything - 3;
                        }
                        seaweedmove(75, anything);
                    }
                    else{
                        position++;
                        elem.style.right = position - 50 + "%";
                        elem.style.top = top + "%";
                    }
                }
            }
        }
        
        function movefloor(top, anything){
            
            var elem = document.getElementById("floory");
            
            var position = 0;
            
            var id = setInterval(frame, anything);
       
            var squid = document.getElementById("squidie"),
                styles = window.getComputedStyle(squid),
                    tops = styles.getPropertyValue('top'),
                    rights = styles.getPropertyValue('right');
            
            var shark = document.getElementById("sharkie"),
                stylek = window.getComputedStyle(shark),
                    topk = stylek.getPropertyValue('top'),
                    rightk = stylek.getPropertyValue('right');
       
            function frame() {
                if(clear == 1){
                    clearInterval(id);
                    console.log("Clear");
                }
                else
                {
                    if(position==100) 
                    {
                        clearInterval(id);
                        if(anything>14)
                        {
                            anything = anything -2;
                        }
                        movefloor(85, anything);
                    }
                    
                    else
                    {
                        position++;
                        elem.style.right = position - 100 + "%";
                        elem.style.top = top + "%";
                    }
                }
            }
        } 
        
        function bubbleup(position){
            
            var elem = document.getElementById("bubbly");
            
            var top = 30;
            
            var id = setInterval(frame, 40);
       
            var squid = document.getElementById("squidie"),
                styles = window.getComputedStyle(squid),
                    tops = styles.getPropertyValue('top'),
                    rights = styles.getPropertyValue('right');
            
            var shark = document.getElementById("sharkie"),
                stylek = window.getComputedStyle(shark),
                    topk = stylek.getPropertyValue('top'),
                    rightk = stylek.getPropertyValue('right');
       
            function frame() {
                if(tops == topk && rights == rightk){
                    clearInterval(id);
                    
                }
                else
                {
                    if(top==-10) 
                    {
                        clearInterval(id);
                        bubbleup(35);
                    }
                    
                    else
                    {
                        top--;
                        elem.style.right = position + "%";
                        elem.style.top = top + "%";
                    }
                }
            }
        } 
         //I think it's better to do it with arrays
         
        function squidplace() {
            var sd = document.getElementById("squidie");
            sd.style.top = 50 + "%";
        }
        
     /*   document.addEventListener('keydown', squiddive, false);
        function squiddive() {
            
            var e = e || window.event;
            
            if(e.key == "ArrowDown")
            {
                if(time>404){
                    time = time-23;
                }
                console.log('time'+ time);
                var sd = document.getElementById("squidie");
                sd.style.top = 65 + "%";
                
                setTimeout(squidplace, time)
            }
        } */
        
         document.addEventListener('keydown', squidjump, false);
         
        function squidjump() {
           
           var e = e || window.event;

            if (e.key == "ArrowUp") {
                if(time>404){
                time = time-23;
                }
                console.log('time'+ time);
                var sd = document.getElementById("squidie");
                sd.style.top = 35 + "%";
                /*var jump = 35;
                var gradual_jump = 50;
                while(sd.style.top>(jump + "%")){
                sd.style.top = 50 + "%";
                gradual_jump=gradual_jump-1;
                sd.style.top =gradual_jump + "%";
                
                console.log(sd.style.top);
                }*/
                // logic for gradual jump but you can barely tell the difference
                
                
                setTimeout(squidplace, time);
                
            }
        }  
        
        
        function startGame() {
            if(reset == 0)
            {
            alert("To jump press the up arrow. Don't let the shark or whale eat the squid");
            sc = 0;
            document.getElementById("myscore").innerHTML =
            "Score:"+ sc;
            document.getElementById("over").innerHTML ="";
            time = 1300;
            clear = 0;
            enemy(50,40);
	        seaweedmove(75, 50);
	        movefloor(85, 50);
	        bubbleup(35);
	       //secondenemy(30);
	       
            }
                reset = 1;
	       
        }
        
        
        
        
        
        
        
 /*       
        function thirdenemy(top, anything)
        {
                    
                var position = 0;
                top = 75.6;
                var id = setInterval(frame,anything);
                
                function frame() {
                    
                var elem2 = document.getElementById("squidie");
            
                var elements = document.getElementById('squidie'),
                  styles = window.getComputedStyle(elements),
                    tops = styles.getPropertyValue('top'),
                    lefts = styles.getPropertyValue('left'),
                    rights = styles.getPropertyValue('right');
            
            
                var elementc = document.getElementById("crabbie"),
                  stylec = window.getComputedStyle(elementc),
                    topc = stylec.getPropertyValue('top'),
                    leftc = stylec.getPropertyValue('left'),
                  rightc = stylec.getPropertyValue('right');
                  
                  if(sc>=1)
                {
                
                    elementc.style.visibility="visible";
                      
                  if(tops==topc && rights==rightc){
                    alert("Game Over");
                    document.getElementById("over").innerHTML ="Game Over";
                    clearInterval(id);
                    clear = 1;
                    reset = 0;
                    elementc.style.right = 110 +'%';
                }
                
                else
                {
                
                if(position == 120) 
                {
                    clearInterval(id);
                    
                    if(anything>10)
                    {
                        anything = anything -2;
                    }
                    
                    var x = Math.floor((Math.random() * 3) + 1);
                    
                    if(x==2) 
                    {
                        thirdenemy(75.6, anything);
                    }
                    else if(x==1)
                    {
                        secondenemy(35, anything);
                    }
                    else{
                        enemy(50, anything);
                    }
                    sc++;
                    score();
                }
                else{
                    position = position + 1;
                    elementc.style.right = position - 10 + "%";
                    elementc.style.top = top + "%";
                }
                
                }
            }
        }
    }
        
        
	   */
	        
  //  	        document.getElementById("squidie").addEventListener("click", function(){
     //               this.style.top = 35 + "%";
       //             setTimeout(squiddown, 1000);
         //   });
        
        /*window.onload = function() {
          
	        enemy(50,40);
	        seaweedmove(75, 50);
	        movefloor(85, 50);
	        bubbleup(35);
	       // secondenemy(30);
	       
	       document.onkeydown = squidjump;
	   
	        
  //  	        document.getElementById("squidie").addEventListener("click", function(){
     //               this.style.top = 35 + "%";
       //             setTimeout(squiddown, 1000);
         //   });
	        
        }; */