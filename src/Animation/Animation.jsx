import React, { useState } from "react";
import style from "./Animation.module.css";
import { FaCircleArrowRight } from "react-icons/fa6";

function Animation() {
  const [active, IsActive] = useState("");
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  const handleHover1 = () => {
    setIsHovered1(!isHovered1);
  };
  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };
  const handleHover3 = () => {
    setIsHovered3(!isHovered3);
  };
  const handleHover4 = () => {
    setIsHovered4(!isHovered4);
  };
  const handleHover5 = () => {
    setIsHovered5(!isHovered5);
  };
  const handleHover6 = () => {
    setIsHovered6(!isHovered6);
  };

  return (
    <>
      <div className={style.backAni}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-4 col-md-4 col-sm-4 text-start" onMouseEnter={handleHover1} onMouseLeave={handleHover1}>
              {isHovered1 ? (
                <div className={style.cont}>
                  <div className={style.animationH1}>
                    {" "}
                    <h2 className={style.animation1}>CSS Animation Showcase</h2>
                    <p className={style.animation2}>Get inspired by these CSS animation examples.</p>
                  </div>

                  <div className={style.overlay}>
                    <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" width="50px"></img>
                  </div>
                </div>
              ) : (
                <>
                  <div className={style.animation}>
                    <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" className={style.rightArrow}></img>{" "}
                    <h2 className={style.animation1}>CSS Animation Showcase</h2>
                    <p className={style.animation2}>Get inspired by these CSS animation examples.</p>
                  </div>
                </>
              )}
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-start" onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
              {isHovered2 ? (
                <div className={style.cont}>
                  <div className={style.animationH2}>
                    {" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                  <div>
                    <div className={style.overlay}>
                      <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" width="50px"></img>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={style.animation}>
                    <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" className={style.rightArrow1}></img>{" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                </>
              )}
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-start" onMouseEnter={handleHover3} onMouseLeave={handleHover3}>
              {isHovered3 ? (
                <div className={style.cont}>
                  <div className={style.animationH3}>
                    {" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                  <div>
                    <div className={style.overlay}>
                      <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" width="50px"></img>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={style.animation}>
                    <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" className={style.rightArrow2}></img>{" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                </>
              )}
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-start" onMouseEnter={handleHover4} onMouseLeave={handleHover4}>
              {isHovered4 ? (
                <div className={style.cont}>
                  <div className={style.animationH4}>
                    {" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                  <div>
                    <div className={style.overlay}>
                      <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" width="50px"></img>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={style.animation}>
                    <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" className={style.rightArrow3}></img>{" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                </>
              )}
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-start" onMouseEnter={handleHover5} onMouseLeave={handleHover5}>
              {isHovered5 ? (
                <div className={style.cont}>
                  <div className={style.animationH5}>
                    {" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                  <div>
                    <div className={style.overlay}>
                      <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" width="50px"></img>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={style.animation}>
                    <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" className={style.rightArrow4}></img>{" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                </>
              )}
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 text-start" onMouseEnter={handleHover6} onMouseLeave={handleHover6}>
              {isHovered6 ? (
                <div className={style.cont}>
                  <div className={style.animationH6}>
                    {" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                  <div>
                    <div className={style.overlay}>
                      <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" width="50px"></img>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={style.animation}>
                    <img src="https://coolcssanimation.com/img/arrow-right-circle-full.svg" className={style.rightArrow5}></img>{" "}
                    <h2 className={style.animation1}>CSS Animation Tutorial</h2>
                    <p className={style.animation2}>Learn how to code cool CSS animations with HTML and CSS.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Animation;
