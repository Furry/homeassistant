import Express from "express";
import { HomeAssistant } from "./core/assistant";

const assistant = new HomeAssistant("8080");

assistant.start().then((r) => {
    console.log("Server Started!")
})