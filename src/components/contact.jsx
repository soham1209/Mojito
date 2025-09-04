import React from "react";
import gsap from "gsap";
import { openingHours, socials } from "../constants";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

function contact() {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", { type: "word" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });
    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      });

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    timeline2
      .to("#f-right-leaf", {
        y: "100",
      },0)
      .to("#f-left-leaf", {
        y: "200",
      },0);
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Vist our Bar</h3>
          <p>rndom go teo lest ostm ot suta</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>(+91) 1234567897</p>
          <p>hellowgotya@gamil.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Social</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default contact;
