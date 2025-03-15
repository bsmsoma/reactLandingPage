import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("projects", "./routes/projects.tsx"),
    route("contact", "./routes/Contact.tsx") 
    

] satisfies RouteConfig;
