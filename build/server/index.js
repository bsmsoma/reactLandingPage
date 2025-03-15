import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, NavLink, Link, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, createContext, useContext, useState } from "react";
import { FaBars, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiReact, SiSass, SiFirebase, SiReactrouter, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss } from "react-icons/si";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const ThemeContext = createContext(void 0);
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light");
  };
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: /* @__PURE__ */ jsx("div", { className: `theme-${theme}`, children }) });
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resourses = {
    light: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx("path", { d: "M12 2V3", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M12 21V22", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M22 12L21 12", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M3 12L2 12", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M19.0708 4.92969L18.678 5.32252", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M5.32178 18.6777L4.92894 19.0706", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M19.0708 19.0703L18.678 18.6775", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M5.32178 5.32227L4.92894 4.92943", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round" })
    ] }),
    dark: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM7.37554 20.013C7.017 19.8056 6.5582 19.9281 6.3508 20.2866C6.14339 20.6452 6.26591 21.104 6.62446 21.3114L7.37554 20.013ZM2.68862 17.3755C2.89602 17.7341 3.35482 17.8566 3.71337 17.6492C4.07191 17.4418 4.19443 16.983 3.98703 16.6245L2.68862 17.3755ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447ZM12 21.25C10.3139 21.25 8.73533 20.7996 7.37554 20.013L6.62446 21.3114C8.2064 22.2265 10.0432 22.75 12 22.75V21.25ZM3.98703 16.6245C3.20043 15.2647 2.75 13.6861 2.75 12H1.25C1.25 13.9568 1.77351 15.7936 2.68862 17.3755L3.98703 16.6245Z", fill: "white" }) })
  };
  return /* @__PURE__ */ jsxs("nav", { className: `navbar ${theme}`, children: [
    /* @__PURE__ */ jsxs("div", { className: `titles ${theme}`, children: [
      /* @__PURE__ */ jsx("h1", { children: "Brunno Mota" }),
      /* @__PURE__ */ jsx("h3", { children: "Developer" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: `navbarlinks ${theme}`, children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: ({ isActive }) => isActive ? `active ${theme}` : "", to: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: ({ isActive }) => isActive ? `active ${theme}` : "", to: "/contact", children: "Contact" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { className: ({ isActive }) => isActive ? `active ${theme}` : "", to: "/projects", children: "Projects" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { className: `theme-button ${theme}`, onClick: toggleTheme, children: theme === "dark" ? resourses.dark : resourses.light }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mobile-menu", onClick: () => setIsMenuOpen(!isMenuOpen), children: /* @__PURE__ */ jsx(FaBars, {}) }),
    isMenuOpen && /* @__PURE__ */ jsx("div", { className: `mobile-menu-content ${theme}`, children: /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/", onClick: () => setIsMenuOpen(false), children: "Home" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/contact", onClick: () => setIsMenuOpen(false), children: "Contact" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(NavLink, { to: "/projects", onClick: () => setIsMenuOpen(false), children: "Projects" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { className: `theme-button ${theme}`, onClick: toggleTheme, children: theme === "dark" ? resourses.dark : resourses.light }) })
    ] }) })
  ] });
}
function Footer() {
  const { theme } = useTheme();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxs("footer", { className: `footer ${theme}`, children: [
    /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      currentYear,
      " Brunno Mota. Todos os direitos reservados."
    ] }),
    /* @__PURE__ */ jsx("div", { className: `icons ${theme}`, children: /* @__PURE__ */ jsxs(IconContext.Provider, { value: { size: "1.5rem", color: theme === "dark" ? "white" : "#000" }, children: [
      /* @__PURE__ */ jsx(Link, { to: "https://www.linkedin.com/in/brunno-mota-bb0184269/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaLinkedin, {}) }),
      /* @__PURE__ */ jsx(Link, { to: "https://github.com/bsmsoma", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaGithub, {}) }),
      /* @__PURE__ */ jsx(Link, { to: "https://www.instagram.com/brunno_mota/", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaInstagram, {}) }),
      /* @__PURE__ */ jsx(Link, { to: "https://wa.me/5563992565050", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(FaWhatsapp, {}) })
    ] }) })
  ] });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "pt-br",
    suppressHydrationWarning: true,
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsxs(ThemeProvider, {
        children: [/* @__PURE__ */ jsx(Navbar, {}), children, /* @__PURE__ */ jsx(Footer, {})]
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function meta$2({}) {
  return [{
    title: "Brunno Mota"
  }, {
    name: "description",
    content: "Brunno Mota"
  }, {
    property: "og:title",
    content: "Brunno Mota"
  }, {
    property: "og:description",
    content: "Portfolio profissional"
  }];
}
const home = withComponentProps(function Hero() {
  const {
    theme
  } = useTheme();
  return /* @__PURE__ */ jsxs("section", {
    className: `welcome ${theme}`,
    children: [/* @__PURE__ */ jsx("div", {
      className: `hero-image ${theme}`
    }), /* @__PURE__ */ jsxs("div", {
      className: `about-me ${theme}`,
      children: [/* @__PURE__ */ jsx("h3", {
        children: "A bit about me"
      }), /* @__PURE__ */ jsxs("p", {
        children: ["I have a degree in Database Technology from Senac - Santo Amaro and a strong passion for software development. Currently, I am enhancing my skills in ", /* @__PURE__ */ jsx("b", {
          children: "JavaScript, TypeScript, React, Node.js, and SQL"
        }), ", aiming to become a well-rounded full-stack developer."]
      }), /* @__PURE__ */ jsx("p", {
        children: "I have experience building applications that integrate dynamic front-end interfaces, robust APIs, and efficient database management. My focus is on developing scalable, high-performance, and user-friendly solutions while continuously learning and improving my technical expertise."
      })]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const rmcImage = "/assets/exemplosite-CtcbxaVY.png";
const joaoVitorImage = "/assets/exemplosite2-B5OjNUqD.png";
const bridalStoreImage = "/assets/requintetemp-DKr4VqUy.png";
const sidneyImage = "/assets/sidneytemp-BqdjBAei.png";
const ProjectCard = ({
  title,
  type,
  description,
  technologies,
  techTitle,
  image
}) => {
  const {
    theme
  } = useTheme();
  return /* @__PURE__ */ jsxs("div", {
    className: `project-card ${theme}`,
    children: [/* @__PURE__ */ jsx("img", {
      src: image,
      alt: `preview do projeto ${title.name}`
    }), /* @__PURE__ */ jsx("h3", {
      className: "project-title",
      children: title.url ? /* @__PURE__ */ jsx("a", {
        href: title.url,
        target: "_blank",
        rel: "noopener noreferrer",
        children: title.name
      }) : title.name
    }), /* @__PURE__ */ jsx("h4", {
      className: "project-type",
      children: type
    }), /* @__PURE__ */ jsx("p", {
      className: "project-description",
      children: description
    }), /* @__PURE__ */ jsx("div", {
      className: "tech-stack",
      children: technologies.map((Icon, index) => /* @__PURE__ */ jsx("span", {
        children: /* @__PURE__ */ jsx("i", {
          title: techTitle[index],
          children: /* @__PURE__ */ jsx(Icon, {})
        })
      }, index))
    })]
  });
};
function meta$1({}) {
  return [{
    title: "Brunno Mota"
  }, {
    name: "description",
    content: "Projects"
  }, {
    property: "og:title",
    content: "Brunno Mota"
  }, {
    property: "og:description",
    content: "Projects"
  }];
}
const projects = withComponentProps(function Projects() {
  const {
    theme
  } = useTheme();
  const projectsData = [
    {
      title: {
        name: "Requinte - Formal Wear Rental",
        url: "https://requinte.netlify.app/"
      },
      type: "Virtual Catalog",
      description: "Virtual catalog for formal wear rental. Aiming to enhance the customer experience in searching for formal wear, a virtual catalog was developed with a modern and responsive design.",
      technologies: [SiReact, SiSass, SiFirebase, SiReactrouter],
      techTitle: ["React", "Sass", "Firebase", "React Router"],
      image: bridalStoreImage
    },
    {
      title: {
        name: "RMC Machines",
        url: "https://rafaelmaquinas.netlify.app/"
      },
      type: "Corporate Website",
      description: "SEO-optimized corporate website, developed with a focus on conversion to attract both local and regional customers.",
      technologies: [SiHtml5, SiCss3, SiJavascript],
      techTitle: ["HTML", "CSS", "Javascript"],
      image: rmcImage
    },
    {
      title: {
        name: "João Vitor - Photography",
        url: "https://joaovitorfotografo.netlify.app/"
      },
      type: "Landing Page",
      description: "Landing page developed to showcase a photographer's portfolio, featuring a modern, responsive design focused on optimal user experience.",
      technologies: [SiReact, SiTypescript, SiTailwindcss, SiReactrouter],
      techTitle: ["React", "Typescript", "Tailwindcss", "React Router V7"],
      image: joaoVitorImage
    },
    {
      title: {
        name: "Sidney Resende",
        url: "https://sidneyresende.netlify.app/"
      },
      type: "Landing Page",
      description: "Landing page optimized for Google Ads and SEO, developed for a law firm. Focused on increasing lead conversion and improving positioning in paid and organic searches.",
      technologies: [SiHtml5, SiCss3, SiJavascript],
      techTitle: ["HTML", "CSS", "Javascript"],
      image: sidneyImage
    }
    // Add more projects GOGOGO!
  ];
  return /* @__PURE__ */ jsxs("section", {
    className: `projects-container ${theme}`,
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Projects"
    }), /* @__PURE__ */ jsx("div", {
      className: "bento-grid",
      children: projectsData.map((project, index) => /* @__PURE__ */ jsx(ProjectCard, {
        ...project
      }, index))
    })]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: projects,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "Brunno Mota"
  }, {
    name: "description",
    content: "Contact with the developer"
  }, {
    property: "og:title",
    content: "Brunno Mota"
  }, {
    property: "og:description",
    content: "Contact with the developer"
  }];
}
const Contact = withComponentProps(function Contact2() {
  const {
    theme
  } = useTheme();
  return /* @__PURE__ */ jsxs("div", {
    className: `contact-container ${theme}`,
    children: [/* @__PURE__ */ jsx("h1", {
      children: "Let's Connect!"
    }), /* @__PURE__ */ jsx("p", {
      className: "contact-intro",
      children: "I'm always excited to collaborate on new projects and discuss innovative ideas. Feel free to reach out through any of these channels:"
    }), /* @__PURE__ */ jsxs("div", {
      className: "contact-cards",
      children: [/* @__PURE__ */ jsxs("div", {
        className: `contact-card ${theme}`,
        children: [/* @__PURE__ */ jsx(FaWhatsapp, {
          className: "icon"
        }), /* @__PURE__ */ jsx("h3", {
          children: "WhatsApp"
        }), /* @__PURE__ */ jsx("p", {
          children: "Let's chat! Available Mon-Fri"
        }), /* @__PURE__ */ jsx("a", {
          href: "https://wa.me/5563992565050",
          className: "contact-link",
          children: "+55 (63) 99256-5050"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: `contact-card ${theme}`,
        children: [/* @__PURE__ */ jsx(FaEnvelope, {
          className: "icon"
        }), /* @__PURE__ */ jsx("h3", {
          children: "Email"
        }), /* @__PURE__ */ jsx("p", {
          children: "Professional inquiries welcome"
        }), /* @__PURE__ */ jsx("a", {
          href: "mailto:bsmsoma@gmail.com",
          className: "contact-link",
          children: "bsmsoma@gmail.com"
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: `contact-card ${theme}`,
        children: [/* @__PURE__ */ jsx(FaPhone, {
          className: "icon"
        }), /* @__PURE__ */ jsx("h3", {
          children: "Phone"
        }), /* @__PURE__ */ jsx("p", {
          children: "Direct contact"
        }), /* @__PURE__ */ jsx("a", {
          href: "tel:+5563992565050",
          className: "contact-link",
          children: "+55 (63) 99256-5050"
        })]
      })]
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BLBv_m1w.js", "imports": ["/assets/chunk-HA7DTUK3-Cgh0VqpW.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-Db9t_1YD.js", "imports": ["/assets/chunk-HA7DTUK3-Cgh0VqpW.js", "/assets/ThemeContext-BlhxFau4.js", "/assets/index-LrydZrBX.js", "/assets/iconBase-DjV4JUFH.js"], "css": ["/assets/root-BCpqjr2h.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-DQGv0fy3.js", "imports": ["/assets/ThemeContext-BlhxFau4.js", "/assets/chunk-HA7DTUK3-Cgh0VqpW.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects": { "id": "routes/projects", "parentId": "root", "path": "projects", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/projects-CiWAg3fs.js", "imports": ["/assets/ThemeContext-BlhxFau4.js", "/assets/chunk-HA7DTUK3-Cgh0VqpW.js", "/assets/iconBase-DjV4JUFH.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/Contact": { "id": "routes/Contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/Contact-DQdTTbRy.js", "imports": ["/assets/ThemeContext-BlhxFau4.js", "/assets/chunk-HA7DTUK3-Cgh0VqpW.js", "/assets/index-LrydZrBX.js", "/assets/iconBase-DjV4JUFH.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-c490d633.js", "version": "c490d633" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/projects": {
    id: "routes/projects",
    parentId: "root",
    path: "projects",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/Contact": {
    id: "routes/Contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
