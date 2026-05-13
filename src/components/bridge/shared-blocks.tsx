import Icon from "@/components/ui/icon";

export function Step({ num, text }: { num: number; text: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
        {num}
      </div>
      <div className="text-foreground text-lg leading-relaxed pt-1">{text}</div>
    </div>
  );
}

export function StepBlock({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-border p-6 space-y-4">
      <h3 className="font-serif font-bold text-xl text-foreground">{title}</h3>
      <div className="space-y-3">
        {steps.map((s, i) => <Step key={i} num={i + 1} text={s} />)}
      </div>
    </div>
  );
}

export function WarnBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-destructive/10 border-2 border-destructive/40 rounded-2xl p-6">
      <h3 className="font-serif font-bold text-xl text-destructive mb-4 flex items-center gap-2">
        <Icon name="AlertTriangle" size={22} /> {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-foreground text-base">
            <span className="text-destructive font-bold mt-0.5">—</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6">
      <h3 className="font-serif font-bold text-xl text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-foreground text-base">
            <span className="text-accent font-bold mt-0.5">✓</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
