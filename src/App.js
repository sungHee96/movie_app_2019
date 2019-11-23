import React from 'react';

function Food({fav}){
return <h4>성희씨는 {fav}!! 아주 좋아한다!!</h4>
}

function App() {
  return(
    <div> 
      <h1>Hello!!!!! 나성희씨의 리액트 공부</h1>
      <Food fav="고봉민 돈까스 김밥" />
      <Food fav="BHC 치즈볼" />
      <Food fav="광어지느러미" />
    </div>
    );
}

export default App;
