import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="card shadow p-4 rounded border border-light bg-white">
      <h2 className="text-center mb-3">{title}</h2>
      {children}
    </div>
  );
}
