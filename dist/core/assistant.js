"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAssistant = void 0;
const express_1 = __importDefault(require("express"));
class HomeAssistant {
    constructor(port) {
        this.heartbeat = null;
        this.port = port;
        this.server = (0, express_1.default)();
        this.heartbeat = setInterval(this.heartbeatHandler, 1000);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.server.listen(this.port);
        });
    }
    // Handlers
    heartbeatHandler() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("beep");
        });
    }
}
exports.HomeAssistant = HomeAssistant;
