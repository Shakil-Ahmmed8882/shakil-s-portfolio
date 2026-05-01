



/*

Plans:


You are a senior frontend engineer and animation system designer.

Your task is to build a **production-grade hero section with a dynamic parallax 3D background gallery**, using my existing project screenshots as the data source.

---

## INPUT

* I have a folder containing multiple project screenshots (various sizes and aspect ratios)
* You must automatically process and use them
* Do NOT hardcode image imports manually

---

## GOAL

Create a **cinematic hero section** where:

* Screenshots appear in the background as a **moving 3D parallax gallery**
* The gallery has **depth, perspective, and continuous motion**
* On scroll, the background **subtly transforms (folds, fades, shifts)**
* Foreground content (title, description, CTA) stays clean and readable

---

## STEP 1 — IMAGE PIPELINE (IMPORTANT)

Build a system to dynamically load images:

* Scan a given `/public/projects` (or similar) folder

* Generate a config file (e.g., `projects.config.ts` or JSON)

* Each item should contain:

  * id
  * image URL
  * optional title (fallback auto-generated)

* Ensure images can be reused infinitely (looping rows)

* Handle inconsistent aspect ratios safely

---

## STEP 2 — BACKGROUND GALLERY SYSTEM

Create a reusable component: `ParallaxGalleryBackground`

Structure:

* 2–3 horizontal rows of images
* Each row:

  * Wider than viewport (overflow hidden)
  * Images repeated to allow seamless looping

---

## STEP 3 — 3D PERSPECTIVE SETUP

Apply true depth illusion:

* Parent container:

  * `perspective: 1000px`

* Rows:

  * Tilt using:

    * rotateX (~10–20deg)
    * rotateY (~-10deg)
  * Use translateZ to create layering:

    * back row: translateZ(-100px)
    * middle row: translateZ(0)
    * front row: translateZ(100px)

---

## STEP 4 — CONTINUOUS MOTION (CRITICAL)

Each row must:

* Move horizontally in an infinite loop
* Use linear animation (no easing)
* Different speeds per row (parallax depth illusion)

Example:

* Row 1: slow
* Row 2: medium
* Row 3: slightly faster

Ensure:

* No visible jump when looping
* Use duplicated content trick

---

## STEP 5 — SCROLL-BASED TRANSFORMATION

Using Framer Motion:

On scroll (scrollYProgress):

* Slightly reduce rotateX (simulate folding away)
* Translate Y upward slightly
* Reduce opacity gradually
* Optional: slight scale down

This should create:
→ “background folding away as user scrolls”

---

## STEP 6 — VISUAL TREATMENT (VERY IMPORTANT)

Because screenshots are visually noisy:

Apply:

* Global dark gradient overlay (left → right fade)
* Bottom fade to black (to support text readability)
* Image opacity: 0.2 – 0.4
* Slight blur (very subtle)
* Soft shadow or vignette

DO NOT skip this — otherwise it will look amateur

---

## STEP 7 — FOREGROUND CONTENT

Add:

* Strong headline
* Short description
* CTA button

Ensure:

* Always readable
* High contrast over background
* Not affected by background animation

---

## STEP 8 — PERFORMANCE

* Use `will-change: transform`
* Avoid layout thrashing
* Use transform-based animation only
* Optimize images (lazy loading if needed)

---

## STEP 9 — RESPONSIVENESS

* On mobile:

  * Reduce or disable 3D tilt
  * Reduce animation intensity
  * Stack layout cleanly
* Ensure no performance lag

---

## STEP 10 — CODE QUALITY

* Use React + Tailwind + Framer Motion

* Clean component separation:

  * HeroSection
  * ParallaxGalleryBackground
  * useParallaxAnimation (hook)

* Code must be:

  * readable
  * reusable
  * production-ready

---

## BONUS (if done well)

* Pause animation on hover
* Add slight variation in row spacing
* Add subtle noise/grain overlay for premium feel

---

## OUTPUT

Provide:

1. Full working code
2. Config generation logic
3. Folder structure
4. Clear instructions to plug in my screenshots folder

---

IMPORTANT:

Do NOT simplify the animation.
Do NOT remove perspective.
Do NOT fallback to basic sliders or carousels.

This must feel like a premium, modern, cinematic portfolio hero.









*/ 