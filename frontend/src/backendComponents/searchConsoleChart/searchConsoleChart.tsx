'use client';
import { useMemo } from 'react';

type RowData = {
  keys: string[];
  clicks: number;
  impressions: number;
};

interface Props {
  data: RowData[];
}

const TrendingQueries = ({ data }: Props) => {
  const sorted = useMemo(() => {
    return data
      .map(row => ({
        query: row.keys[0],
        clicks: row.clicks,
        impressions: row.impressions,
        ctr: row.impressions ? Math.round((row.clicks / row.impressions) * 100) : 0,
      }))
      .sort((a, b) => b.impressions - a.impressions) // highest impressions first
      .slice(0, 10); // top 10
  }, [data]);

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold">Top Trending Queries</h2>
      <ul className="space-y-1">
        {sorted.map((row, i) => (
          <li key={row.query} className="flex justify-between border-b pb-1">
            <span>{i + 1}. {row.query}</span>
            <span>
              {row.impressions.toLocaleString()} impressions • {row.ctr}% CTR
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingQueries;
