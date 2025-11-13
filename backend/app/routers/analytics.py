from fastapi import APIRouter, Depends
from pydantic import BaseModel
from typing import List, Dict, Any
from .. import auth

router = APIRouter()

# --- Modelos de Resposta ---
class KpiResponse(BaseModel):
    faturamento: str
    pedidos: str
    novosClientes: str

class ChartDataResponse(BaseModel):
    labels: List[str]
    datasets: List[Dict[str, Any]]

# --- Rotas de Dados ---
@router.get(
    "/visao-geral/kpis",
    response_model=KpiResponse,
    summary="Obtém os principais KPIs da visão geral.",
    dependencies=[Depends(auth.get_current_user)] # Protege a rota
)
async def get_kpis():
    """
    Retorna os Key Performance Indicators (KPIs) para a página principal.
    - **faturamento**: Faturamento total no período.
    - **pedidos**: Número total de pedidos.
    - **novosClientes**: Contagem de novos clientes.
    """
    # Em um cenário real, aqui você faria uma consulta ao banco de dados (ex: com SQLAlchemy)
    return {
        "faturamento": "R$ 1.2M",
        "pedidos": "8,450",
        "novosClientes": "1,200"
    }

@router.get(
    "/visao-geral/faturamento-mes",
    response_model=ChartDataResponse,
    summary="Obtém dados de faturamento mensal para o gráfico.",
    dependencies=[Depends(auth.get_current_user)] # Protege a rota
)
async def get_faturamento_por_mes():
    """
    Retorna dados agregados de faturamento por mês para alimentar um gráfico de barras.
    """
    # Simulação de uma consulta SQL agregada
    return {
        "labels": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        "datasets": [
            {
                "label": "Faturamento Mensal",
                "data": [150000, 180000, 220000, 190000, 250000, 280000],
                "backgroundColor": "rgba(54, 162, 235, 0.6)",
                "borderColor": "rgba(54, 162, 235, 1)",
                "borderWidth": 1,
            }
        ]
    }
