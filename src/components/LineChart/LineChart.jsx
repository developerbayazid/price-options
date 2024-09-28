import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentMarks = [
        {
            id: 1,
            name: 'John',
            math: 85,
            english: 78,
            science: 92,
            history: 88,
        },
        {
            id: 2,
            name: 'Emma',
            math: 90,
            english: 88,
            science: 85,
            history: 95,
        },
        {
            id: 3,
            name: 'Liam',
            math: 75,
            english: 82,
            science: 80,
            history: 70,
        },
        {
            id: 4,
            name: 'Olivia',
            math: 88,
            english: 92,
            science: 95,
            history: 85,
        },
        {
            id: 5,
            name: 'Noah',
            math: 82,
            english: 80,
            science: 78,
            history: 88,
        },
        {
            id: 6,
            name: 'Sophia',
            math: 91,
            english: 85,
            science: 89,
            history: 93,
        },
        {
            id: 7,
            name: 'Mason',
            math: 78,
            english: 75,
            science: 80,
            history: 82,
        },
        {
            id: 8,
            name: 'Isabella',
            math: 87,
            english: 90,
            science: 92,
            history: 84,
        },
        {
            id: 9,
            name: 'James',
            math: 80,
            english: 82,
            science: 85,
            history: 87,
        },
        {
            id: 10,
            name: 'Charlotte',
            math: 92,
            english: 89,
            science: 94,
            history: 90,
        },
    ];

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold">Students Marks</h1>
            <LChart width={800} height={400} data={studentMarks}>
                <Line dataKey="math" stroke="purple"></Line>
                <Line dataKey="english" stroke="red"></Line>
                <Line dataKey="science" stroke="green"></Line>
                <Line dataKey="history" stroke="blue"></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LChart>
        </div>
    );
};

export default LineChart;
