import React, { useEffect, useState } from 'react';
import { Line, Radar, Pie, Bar } from 'react-chartjs-2';
import './style.css';

function App() {
  // Objetos que serão preenchidos com dados de cada gráfico
  const [line, setChartLine] = useState({});
  const [radar, setChartRadar] = useState({});
  const [pie, setChartPie] = useState({});
  const [bar, setChartBar] = useState({});

  // Pizza (torta)
  const PieChart = () => {
    setChartPie({
      // Titulos dos dados que serão apresentados
      labels: ['Não', 'Não, só que azul'],
      // Dados da tabela (poderá ter mais de um, dependendo da lógica que irá ser utilizada)
      datasets: [
        {
          // Nome do dado
          label: 'Nâo',
          // Dados
          data: [20, 80],
          // Cor que aparecerá o dado no gráfico
          backgroundColor: [
            '#df0003',
            '#001aff'
          ],
          // Bordas
          borderWidth: 2
        },
      ],
    })
  }

  // Bar (Torres, barras)
  const BarChart = () => {
    setChartBar({
      labels: ['Arma 3', 'Destiny 2', 'Battlefield V', 'League Of Legends'],
      datasets: [
        {
          label: 'Jogos mais jogados em 2020',
          data: [30, 50, 55, 75],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)',
            '#df0002',
            '#808080',
            '#11c700'
          ],
          borderWidth: 4,
        },
      ]
    })
  }

  // Linhas
  const LineChart = () => {
    setChartLine({
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label: 'Taxa de vezes que senti saudade dela em 2019',
          data: [10, 25, 30, 22, 24, 25, 32, 45, 20, 30, 60, 58],
          backgroundColor: [
            'rgba(75, 192, 192, 0.6)'
          ],
          borderWidth: 4,
        },
        {
          label: 'Taxa de vezes que senti saudade dela em 2020',
          data: [50, 28, 32, 27, 30, 21, 37, 39, 15, 40, 50, 68],
          backgroundColor: [
            '#df0002'
          ],
          borderWidth: 4,
        }
      ]
    })
  }

  // Radar
  const RadarChart = () => {
    setChartRadar({
      labels: ['Inteligência', 'Destreza', 'Força', 'Magia'],
      datasets: [
        {
          label: 'Gandalf, o Cinzento',
          data: [80, 50, 45, 75],
          backgroundColor: [
            '#808080'
          ],
          borderWidth: 6
        },
        {
          label: 'Thorin, Escudo de Carvalho',
          data: [60, 65, 85, 0],
          backgroundColor: [
            '#11c700'
          ],
          borderWidth: 6
        },
      ],
    })
  }

  // UseEffect para preencher os gráficos com dados
  useEffect(() => {
    LineChart();
    RadarChart();
    PieChart();
    BarChart();
  }, [])

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Tipos de gráficos do ChartJS</h1>
      <div className="content">
        <div className="charts">

          <div className="chart">
            <Line
              data={line}
              options={{
                responsive: true,
                title: { text: 'Taxa de "Saudade Dela" [Line]', display: true }
              }}
            />
          </div>

          <div className="chart">
            {/* Tipo do gráfico */}
            <Radar
            /* Dado */
            data={radar}
            /* Opções adicionais */
            options={{
              /* Gráfico responsivo */
              responsive: true,
              /* Titulo do gráfico, e se será exibido */
              title: { text: 'Pontuação de Personagens [Radar]', display: true },
              /* Escalas alteraveis do gráfico */
              scales: {
                /* Escala para a linha Y (vertical) */
                yAxes: [
                  {
                    ticks: {
                      /* Máximo número do gráfico */
                      maxTicksLimit: 100,
                      /* Começará do zero */
                        beginAtZero: true,
                      }
                    }
                  ]
                }
              }}
            />
          </div>
        </div>

        <div className="charts">
          <div className="chart">
            <Pie
              data={pie}
              options={{
                responsive: true,
                title: { text: 'Sou bonito? [Pie]', display: true }
              }}
            />
          </div>

          <div className="chart">
            <Bar
              data={bar}
              options={{
                responsive: true,
                title: { text: 'Jogos mais jogados em 2020 [Bar]', display: true },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        maxTicksLimit: 100,
                        beginAtZero: true,
                      }
                    }
                  ]
                }
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
