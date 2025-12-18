import { CheckCircle, AlertCircle, XCircle, Activity, Clock, HardDrive } from "lucide-react"

interface DashboardMockupProps {
  variant?: "full" | "mini" | "verification"
}

export function DashboardMockup({ variant = "full" }: DashboardMockupProps) {
  if (variant === "mini") {
    return (
      <div className="bg-card rounded-2xl border border-border p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
          <div className="w-2.5 h-2.5 bg-muted-foreground/40 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-muted-foreground/40 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-muted-foreground/40 rounded-full"></div>
          <span className="font-mono text-xs text-muted-foreground ml-2">Dashboard</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="bg-primary/10 rounded-lg p-2 text-center">
            <span className="font-semibold text-lg text-primary">47</span>
            <p className="text-xs text-primary/70">OK</p>
          </div>
          <div className="bg-muted rounded-lg p-2 text-center">
            <span className="font-semibold text-lg text-muted-foreground">3</span>
            <p className="text-xs text-muted-foreground/70">Warn</p>
          </div>
          <div className="bg-destructive/10 rounded-lg p-2 text-center">
            <span className="font-semibold text-lg text-destructive">2</span>
            <p className="text-xs text-destructive/70">Fail</p>
          </div>
        </div>
        <div className="space-y-1.5">
          {[
            { name: "DB-PROD", status: "success" },
            { name: "FILE-SVR", status: "success" },
            { name: "MAIL-01", status: "failed" },
          ].map((job, i) => (
            <div key={i} className="bg-muted rounded-lg p-2 flex items-center justify-between text-xs">
              <span className="font-mono font-medium">{job.name}</span>
              <div
                className={`w-2 h-2 rounded-full ${job.status === "success" ? "bg-primary" : "bg-destructive"}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (variant === "verification") {
    return (
      <div className="bg-card rounded-2xl border border-border p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
          <div className="w-2.5 h-2.5 bg-muted-foreground/40 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-muted-foreground/40 rounded-full"></div>
          <div className="w-2.5 h-2.5 bg-muted-foreground/40 rounded-full"></div>
          <span className="font-mono text-sm text-muted-foreground ml-2">Verification Report</span>
        </div>
        <div className="space-y-3">
          {[
            { name: "DB-PROD-01", status: "Verified", icon: CheckCircle, color: "text-primary" },
            { name: "FILE-SERVER", status: "Verified", icon: CheckCircle, color: "text-primary" },
            { name: "WEB-APP-01", status: "Verifying...", icon: Activity, color: "text-muted-foreground" },
            { name: "MAIL-SERVER", status: "Pending", icon: Clock, color: "text-muted-foreground" },
          ].map((item, i) => (
            <div key={i} className="bg-muted rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HardDrive className="w-4 h-4 text-muted-foreground" />
                <span className="font-mono font-medium text-sm">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-medium ${item.color}`}>{item.status}</span>
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-3 border-t border-border flex justify-between text-sm">
          <span className="text-muted-foreground">Last verified: 2 hours ago</span>
          <span className="font-medium text-primary">3/4 Complete</span>
        </div>
      </div>
    )
  }

  // Full dashboard mockup
  return (
    <div className="bg-card rounded-2xl border border-border p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
        <div className="w-3 h-3 bg-muted-foreground/40 rounded-full"></div>
        <div className="w-3 h-3 bg-muted-foreground/40 rounded-full"></div>
        <div className="w-3 h-3 bg-muted-foreground/40 rounded-full"></div>
        <span className="font-mono text-sm text-muted-foreground ml-1">new-branding.ai/dashboard</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div className="bg-primary/10 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="font-semibold text-2xl text-primary">47</span>
          </div>
          <p className="text-sm text-primary/80 mt-1">Successful</p>
        </div>
        <div className="bg-muted rounded-xl p-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-muted-foreground" />
            <span className="font-semibold text-2xl text-muted-foreground">3</span>
          </div>
          <p className="text-sm text-muted-foreground/80 mt-1">Warnings</p>
        </div>
        <div className="bg-destructive/10 rounded-xl p-4">
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-destructive" />
            <span className="font-semibold text-2xl text-destructive">2</span>
          </div>
          <p className="text-sm text-destructive/80 mt-1">Failed</p>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { name: "DB-PROD-01", status: "success", time: "02:34:12" },
          { name: "FILE-SVR-MAIN", status: "success", time: "01:45:33" },
          { name: "WEB-APP-01", status: "warning", time: "03:12:45" },
          { name: "MAIL-SERVER", status: "failed", time: "Failed at 45%" },
        ].map((job, i) => (
          <div key={i} className="bg-muted rounded-xl p-3 flex items-center justify-between">
            <span className="font-mono font-medium text-sm">{job.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground">{job.time}</span>
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  job.status === "success"
                    ? "bg-primary"
                    : job.status === "warning"
                      ? "bg-muted-foreground"
                      : "bg-destructive"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
