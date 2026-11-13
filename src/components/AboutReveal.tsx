import ScrollReveal from './reactbits/ScrollReveal';

// Astro hands slot content to React as pre-rendered HTML, which ScrollReveal can't split into
// words, so the text comes in as a prop and is passed on as a plain string.
export default function AboutReveal({ text }: { text: string }) {
  return (
    <ScrollReveal
      tag="p"
      containerClassName="about-reveal"
      textClassName="about-reveal-text"
      baseOpacity={0.15}
      baseRotation={0}
      enableBlur={false}
    >
      {text}
    </ScrollReveal>
  );
}
