import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COR_ENTRADA = '#08dd08'; 
const COR_SAIDA = '#e71d36';    
const COR_VAZIO = '#d3d3d3';    
export default function GraficoFinanceiro({ transactions = [] }) {
  const totalEntradas = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const totalSaidas = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);
  const isVazio = totalEntradas === 0 && totalSaidas === 0;
  let dataGrafico = [];
  let cores = [];
  if (isVazio) {
    dataGrafico = [{ name: 'Sem movimentações', value: 1 }];
    cores = [COR_VAZIO];
  } else {
    dataGrafico = [
      { name: 'Entradas', value: totalEntradas },
      { name: 'Saídas', value: totalSaidas },
    ];
    cores = [COR_ENTRADA, COR_SAIDA];
  }
  return (
    <div style={{ width: '100%', height: 350 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataGrafico}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
          >
            {dataGrafico.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={cores[index]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) =>
              isVazio ? 'R$ 0,00' : `R$ ${Number(value).toFixed(2)}`
            }
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
