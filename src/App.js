import React from 'react';
import PropTypes from "prop-types";
import { prototype } from 'events';

const foodILike = [
  {
    id:1,
    name: "kimbap",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/04/0461907459756bc3a56472da407a1a9d1.jpg",
    rating: 5
    },
  {
    id:2,
    name: "bhc",
    image:
      "http://mblogthumb4.phinf.naver.net/MjAxNzEwMjRfMTgz/MDAxNTA4ODMzMDgwNjEx.HQBsxjO05BokJ629fdihazfaficAN69a0IoVppJ_bLMg.qJV1KzIrKvI01Ld1OaeblFCpsVrkLs7dZoeVhVX4k2wg.JPEG.lllsarulll/bhc_%EC%B9%98%EC%A6%88%EB%B3%BC_%ED%9B%84%EA%B8%B0_%283%29.JPG?type=w800",
    rating: 4.3
  },
  {
    id:3,
    name: "rawFish",
    image:
    "http://t1.daumcdn.net/liveboard/diningcode/c00be7650fc346059ea0dbf29a0aaaa0.JPG",
    rating: 3.5
  }
];

function Food({name, picture, rating}) {
    return (
        <div>
            <h4>성희씨는 {name}!! 아주 좋아한다!!</h4>
            <h4>성희씨의 점수는요?? {rating}/5.0</h4>
            <img src={picture} alt={name}/>
        </div>
    );
}

  Food.propTypes = {
     name: PropTypes.string.isRequired,
     picture: PropTypes.string.isRequired,
     rating: PropTypes.string.isRequired
  };

function App() {
  return(
    <div> 
        <h1>☆성희씨의 리액트 공부공부☆</h1>
        <h1> </h1>
        {foodILike.map(dish => (
          <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}/>
        ))}
      </div>
    );
}

export default App;
