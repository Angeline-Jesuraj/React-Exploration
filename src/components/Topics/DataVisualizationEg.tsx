
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DataVisualizationEg: React.FC = () => {
  const chartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Sample data
    const data: number[] = [10, 20, 30, 40, 50];

    // Create a simple bar chart
    const svg = d3.select(chartRef.current);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 60)
      .attr('y', d => 150 - d)
      .attr('width', 50)
      .attr('height', d => d)
      .attr('fill', 'blue');
  }, []);

  return (
    <div>
      <h2>D3.js Data Visualization</h2>
      <svg ref={chartRef} width={300} height={150}></svg>
    </div>
  );
};

export default DataVisualizationEg;
