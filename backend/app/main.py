from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import analytics
from . import auth

app = FastAPI(
    title="Dashboard Analytics API",
    description="API para fornecer dados analíticos para o dashboard.",
    version="1.0.0"
)

# Configuração do CORS para permitir que o frontend acesse a API
origins = [
    "http://localhost:3000",  # Endereço do frontend React
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir os roteadores
app.include_router(auth.router, tags=["Authentication"])
app.include_router(analytics.router, prefix="/api/v1", tags=["Analytics"])

@app.get("/", tags=["Root"])
async def read_root():
    return {"message": "Bem-vindo à API de Análise de Dados!"}
