import React, { Component } from "react";
import Carousel from "react-elastic-carousel"; 

class CarouselItems extends Component {
    state = {
        items: [
            {id: 1, title:"item #1",url:"https://random.imagecdn.app/500/500"}, 
            {id: 2, title:"item #2",url:"https://random.imagecdn.app/500/500"}, 
            {id: 3, title:"item #3",url:"https://random.imagecdn.app/500/500"}, 
            {id: 4, title:"item #4",url:"https://random.imagecdn.app/500/500"}, 
            {id: 5, title:"item #5",url:"https://random.imagecdn.app/500/500"}, 
            {id: 6, title:"item #6",url:"https://random.imagecdn.app/500/500"},
            {id: 7, title:"item #7",url:"https://random.imagecdn.app/500/500"}, 
            {id: 8, title:"item #8",url:"https://random.imagecdn.app/500/500"},  

        ]
    }

    render () {
        const { items } = this.state; 
        return (
            <Carousel>
                { items.map(item => <div key={item.id} >
                    <img src={item.url}/>
                </div>
                
                
                ) }
            </Carousel>
        )
    }
}

export default CarouselItems; 