import React from "react";

export const Floats = () => {
  document.addEventListener("mousemove", parallax);
  function parallax(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
      const speed = layer.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 50;
      const y = (window.innerHeight - e.pageY * speed) / 50;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  return (
    <div className="floatwrapper">
      <p>
        <span className="orange layer f1" data-speed="3">
          css
        </span>
      </p>
      <p>
        <span className="orange layer f2" data-speed="1">
          html
        </span>
      </p>
      <p>
        <span className="orange layer f3" data-speed="3">
          javascript
        </span>
      </p>
      <p>
        <span className="orange layer f4" data-speed="-3">
          php
        </span>
      </p>
      <p>
        <span className="orange layer f5" data-speed="3">
          sass
        </span>
      </p>
      <p>
        <span className="orange layer f6" data-speed="-3">
          git
        </span>
      </p>
      <p>
        <span className="orange layer f7" data-speed="3">
          bootstrap
        </span>
      </p>
      <p>
        <span className="orange layer f8" data-speed="-3">
          mongodb
        </span>
      </p>
      <p>
        <span className="orange layer f9" data-speed="3">
          mysql
        </span>
      </p>
      <p>
        <span className="orange layer f10" data-speed="3">
          react
        </span>
      </p>
    </div>
  );
};
