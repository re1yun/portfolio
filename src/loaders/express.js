import * as express from "express";
import path from "path";

const __dirname = path.resolve();

export default async (app) => {
    app.get("/status", (req, res) => {
        res.status(200).end();
    });
    app.head("/status", (req, res) => {
        res.status(200).end();
    });
    app.use(express.json());
    app.set("view engine", "ejs");
    app.set("views", __dirname + "/src/views");
    app.use("/", express.static(__dirname + "/src/public"));
};
