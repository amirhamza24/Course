import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Statistics = () => {
    const data = [
        { name: "Assignment 1", marks: 57 },
        { name: "Assignment 2", marks: 59 },
        { name: "Assignment 3", marks: 58 },
        { name: "Assignment 4", marks: 60 },
        { name: "Assignment 5", marks: 58 },
        { name: "Assignment 6", marks: 59 },
        { name: "Assignment 7", marks: 60 },
        { name: "Assignment 8", marks: 60 },
    ];
    return (
        <div>
            <h2 className="mt-8 text-3xl text-gray-800 text-center font-bold">Assignment Marks</h2>
            <div className="flex justify-center w-2/5 mx-auto">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        dataKey="marks"
                        cx={200}
                        cy={200}
                        outerRadius={160}
                        fill="#B63DF7"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
};

export default Statistics;
