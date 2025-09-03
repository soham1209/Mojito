import React, { useRef, useState, useEffect } from "react";
import { allCocktails } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function Menu() {
  const sectionRef = useRef(null);
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);


  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(".cocktail img", { opacity: 0, xPercent: -100 }, {
      xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut"
    });
    gsap.fromTo(".details h2", { yPercent: 100, opacity: 0 }, {
      yPercent: 0, opacity: 1, ease: "power1.inOut"
    });
    gsap.fromTo(".details p", { yPercent: 100, opacity: 0 }, {
      yPercent: 0, opacity: 1, ease: "power1.inOut"
    });
  }, [currentIndex]);


  useGSAP(() => {
    const el = sectionRef.current;
    const left = el?.querySelector("#m-left-leaf");
    const right = el?.querySelector("#m-right-leaf");
 const tl = gsap.timeline({
      id: "menuParallaxTL",
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        id: "menuParallaxST",
        trigger: el,
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
              
        invalidateOnRefresh: true,
      },
    });

    tl.from(left, {
      x: -100, 
    }).from(right, {
      x: 100, y: 200,
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []); 


  useEffect(() => {
    const onLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  const totalCocktails = allCocktails.length;
  const goToSlide = (index) => setCurrentIndex((index + totalCocktails) % totalCocktails);
  const getCocktailAt = (offset) => allCocktails[(currentIndex + offset + totalCocktails) % totalCocktails];
  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section ref={sectionRef} className="overflow-hidden" id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf"/>
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
          </button>
          <button className="text-right" onClick={() => goToSlide(currentIndex + 1)}>
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="right-arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} alt={currentCocktail.name} className="object-contain" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
