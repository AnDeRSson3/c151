AFRAME.registerComponent("cylid", {
    schema:{
        radius: {type:"number", default: 45},
        height: {type:"number", default: 3}
        
    },
    init: function(){
       
       this.el.setAttribute("geometry",{
        primitive:"cylinder",
        radius: this.data.radius,
        height: this.data.height
       })
       this.el.setAttribute("material", {color: "black"})
    }
})