import Express from "express";

export class HomeAssistant  {
    server: Express.Application;
    port: string;
    heartbeat: NodeJS.Timeout | null = null;

    constructor(port: string) {
        this.port = port;
        this.server = Express();
        this.heartbeat = setInterval(this.heartbeatHandler, 1000);
    }

    async start() {
        return this.server.listen(this.port)
    }

    // Handlers
    async heartbeatHandler() {
        console.log("beep")
    }
}