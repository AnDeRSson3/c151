AFRAME.registerComponent("move-van", {
    schema:{
        modelRef: {type:"string", default:"Exquisite Kieran\Exquisite Kieran.glb"}
        
    },
    init: function(){
        this.el.setAttribute("gltf-model", this.data.modelRef);
        const position = {x:0, y:-1, z:-9};
        const rotation={x:-90, y:0, z:0};
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
    }
    
})

