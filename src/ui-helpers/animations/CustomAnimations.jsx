// Mui
import { keyframes } from "@mui/material";

//-------| For Bg Text Shimmer |-------//
export const shimmer = keyframes`
    0% {
    background-position: 200% 0;
    }
    100% {
    background-position: 0% 0;
    }
`;

//-------| For Bg Gradient Color |-------//
export const gradient = keyframes`
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 50% 30%;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 70% 50%;
    }
    100% {
      background-position: 0% 0%;
    }
`;

//-------| Back & Forth |-------//
export const backAndForth = keyframes`
    0% {
    transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
    100% {
      transform: translateY(0);
    }
`;

//-------|  Forth & Back |-------//
export const forthAndBack = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px); 
  }
  100% {
    transform: translateY(0);
  }
`;

//-------| Fade In |-------//
export const fadeIn = keyframes`
    0% {
    opacity: 0;
    }
    100% {
    opacity: 1;
    }
`;

//-------| Fade In Left|-------//
export const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

//-------| Fade In Right|-------//
export const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

//-------| Fade In Down |-------//
export const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

//-------| Bounce In Right|-------//
export const bounceInRight = keyframes`
  0%, 60%, 75%, 90%, 100% {
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  80% {
    transform: translate3d(5px, 0, 0);
  }
  85% {
    transform: translate3d(-2px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  100% {
    transform: none;
  }
`;

//-------| Bounce In Up|-------//
export const bounceInUp = keyframes`
  0%, 60%, 75%, 90%, 100% {
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

//-------| Flip |-------//
export const flipInYAnimation = keyframes`
  0% {
    transform: perspective(600px) rotate3d(0, 2, 0, 100deg);
    transition-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(600px) rotate3d(0, 10, 0, -20deg);
    transition-timing-function: ease-in;
    opacity: 0.8;
  }
  60% {
    transform: perspective(600px) rotate3d(0, 1, 0, 10deg);
  }
  80% {
    transform: perspective(600px) rotate3d(0, 10, 0, -10deg);
  }
  100% {
    transform: perspective(600px);
  }
`;

//-------| Flash |-------//
export const flashAnimation = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
`;

export const fadeInFromLeft = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

export const fadeInFromBottom = {
  hidden: { opacity: 0, y: -100, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};
