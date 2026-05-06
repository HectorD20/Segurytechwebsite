import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
}

interface StatsSectionProps {
  heading?: string;
  subheading?: string;
  items: StatItem[];
  variant?: 'card' | 'plain';
}

/**
 * StatsSection — Grilla de estadísticas reutilizable para SeguryTech.
 */
export function StatsSection({
  heading,
  subheading,
  items,
  variant = 'card',
}: StatsSectionProps) {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950" aria-labelledby="stats-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(heading || subheading) && (
          <div className="text-center mb-16">
            {heading && (
              <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {subheading}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`
                  transition-all duration-300
                  ${variant === 'card' 
                    ? 'bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1' 
                    : 'text-center'}
                `}
              >
                {Icon && (
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                )}
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </h3>
                {stat.description && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
