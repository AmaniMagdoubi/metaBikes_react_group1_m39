import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import {CarouselImg} from "../styles/8-local-interests.styles"
// https://sag1v.github.io/react-elastic-carousel/


class CarouselItems extends Component {
    constructor(props) {
        super(props)
        this.breakPoints = [
          { width: 1, itemsToShow: 1 },
          { width: 550, itemsToShow: 2},
          { width: 1000, itemsToShow: 2},
          { width: 1150, itemsToShow: 3},
          { width: 1450, itemsToShow: 5 },
          { width: 1750, itemsToShow: 6 },
        ]
      }
    state = {
        items: [
            // Follow this link to change photo --> https://picsum.photos/images#6
            // Change photo by changing the first number in the links below = id
            {id: 1, title:"item #1",url:"https://picsum.photos/id/1022/1500/1000"}, 
            {id: 2, title:"item #2",url:"https://picsum.photos/id/1035/1500/1000"}, 
            {id: 3, title:"item #3",url:"https://picsum.photos/id/191/1500/1000"}, 
            {id: 4, title:"item #4",url:"https://picsum.photos/id/164/1500/1000"}, 
            {id: 5, title:"item #5",url:"https://picsum.photos/id/168/1500/1000"}, 
            {id: 6, title:"item #6",url:"https://picsum.photos/id/163/1500/1000"},
            {id: 7, title:"item #7",url:"https://picsum.photos/id/158/1500/1000"}, 
            {id: 8, title:"item #8",url:"https://picsum.photos/id/154/1500/1000"},  

        ]
    }

    render () {
        const { items } = this.state; 
        return (
            <Carousel 
            breakPoints={this.breakPoints}
            onNextEnd={(currentItem, pageIndex) =>
              alert(JSON.stringify({ currentItem, pageIndex }))
            }
            easing="cubic-bezier(1,.15,.55,1.54)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
            transitionMs={700}
            enableAutoPlay autoPlaySpeed={5000}
            
            
            
            >
                { items.map(item => 
                <CarouselImg key={item.id} >
                    <img src={item.url}/>
                </CarouselImg>)}

            </Carousel>
        )
    }
}

export default CarouselItems; 