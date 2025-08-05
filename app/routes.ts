import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/auth', 'routes/auth.tsx'),
    route('/upload', 'routes/upload.tsx'),
    route('/resume/:id', 'routes/resume.tsx'),
    route('/wipe', 'routes/wipe.tsx'),
<<<<<<< HEAD
] satisfies RouteConfig;
=======
] satisfies RouteConfig;
>>>>>>> 7f46e4e85f4db0ce67c1f54a06753a3837b367fd
