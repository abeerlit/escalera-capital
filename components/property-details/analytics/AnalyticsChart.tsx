import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useMemo } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

type AnalyticsChartData = {
    labels: string[];
    datasets: Array<{
        label: string;
        data: number[];
        color?: string;
    }>;
    yLabel?: string;
    yMax?: number;
    yStep?: number;
    forecastIndex?: number;
};

const chartDataMap: Record<string, AnalyticsChartData> = {
    'vacancyAnalysis': {
        labels: [
            '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029',
        ],
        datasets: [
            {
                label: 'Subject',
                data: [18, 18, 10, 0, 0, 0, 38, 60, 55, 45, 40],
                color: '#F59E42',
            },
            {
                label: 'Peers',
                data: [30, 45, 8, 9, 10, 30, 60, 55, 50, 45, 40],
                color: '#2B7FC3',
            },
            {
                label: 'Northeast',
                data: [7, 8, 8, 9, 10, 11, 12, 13, 13, 13, 13],
                color: '#6CBF4A',
            },
            {
                label: 'San Antonio',
                data: [6, 7, 7, 8, 8, 9, 9, 9, 9, 9, 9],
                color: '#F7E359',
            },
        ],
        yLabel: '%',
        yMax: 60,
        yStep: 10,
    },
    'submarket': {
        labels: [
            '2019', '2020', '2021', '2022', '2023', '2024',
        ],
        datasets: [
            {
                label: 'Subject',
                data: [18, 18, 10, 0, 0, 30],
                color: '#F59E42',
            },
            {
                label: 'Peers',
                data: [0, 10, 20, 40, 50, 70],
                color: '#2B7FC3',
            },
            {
                label: 'Northeast',
                data: [8, 10, 12, 13, 14, 15],
                color: '#6CBF4A',
            },
            {
                label: 'San Antonio',
                data: [7, 8, 9, 10, 11, 12],
                color: '#F7E359',
            },
        ],
        yLabel: '%',
        yMax: 80,
        yStep: 10,
    },
    'rentalAnalysis': {
        labels: [
            '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024',
        ],
        datasets: [
            {
                label: 'Peers',
                data: [65, 20, 5, 5, 5, 7, 8, 9, 7, 6],
                color: '#2B7FC3',
            },
            {
                label: 'Northeast',
                data: [15, 12, 10, 9, 8, 8, 9, 10, 9, 8],
                color: '#6CBF4A',
            },
            {
                label: 'San Antonio',
                data: [18, 15, 12, 10, 9, 8, 8, 9, 9, 8],
                color: '#F7E359',
            },
        ],
        yLabel: '%',
        yMax: 70,
        yStep: 10,
    },
};

const getChartData = (selectedTab: string) => {
    // Default to rentalAnalysis if not found
    return chartDataMap[selectedTab] || chartDataMap['rentalAnalysis'];
};

export const AnalyticsChart = ({ selectedTab }: { selectedTab: string }) => {
    const chartData = useMemo(() => getChartData(selectedTab), [selectedTab]);

    // Prepare Chart.js datasets
    const data = {
        labels: chartData.labels,
        datasets: chartData.datasets.map((ds) => ({
            label: ds.label,
            data: ds.data,
            borderColor: ds.color,
            backgroundColor: ds.color,
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 0,
            // tension: 0.2,
        })),
    };

    // Chart.js options
    const options = {
        plugins: {
            legend: {
                // display: true,
                position: 'bottom' as const,
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    font: { size: 14 },
                },
                width: 100,
                height: 100,
            },
        },
        scales: {
            y: {
                // beginAtZero: true,
                max: chartData.yMax,
                ticks: {
                    stepSize: chartData.yStep,
                    callback: function(tickValue: string | number) {
                        return `${tickValue}${chartData.yLabel || ''}`;
                    },
                },
                grid: {
                    color: '#CCC',
                },
            },
            x: {
                grid: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    color: (ctx: unknown) => (ctx as any).tick && (ctx as any).tick.value % 2 === 0 ? "#ccc" : "#eee",
                },
            },
        }
    }; 

    return (
        <Line data={data} options={options} className='w-full' height={100} />
    );
};

export const AnalyticsTable = ({ selectedTab }: { selectedTab: string }) => {
    const chartData = useMemo(() => getChartData(selectedTab), [selectedTab]);
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm border-y border-gray-300">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                        <th className="px-2 py-1 text-left">Labels</th>
                        {chartData?.labels.map((label, idx) => (
                            <th key={idx} className="px-2 py-1">{label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {chartData?.datasets.map((ds, i) => (
                        <tr key={i} className="border-b border-gray-300">
                            <td className={`px-2 py-1 font-semibold`} style={{ color: ds.color }}>{ds.label}</td>
                            {ds.data.map((val, j) => (
                                <td key={j} className="px-2 py-1 text-center">{val}%</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};