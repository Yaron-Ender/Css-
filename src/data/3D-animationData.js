//Tail 3d effect
import Tail3Deffect from "../css-projects/3D-animation/tail-3d-effect/Tail3Deffect";
import tail3dEffectImg from "../css-projects/3D-animation/tail-3d-effect/check.jpg";
import Tail3dEffectExplanation from "../css-projects/3D-animation/tail-3d-effect/Tail3dEffectExplanation";

export const ThreeDanimationData = {
  animation3D: {
    title: "Animation",
    principles: [
      {
        id: "1",
        title: "tail 3d effect",
        description:
          "A tail 3d effect demonstrating rotation and color filtering effects",
        content:Tail3dEffectExplanation, 
      },
    ],
    projects: [
      {
        slug: "tail-3d-effect",
        title: "tail 3d effect",
        textColor: "#fff",
        description: "tail 3d effect",
        img:tail3dEffectImg,
        backgroudSize: "contain",
        component:Tail3Deffect,
      },
    ],
  },
  // Add more subjects as needed
};

// Helper function to get subject data
export const getSubjectData = (subjectSlug) => {
  const project = ThreeDanimationData.animation.projects.find(
    (p) => p.slug === subjectSlug
  );
  return project || null;
};

// Helper function to get all subject slugs for routing
export const getAllSubjectSlugs = () => {
  return ThreeDanimationData.animation.projects.map((p) => p.slug);
};
export const getAnimationPrinciples = () => {
  return ThreeDanimationData.animation.principles;
};
