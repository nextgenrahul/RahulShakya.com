import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
    success: true,
    message: "RahulShakya Backend Running 🚀",
    });
});

app.get("/api/health", (_req: Request, res: Response) => {
    res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});