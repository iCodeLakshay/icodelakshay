'use client';
import React from 'react';

const Loader = () => {
  return (
    <div className="min-w-screen min-h-screen my-auto" style={{ background: "radial-gradient(ellipse at top, #2b1055 0%, #000000 100%)" }}>
      <h1 className="font-[Bricolage_Grotesque] text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a084ee] via-[#6826ce] to-[#2b1055] drop-shadow-lg tracking-tight text-center animate-pulse pt-20 md:pt-30 lg:pt-36 lg:pb-5">
        You&apos;re entering into another dimension...
      </h1>
      
      <div className="loader-container">
        <div className="main-wrap">
          <div className="wrapper">
            <div className="c1">
              <div className="c2">
                <div className="c3">
                  <div className="rect1">
                    <div className="mini-c">
                      <div className="mini-c1" />
                      <div className="mini-c2" />
                      <div className="mini-c3" />
                      <div className="mini-c4" />
                    </div>
                    <div className="c4">
                      <div className="rect2">
                        <div className="rect3" />
                      </div>
                    </div>
                    <div className="c5" />
                    <div className="c6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          perspective: 1000px;
        }

        .main-wrap div {
          transform-origin: center center;
        }

        .wrapper {
          position: relative;
        }

        .c1 {
          border-radius: 100%;
          height: 200px;
          width: 200px;
          border: 1px solid #e7b439;
          animation: rotFirst 30s linear infinite, fadeIn 2s forwards;
          transform: rotateX(10deg) rotateY(10deg);
          transform-style: preserve-3d;
        }

        .c1 .c2 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          border-radius: 100%;
          height: 190px;
          width: 190px;
          border: 1px solid #ffb61e;
          border-style: dashed;
        }

        .c1 .c2 .c3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          border: 1px solid #ffb61e;
          height: 180px;
          width: 180px;
          border-radius: 100%;
          animation: changeColor 30s linear infinite;
        }

        .c1 .c2 .c3 .rect1 {
          border: 1px solid #ffb61e;
          border-style: dotted;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          height: 120px;
          width: 120px;
        }

        .c1 .c2 .c3 .rect1 .mini-c {
          text-align: center;
          height: 120px;
          width: 120px;
          position: relative;
        }

        .c1 .c2 .c3 .rect1 .mini-c .mini-c1 {
          position: absolute;
          top: -12%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          height: 20px;
          width: 20px;
          border: 3px solid #ffb61e;
          border-radius: 100%;
          animation: changeColor 30s linear infinite;
        }

        .c1 .c2 .c3 .rect1 .mini-c .mini-c2 {
          position: absolute;
          top: 50%;
          left: -12%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          height: 20px;
          width: 20px;
          border: 3px solid #ffb61e;
          border-radius: 100%;
          animation: changeColor 30s linear infinite;
        }

        .c1 .c2 .c3 .rect1 .mini-c .mini-c3 {
          position: absolute;
          top: 50%;
          left: 112%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          height: 20px;
          width: 20px;
          border: 3px solid #ffb61e;
          border-radius: 100%;
          animation: changeColor 30s linear infinite;
        }

        .c1 .c2 .c3 .rect1 .mini-c .mini-c4 {
          position: absolute;
          top: 112%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          height: 20px;
          width: 20px;
          border: 3px solid #ffb61e;
          border-radius: 100%;
          animation: changeColor 30s linear infinite;
        }

        .c1 .c2 .c3 .rect1 .c4 {
          border: 1px solid #ffb61e;
          height: 120px;
          width: 120px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          border-radius: 100%;
          border-style: dotted;
          animation: changeColor 30s linear infinite;
        }

        .c1 .c2 .c3 .rect1 .c4 .rect2 {
          border: 1px solid #ffb61e;
          height: 80px;
          width: 80px;
          margin: 20px auto 0px auto;
          animation: rotminiC 10s linear infinite;
        }

        .c1 .c2 .c3 .rect1 .c4 .rect2 .rect3 {
          border: 1px solid #ffb61e;
          height: 80px;
          width: 80px;
          transform: rotate(135deg);
          transform-origin: center center;
        }

        .c1 .c2 .c3 .rect1 .c5 {
          border: 1px solid #ffb61e;
          height: 70px;
          width: 70px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          border-radius: 100%;
          animation: changeColor 30s linear infinite;
        }

        .c1 .c2 .c3 .rect1 .c6 {
          border: 3px solid #ffb61e;
          height: 50px;
          width: 50px;
          animation: changeColor 30s linear infinite;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotateX(10deg) rotateY(10deg);
          border-radius: 100%;
        }

        .c1:hover,
        .c1 .c2:hover,
        .c1 .c2 .c3:hover {
          box-shadow: 0 0 20px #efb61e;
          cursor: pointer;
          transition: transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
        }

        @keyframes rotFirst {
          0% {
            transform: rotateX(10deg) rotateY(10deg) rotate(-360deg);
          }
          100% {
            transform: rotateX(10deg) rotateY(10deg) rotate(0deg);
          }
        }

        @keyframes rotminiC {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }

        @keyframes changeColor {
          0% {
            box-shadow: 0px 0px 70px #fa9542;
            border-color: #fa9642;
          }
          50% {
            box-shadow: 0px 0px 50px #ffb61e;
            border-color: #ffb61e;
          }
          100% {
            box-shadow: 0px 0px 70px #fa9542;
            border-color: #fa9642;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;