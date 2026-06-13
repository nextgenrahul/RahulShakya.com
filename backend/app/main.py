from fastapi import FastAPI

app = FastAPI(
    title="RahulShakya API",
    version="1.0.0"
)

@app.get("/")
async def root():
    return {
        "success": True,
        "message": "FastAPI Running 🚀"
    }

@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }