'use client';
import { useEffect } from 'react';
import './home.css';

function Transform() {
 
useEffect(() => {
  const selectElem = document.querySelector("select");
  const example = document.querySelector("#example-element");
  if (!selectElem) return;
  if (!example) return;
  selectElem.addEventListener("change", () => {
    if (selectElem.value === "Choose a function") {
      return;
    } else {
      example.style.transform = `rotate3d(1, 1, 1, 30deg) ${selectElem.value}`;
      setTimeout(() => {
        example.style.transform = "rotate3d(1, 1, 1, 30deg)";
      }, 2000);
    }
  });

}, []);
 return (
  <main>
  <section id="example-element">
    <div className="face front">1</div>
    <div className="face back">2</div>
    <div className="face right">3</div>
    <div className="face left">4</div>
    <div className="face top">5</div>
    <div className="face bottom">6</div>
  </section>

  <div className="select-form">
    <label htmlFor="transfunction">选择变换函数</label>
    <select id="transfunction">
      <option selected>选择函数</option>
      <option>rotate(360deg)</option>
      <option>rotateX(360deg)</option>
      <option>rotateY(360deg)</option>
      <option>rotateZ(360deg)</option>
      <option>rotate3d(1, 1, 1, 90deg)</option>
      <option>scale(1.5)</option>
      <option>scaleX(1.5)</option>
      <option>scaleY(1.5)</option>
      <option>scaleZ(1.5)</option>
      <option>scale3d(1, 1.5, 1.5)</option>
      <option>skew(17deg, 13deg)</option>
      <option>skewX(17deg)</option>
      <option>skewY(17deg)</option>
      <option>translate(100px, 100px)</option>
      <option>translateX(100px)</option>
      <option>translateY(100px)</option>
      <option>translateZ(100px)</option>
      <option>translate3d(50px, 50px, 50px)</option>
      <option>perspective(200px)</option>
      <option>matrix(1, 2, -1, 1, 80, 80)</option>
      <option>matrix3d(1,0,0,0,0,1,3,0,0,0,1,0,50,100,0,1.1)</option>
    </select>
  </div>
</main>

 )
}

export default Transform;