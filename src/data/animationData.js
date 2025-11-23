import SpiralAnimation from '../css-projects/animation/spiral/SpiralAnimation';
import SpiralAnimationContent from '../css-projects/animation/spiral/SpiralAnimationContent';
import spiralImg from '../css-projects/animation/spiral/spiral.png'
export const animationData = {
  animation: {
    title: "Animation",
    principles: [
      {
        id:"1",
        title: "spiral illusion",
        description: "A spiral animation demonstrating rotation and color filtering effects",
        content:SpiralAnimationContent,
      },
     
    ],
    projects: [
      {
        slug: "spiral",
        title: "spiral illusion",
        textColor:'#fff',
        description: "spiral shpae",
        img: spiralImg,
       backgroudSize:'contain',
     component: SpiralAnimation,
      },
    
    ],
  },
  // Add more subjects as needed
};

// Helper function to get subject data
export const getSubjectData = (subjectSlug) => {
  return shadowingData[subjectSlug] || null;
};

// Helper function to get all subject slugs for routing
export const getAllSubjectSlugs = () => {
  return Object.keys(animationData);
};
export const getShadowingPrinciple = () => {
  return animationData. animation.principles;
};
