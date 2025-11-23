import MovingTextShadow from "../projects/DOM cordination/moving text shadow/MovingTextShadow";
import textShadowImg from "../projects/DOM cordination/moving text shadow/text-shadow.png";
import MovingTextShadowExplanation from "../projects/DOM cordination/moving text shadow/MovingTextShadowExplanation";
//skew text effect
import SkewTextEffect from "../projects/DOM cordination/skew text effect/SkewTextEffect";
import skewTextEffectImg from "../projects/DOM cordination/skew text effect/skewTextEffectImg.png"

export const DOMcordinationData = {
  DOMcordination: {
    title: "DOM cordination",
    principles: [
      {
        id: "1",
        title: "Moving Text Shadow",
        description:
          "moving text shadow by mouse event using the DOM cordination",
        content:  MovingTextShadowExplanation,
      },
      {
        id: "2",
        title: "Skew text effect",
        description:"",
        content:'',
      },
    ],
    projects: [
      {
        slug: "moving-text-shadow",
        title: "moving text shadow",
        textColor: "red",
        description: "",
        img: textShadowImg,
        backgroundSize: "contain",
        component: MovingTextShadow,
      },
      {
        slug: "skew-text-effect",
        title: "Skew text effect",
        textColor: "red",
        description: "",
        img:skewTextEffectImg,
        backgroundSize: "center",
        component:SkewTextEffect,
      },
    ],
  },
  // Add more subjects as needed
};

// Helper function to get subject data
export const getSubjectData = (subjectSlug) => {
  return DOMcordinationData.DOMcordination[subjectSlug] || null;
};

// Helper function to get all subject slugs for routing
export const getAllSubjectSlugs = () => {
  return Object.keys(DOMcordinationData);
};
export const getDOMcordinationPrinciple = () => {
  return DOMcordinationData.DOMcordination.principles;
};
