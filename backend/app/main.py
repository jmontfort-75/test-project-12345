from fastapi import FastAPI

app = FastAPI(title="test-project-12345")


@app.get("/")
def root():
    return {"project": "test-project-12345", "description": "This is a test project"}


@app.get("/healthz")
def healthz():
    return {"status": "ok"}
