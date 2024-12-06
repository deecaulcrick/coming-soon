const tl = gsap.timeline();
tl.from(".logo-text", { opacity: 0, duration: 1 })
  .from(".main h1", {
    xPercent: 100,
    duration: 2,
    ease: "back.out",
  })

  .from(".main img", {
    opacity: 0,
    duration: 2,
    rotate: -6.5,
  })
  .from(".main p", {
    opacity: 0,
    duration: 2,
  });

document.addEventListener("mousemove", (e) => {
  const element = document.querySelector(".latte");
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = e.view;

  // Normalize cursor position to a range of -1 to 1
  const normalizedX = (clientX / innerWidth - 0.5) * 2;
  const normalizedY = (clientY / innerHeight - 0.5) * 2;

  const movementX = normalizedX * 70; // Adjust 20 for horizontal movement range
  const movementY = normalizedY * 70; // Adjust 20 for vertical movement range

  // Apply the movement with back.inOut easing via transition
  element.style.transform = `translate(${movementX}px, ${movementY}px) rotate(-6.43deg)`;
});
