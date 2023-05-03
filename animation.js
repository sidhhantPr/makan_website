const tl = gsap.timeline({ defaults: { opacity: 0 } });
tl.from(".container", { scale: 0, duration: 1, delay: 1 })
  .from(".logo", {
    x: 80,
  })
  .from(".navitem > li", { stagger: 0.3, scale: 0 })
  .from(".body_left h1", { x: 70 })
  .from(".body_left p", { x: -70 })
  .from(".btn-get", { y: 70 })
  .from(".body_right img", { y: 40 })
  .from(".btn_left", { x: 70 })
  .from(".btn_right", { x: -70 })
  .from(".input_div", { scale: 0, backgroundColor: "white" })
  .from(".input_div input", { stagger: 0.3, scale: 0 });
