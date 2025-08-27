"use client";

import { useEffect, useState } from "react";

interface AnalyticsData {
  users: string;
  sessions: string;
  pageViews: string;
  avgSessionDuration: string;
  bounceRate: string;
}

export default function Analytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("Failed to load analytics"));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return <p>Loading analytics…</p>;

  return (
    <>
    <h2 className="text-2xl font-semibold mb-4">Google analytics</h2>
    <p className="mb-4">this is still in the works and I currently have more accurate ways
      to measure this.<br/>
      But I am trying to integrate analyitcs so you can see them here.
      
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <Card title="Users" value={data.users} />
      <Card title="Sessions" value={data.sessions} />
      <Card title="Page Views" value={data.pageViews} />
      <Card title="Avg Session Duration" value={data.avgSessionDuration} />
      <Card title="Bounce Rate" value={`${data.bounceRate}%`} />
    </div>
    </>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
