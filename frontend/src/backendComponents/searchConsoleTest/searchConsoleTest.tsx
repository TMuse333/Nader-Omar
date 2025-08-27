'use client';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

// Type for a single row from Search Console
type SearchConsoleRow = {
  keys: string[];       // query keys
  clicks: number;
  impressions: number;
  ctr: number;
};

// Type for the entire dashboard data
type SearchConsoleData = {
  totalImpressions: number;
  totalClicks: number;
  topQueries: SearchConsoleRow[];
};

const SearchConsoleDashboard = () => {
  const { data: session } = useSession();
  const [data, setData] = useState<SearchConsoleData | null>(null); // fixed type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!session) return;
      try {
        const res = await fetch('/api/search-console');
        const result = await res.json();
        if (res.ok) setData(result);
        else setError(result.error);
      } catch {
        setError('Failed to fetch data');
      }
      setLoading(false);
    }
    fetchData();
  }, [session]);

  if (!session) return <button onClick={() => signIn('google')}>Sign In with Google</button>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Console Dashboard</h1>
      <button
        onClick={() => signOut()}
        className="bg-gray-200 px-3 py-1 rounded mb-6"
      >
        Sign Out
      </button>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}

      {data && (
        <>
          {/* Total Metrics */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center mb-6">
            <div className="text-gray-500 text-lg mb-1">Total Impressions This Month</div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{data.totalImpressions}</div>
            <div className="text-gray-500 text-lg">Total Clicks: {data.totalClicks}</div>
          </div>

          {/* Top Queries List */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-3">Top Searches This Month</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b py-2">Query</th>
                  <th className="border-b py-2">Clicks</th>
                  <th className="border-b py-2">Impressions</th>
                  <th className="border-b py-2">CTR (%)</th>
                </tr>
              </thead>
              <tbody>
                {data.topQueries.map((row: SearchConsoleRow, index: number) => (
                  <tr key={index}>
                    <td className="py-1">{row.keys[0]}</td>
                    <td className="py-1">{row.clicks}</td>
                    <td className="py-1">{row.impressions}</td>
                    <td className="py-1">{row.ctr.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {!loading && !error && data?.topQueries?.length === 0 && <p>No data available</p>}
    </div>
  );
};

export default SearchConsoleDashboard;
