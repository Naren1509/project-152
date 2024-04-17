AFRAME.registerComponent('cars',{
    schema:{
        rotateY:{type:"number",default:0},
        ClickCounter:{type:"number",default:0}
    },

    update:function(){
        window.addEventListener("click",(e)=>{
            this.data.ClickCounter = this.data.ClickCounter + 1;
            if(this.data.ClickCounter === 1){
                const rotation = {x:0,y:20,z:0};
                this.el.setAttribute("rotation",rotation);
            }else if(this.data.ClickCounter === 2){
                const rotation = {x:0,y:60,z:0};
                this.el.setAttribute("rotation",rotation);
            }else if(this.data.ClickCounter === 3){
                const rotation = {x:0,y:110,z:0};
                this.el.setAttribute("rotation",rotation);
            }else if(this.data.ClickCounter === 4){
                const rotation = {x:0,y:160,z:0};
                this.el.setAttribute("rotation",rotation);
            }else if(this.data.ClickCounter === 5){
                this.data.ClickCounter = 0;
                const rotation = {x:0,y:20,z:0};
                this.el.setAttribute("rotation",rotation);
            }
        })
    }
})