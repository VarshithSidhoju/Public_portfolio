import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

export function TechBadge({ name, icon, className }: TechBadgeProps) {
  return (
    <div className={cn(
      "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium font-mono border transition-all duration-300",
      "bg-muted/30 border-primary/20 text-muted-foreground",
      "hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105",
      className
    )}>
      {icon && <span className="w-4 h-4">{icon}</span>}
      {name}
    </div>
  );
}
