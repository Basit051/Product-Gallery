let productImg = document.getElementById("productImg");
        let btn = document.getElementsByClassName("btn");
        
        btn[0].onclick = function(){
            productImg.src = "images/black shirt.jpg";
            for(bt of btn){
                bt.classList.remove("active");
            }
            this.classList.add("active")
        }
        btn[1].onclick = function(){
            productImg.src = "images/product image 2.jpg";
            for(bt of btn){
                bt.classList.remove("active");
            }
            this.classList.add("active")
        }
        btn[2].onclick = function(){
            productImg.src = "images/product image 3.jpg";
            for(bt of btn){
                bt.classList.remove("active");
            }
            this.classList.add("active")
        }