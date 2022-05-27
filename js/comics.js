AFRAME.registerComponent("comic",{
    init: function(){
        this.comicscontainer = this.el;
    },
    createCards : function(){
        const thumbNailsRef = [
            {
               id  :"avengers",
               title : "Avengers" ,
               url : "./assets/avengers.jpg"
            },
            {
                id : "captainAmerica",
                title : "Captain America",
                url: "./assets/CaptainAmerica.jpg"
            },
            {
                id : "doctorStrange" ,
                title : "Doctor Strange",
                url : "./assets/DoctorStrange.jpeg"
            },
            {
                id : "ironMan",
                title : "Iron Man",
                url : "./assets/ironMan.jpg"
            },
            {
                id : "wandaVision",
                title : "Wanda Vision",
                url : "WandaVision.jpg"
            }
        ]
        let prevoiusXPosition = -80

        for(var item in thumbNailsRef){
           const posX = prevoiusXPosition + 25
           const posY = 10
           const posZ = -40
           const position = {x:posX,y:posY,z:posZ}
           prevoiusXPosition = posX

           const borederEl = this.createBorder(position,item.id)
           const thumbnail = this.createThumbNail(item)
           borderEl.appendChild(thumbnail)
           const titleEl = this.createTitle(position,item)
           borderEl.appendChild(titleEl)
           this.placesContainer.appendChild(borderEl);
        }
    },

    createBorder : function(position,id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive : "rectangle",
            width : 7,
            height : 10
        })
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("material",{
            color:"blue",
            opacity : 1
        })
        return entityEl
    },

    createThumbNail : function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
          primitive:"rectangle",
          width:5,
          height:8

        })
        entityEl.setAttribute("material",{
          src: item.url
        })
        return entityEl
    },

    createTitle : function(position,item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("text",{
          font:"exo2bold",
          align:"center",
         width:70,
         color:"white",
         value:item.title
        })
        const ElPosition = position
        ElPosition.y = -20
        entityEl.setAttribute("position",ElPosition)
        entityEl.setAttribute("visible",true)
        return entityEl
    }
})     