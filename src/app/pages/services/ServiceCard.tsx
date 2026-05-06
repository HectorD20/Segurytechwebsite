import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/core";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="h-full border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 group">
      <CardHeader>
        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm shadow-blue-500/5">
          <Icon className="w-7 h-7 text-blue-600 group-hover:text-blue-500 transition-colors" />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">{service.title}</CardTitle>
        <CardDescription className="text-gray-500 leading-relaxed min-h-[3rem]">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-widest text-blue-600/70 mb-4">
            Beneficios Incluidos
          </h4>
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 mt-1.5 flex-shrink-0" />
              {benefit}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
