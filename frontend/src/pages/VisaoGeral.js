import React, { useState, useEffect } from 'react';
import KpiCard from '../components/KpiCard';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Mock da função que buscaria dados da API
const getAnalyticsData = async (endpoint) => {
  // Simulação de delay da rede
  await new Promise(resolve => setTimeout(resolve, 500));

  if (endpoint === '/api/v1/visao-geral/kpis') {
    return {
      faturamento: 'R$ 1.2M',
      pedidos: '8,450',
      novosClientes: '1,200'
    };
  }

  if (endpoint === '/api/v1/visao-geral/faturamento-mes') {
    return {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
      datasets: [
        {
          label: 'Faturamento Mensal',
          data: [150000, 180000, 220000, 190000, 250000, 280000],
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
  }
};


const VisaoGeral = () => {
  const [kpis, setKpis] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Buscar dados dos KPIs
      const kpiData = await getAnalyticsData('/api/v1/visao-geral/kpis');
      setKpis(kpiData);

      // Buscar dados do gráfico
      const faturamentoData = await getAnalyticsData('/api/v1/visao-geral/faturamento-mes');
      setChartData(faturamentoData);
    };

    fetchData();
  }, []);

  if (!kpis || !chartData) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Visão Geral</h1>

      {/* Seção de KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <KpiCard title="Faturamento Total" value={kpis.faturamento} />
        <KpiCard title="Total de Pedidos" value={kpis.pedidos} />
        <KpiCard title="Novos Clientes" value={kpis.novosClientes} />
      </div>

      {/* Seção do Gráfico */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Faturamento por Mês</h2>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Performance de Vendas Mensal' }
            }
          }}
        />
      </div>
    </div>
  );
};

export default VisaoGeral;
