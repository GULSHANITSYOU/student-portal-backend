import express from "express";
import cookieParser from "cookie-parser";
import { corsOptions } from "./constants.js";
import cors from "cors";

//=========== express app =======
const app = express();

//======== cors middelware ======
app.use(cors(corsOptions));

//======== json parser =========
app.use(express.json({ limit: "20kb" }));

//======== url encoded ========
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

//======== cookieparser ========
app.use(cookieParser());

//========= Middlewares for Media (🙄) =======
app.use(express.static("public"));

// =============== student route ================
import studentRoute from "./routes/student.route.js";

app.use("/api/v1/student", studentRoute);

// ================= password reset api ================
import password from "./routes/password.route.js";

app.use("/api/v1/password", password);

//================== profile update api ================
import profileRoute from "./routes/profile.updates.route.js";

app.use("/api/v1/profile", profileRoute);

//=====education update api =============

import educationRoute from "./routes/education.update.route.js";

app.use("/api/v1/education", educationRoute);

//================== resources api ================

import resourceRoute from "./routes/resources.route.js";

app.use("/api/v1/resources", resourceRoute);

//==============project api ===========

import projectRoute from "./routes/project.route.js";

app.use("/api/v1/project", projectRoute);

//================ socialMedia , codingProfile links===============
import socialCodingLinksRoute from "./routes/social.coding.links.route.js";

app.use("/api/v1/social-Coding-Links", socialCodingLinksRoute);

export { app };
