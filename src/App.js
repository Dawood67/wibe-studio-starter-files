import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyles";
import {dark} from './styles/theme'
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { useRef } from "react";
import Home from "./section/home";
import ServicesScroll from "./section/services";
import ScrollTriggerProxy from "./components/scrollTriggerProxy";

function App() {
  const containerRef = useRef(null);
  return (
    <>
    <GlobalStyle/>
<ThemeProvider theme={dark}>
<LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
  <ScrollTriggerProxy/>
  <main className="App" data-scroll-container ref={containerRef}>
   <Home/>
   <ServicesScroll/>
  </main>
</LocomotiveScrollProvider>
</ThemeProvider>
    </>
  );
}

export default App;
