import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";

// import { Left, Right, ScrollSection, Title } from './elements'

import styled from "styled-components";

const ScrollSection = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;
  color: white;
  /* padding-left: 6rem;
margin-top: 2.5rem; */
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: 5;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 24px;
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  min-height: 100vh;
  padding-left: 30%;
  /* width: 65%; */
  background-color: ${(props) => props.theme.gray};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;

const Item = styled.div`
  display: inline-block;
  width: 20rem;
  margin-right: 6rem;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`;
const Product = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const ServicesScroll = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

//   let arr = [1, 2, 3, 4, 6, 7];

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
          pin: true,
          markers: true,
        },

        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App",
          scrub: true,
        },
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <ScrollSection ref={ref}>
      <Title data-scroll data-scroll-speed="-1">
        Services
      </Title>

      <Left>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          nulla maxime, numquam cupiditate assumenda dolorem provident beatae
          deserunt debitis eaque. Deserunt tenetur quam non nemo iste voluptate
          illo, voluptas laboriosam?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          nulla maxime, numquam cupiditate assumenda dolorem provident beatae
          deserunt debitis eaque. Deserunt tenetur quam non nemo iste voluptate
          illo, voluptas laboriosam?
        </p>
      </Left>

      <Right ref={horizontalRef}>
        {/* {arr.map(() => ( */}
          <Product img={img1} title="helllo" />
          <Product img={img2} title="helllo" />
          <Product img={img1} title="helllo" />
          <Product img={img2} title="helllo" />
          <Product img={img1} title="helllo" />
          <Product img={img2} title="helllo" />
          <Product img={img1} title="helllo" />
          <Product img={img2} title="helllo" />
          <Product img={img1} title="helllo" />
          <Product img={img2} title="helllo" />

        {/* ))} */}
      </Right>
    </ScrollSection>
  );
};

export default ServicesScroll;
