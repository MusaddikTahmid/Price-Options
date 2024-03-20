import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const subjectMarksData = [
    {
      id: 1,
      name: "John",
      math_mark: 85,
      physics_mark: 78,
      chemistry_mark: 92,
    },
    {
      id: 2,
      name: "Emily",
      math_mark: 78,
      physics_mark: 85,
      chemistry_mark: 80,
    },
    {
      id: 3,
      name: "Michael",
      math_mark: 92,
      physics_mark: 90,
      chemistry_mark: 88,
    },
    {
      id: 4,
      name: "Sophia",
      math_mark: 88,
      physics_mark: 82,
      chemistry_mark: 85,
    },
    {
      id: 5,
      name: "William",
      math_mark: 70,
      physics_mark: 75,
      chemistry_mark: 68,
    },
    {
      id: 6,
      name: "Olivia",
      math_mark: 95,
      physics_mark: 96,
      chemistry_mark: 94,
    },
    {
      id: 7,
      name: "James",
      math_mark: 83,
      physics_mark: 80,
      chemistry_mark: 85,
    },
    { id: 8, name: "Ava", math_mark: 79, physics_mark: 85, chemistry_mark: 82 },
    {
      id: 9,
      name: "Alexander",
      math_mark: 91,
      physics_mark: 88,
      chemistry_mark: 90,
    },
    {
      id: 10,
      name: "Charlotte",
      math_mark: 84,
      physics_mark: 86,
      chemistry_mark: 82,
    },
  ];

  return (
    <div>
      <LChart width={500} height={400} data={subjectMarksData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math_mark" stroke="red"></Line>
        <Line dataKey="physics_mark" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
