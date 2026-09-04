"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assistant_1 = require("./core/assistant");
const assistant = new assistant_1.HomeAssistant("8080");
assistant.start().then((r) => {
    console.log("Server Started!");
});
