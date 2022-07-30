import React, {useState, useEffect, useRef} from 'react';
import './index.css'

function Index({slides,duration, background}) {

    let total = slides.length;
    const [Active, setActive] = useState(0);

    let SLIDES = useRef({slides:[]})

    useEffect(() => {
        setTimeout(() => {
            nextSlide()
        }, duration?duration:3000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            nextSlide()
        }, duration?duration:3000);
    }, [Active]);

    const nextSlide = () => {
        if(Active<total-1){
            setActive(Active+1)
        }else{
            setActive(0)
        }

    }

    const getState = (active, index) => {
        if(active===0 && index===(total-1)){
            return 'slidePrev'
        }
        if(index===(active-1)){
            return 'slidePrev'
        }else if(index===active){
            return 'slideActive'
        }else{
            return 'slideNext'
        }
    }
    return (
      <div className='carousel'>
        {
          slides.map((slide,index)=>{
            return (
              <div ref={ref=>SLIDES.current.slides[index]=ref} key={index} className={`slide ${getState(Active, index)}`} style={{backgroundImage: `url(${slide})`, backgroundColor: background?background:'#fff'}}/>
            )
          })
        }
      </div>
    );
}

export default Index;
