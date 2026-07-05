import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';

function KpiCard({ data, className}) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex gap-2">
          {data.icon}
          <p className="font-semibold text-md">{data.label}</p>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">{data.value}</p>
          <div className="bg-green-200 p-1 border-2 border-green-500 rounded-full">
            <p className="text-xs font-semibold">{data.valueFromPrevious}%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default KpiCard;
