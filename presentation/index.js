// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const colors = {
  accent: "#ffffff",
  primary: "#89E894"
};
const fonts = {};
const theme = createTheme(colors, fonts);
const style = {
  textDecoration: "line-through"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="white">
              Patrones
            </Heading>
            <Heading size={1} caps textColor="white">
              de Diseño
            </Heading>
          </Slide>
      	  <Slide transition={["slide"]}>
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps textColor="accent" textFont="primary">Modesto</Heading>
            <Heading style={style} size={2} caps textColor="#000000" textFont="primary">Figueroa</Heading>
            <Heading size={2} caps textColor="accent" textFont="primary">Figuereo</Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} caps textColor="accent" textFont="primary">Modesto Figuereo Fernandez</Heading>
            <Heading size={3} caps textColor="#000000" textFont="primary">Backend Developer at instacarro.com</Heading>
            <Heading size={4} textColor="accent" textFont="primary">Java, C#, JavaScript, PHP and Python programmer</Heading>
            <Heading size={6} textColor="#000000" textFont="primary">Salsa dancer</Heading>
            <Heading size={6} textColor="accent" textFont="primary">twitter.com/@modestofiguereo</Heading>
          </Slide>
      	  <Slide transition={["slide"]} notes="" >
              <Heading size={3} caps fit textColor="accent" textFont="primary">
                ¿Qué son?
                </Heading>
              </Slide>
      	  <Slide transition={["slide"]} notes="" >
                <Heading size={3} textColor="accent" textFont="primary">
                Un patrón es una solución reusable que puede ser aplicada a problemas que ocurren comúnmente en diseño de software.
                </Heading>
      	  </Slide>
          <Slide transition={["slide"]} notes="Christopher Alexander. Arquitecto. Destilación de conocimientos.  Publicaciones sobres sus técnicas para solucionar proeblemas de arquitectura. En el contexto de ingenieria de software, empezarón hace 30 años. Aplicación de los principios de Christopher Alexander. Vale la pena aclarar los principios detrás de los patrones de diseño datan de mucho antes. Documento icónico: Design Pattern (GoF). Este presenta 23 patrones céntricos a la programación orientada a objetos.">
            <Heading size={3} caps fit textColor="accent" textFont="primary">
            ¿Cómo surgen?
            </Heading>
          </Slide>
	        <Slide transition={["slide"]} notes="Christopher Alexander. Arquitecto. Destilación de conocimientos.  Publicaciones sobres sus técnicas para solucionar proeblemas de arquitectura. En el contexto de ingenieria de software, empezarón hace 30 años. Aplicación de los principios de Christopher Alexander. Vale la pena aclarar los principios detrás de los patrones de diseño datan de mucho antes. Documento icónico: Design Pattern (GoF). Este presenta 23 patrones céntricos a la programación orientada a objetos.">
            <List textColor="accent">
              <ListItem>El arquitecto Christopher Alexander</ListItem>
              <ListItem>
                En 1977, Sara Ishikawa and Murray Silverstein, Alexander produjeron un lenguaje patrón que ayudaría a cualquiera a diseñar y construir en cualquier escala.
              </ListItem>
              <ListItem>
                Hace algunos 30 años, los ingenieros de software comenzaron a incorporate los principios de los cuales Alexander había escrito.
              </ListItem>
              <ListItem>
                Patterns: Elements of Reusable Object-Oriented Software, by GoF (Erich Gamma, Richard Helm, Ralph Johnson and John Vlissides)
              </ListItem>
	          </List>
          </Slide>
          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={3} caps fit textColor="accent" textFont="primary">
            ¿Cómo son utiles?
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3} caps fit textColor="accent" textFont="primary">
              Los patrones de diseño tienen tres principales beneficios:
            </Heading>
            <List textColor="accent">
              <ListItem>
              Son reutilizables.
              </ListItem>
              <ListItem>
              Son soluciones provadas.
              </ListItem>
              <ListItem>
              Son expresivos.
              </ListItem>
	          </List>
          </Slide>
          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={3} caps fit textColor="accent" textFont="primary">
            Tipos
            </Heading>
          </Slide>
          <Slide>
            <List textColor="accent">
              <ListItem>
                Creational Patterns (Constructor, Factory, Abstract Factory, Prototype, Singleton, and Builder)
              </ListItem>
              <ListItem>
                Behavioral Patterns (Iterator, Mediator, Observer/Publisher-Subscriber, and Visitor)
              </ListItem>
              <ListItem>
                Structural Patterns (Decorator, Facade, Flyweight, Adapter, and Proxy)
              </ListItem>
	          </List>
          </Slide>
          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={3} caps fit textColor="accent" textFont="primary">
            Anti-patrones
            </Heading>
          </Slide>
          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={3} caps fit textColor="accent" textFont="primary">
              Si consideramos que un patrón de diseño es un "best practice",
            </Heading>
            <Heading size={2} textColor="accent" textFont="primary">
              un anti-pratón es representa una lección aprendida.
            </Heading>
          </Slide>

          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={3} caps fit textColor="accent" textFont="primary">
            Ejemplos del mundo real
            </Heading>
          </Slide>
          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={3} caps fit textColor="accent" textFont="primary">
            Thanks &lt;3
            </Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} caps textColor="accent" textFont="primary">Modesto Figuereo Fernandez</Heading>
            <Heading size={6} textColor="accent" textFont="primary">twitter.com/@modestofiguereo</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
