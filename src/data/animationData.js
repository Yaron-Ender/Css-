//spiral animation
import SpiralAnimation from "../css-projects/animation/spiral/SpiralAnimation";
import SpiralAnimationContent from "../css-projects/animation/spiral/SpiralAnimationContent";
import spiralImg from "../css-projects/animation/spiral/spiral.png";
//glowing ring
import GlowingRing from "../css-projects/animation/glowing-ring/GlowingRing";
import GlowingRingExplanation from "../css-projects/animation/glowing-ring/GlowingRingExplanation";
import glowingRingImg from "../css-projects/animation/glowing-ring/glowing-ring.png";
//flashing zigzag
import FlashingZigZag from "../css-projects/animation/flashing-zig-zag/FlashingZigZag";
import FlashingZigZagExpl from "../css-projects/animation/flashing-zig-zag/FlashingZigZagExpl";
import flashingZigzagImg from "../css-projects/animation/flashing-zig-zag/flasging-zigzag img.png";
//flashing zigzag
export const animationData = {
  animation: {
    title: "Animation",
    principles: [
      {
        id: "1",
        title: "spiral illusion",
        description:
          "A spiral animation demonstrating rotation and color filtering effects",
        content: SpiralAnimationContent,
      },
      {
        id: "2",
        title: "glowing ring",
        description:
          "A glowing ring animation demonstrating light and shadow effects",
        content: GlowingRingExplanation,
      },
      {
        id: "3",
        title: "flashing zigzag",
        description:
          "A flashing zigzag animation demonstrating timing and contrast",
        content: FlashingZigZagExpl,
      },
    ],
    projects: [
      {
        slug: "spiral",
        title: "spiral illusion",
        textColor: "#fff",
        description: "spiral shpae",
        img: spiralImg,
        backgroudSize: "contain",
        component: SpiralAnimation,
      },
      {
        slug: "glowing-ring",
        title: "glowing ring",
        textColor: "#fff",
        description:
          "A glowing ring animation demonstrating light and shadow effects",
        img: glowingRingImg,
        backgroudSize: "contain",
        component: GlowingRing,
      },
      {
        slug: "flashing-zigzag",
        title: "flashing zigzag",
        textColor: "#fff",
        description:
          "A flashing zigzag animation demonstrating timing and contrast",
        img: flashingZigzagImg,
        backgroudSize: "contain",
        component: FlashingZigZag,
      },
    ],
  },
  // Add more subjects as needed
};

// Helper function to get subject data
export const getSubjectData = (subjectSlug) => {
  const project = animationData.animation.projects.find(
    (p) => p.slug === subjectSlug
  );
  return project || null;
};

// Helper function to get all subject slugs for routing
export const getAllSubjectSlugs = () => {
  return animationData.animation.projects.map((p) => p.slug);
};
export const getAnimationPrinciples = () => {
  return animationData.animation.principles;
};
