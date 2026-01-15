import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts"

import { cn } from "@/lib/utils"

/* ---------------------------------
   Tooltip (STATIC SAFE)
---------------------------------- */
function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { value?: number }[]
  label?: string
}) {
  if (!active || !payload || payload.length === 0) return null

  return (
    <div className="rounded-md border bg-background px-3 py-2 text-xs shadow">
      <p className="font-medium">{label}</p>
      <p className="text-muted-foreground">
        Revenue: <span className="font-mono">{payload[0].value}</span>
      </p>
    </div>
  )
}

/* ---------------------------------
   Chart Component
---------------------------------- */
export function StaticLineChart({
  data,
  className,
}: {
  data: { month: string; revenue: number }[]
  className?: string
}) {
  return (
    <div className={cn("h-[350px] w-full", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
