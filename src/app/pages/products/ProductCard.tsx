import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, Badge } from "../../components/ui/core";

export interface ProductItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  isPopular?: boolean;
}

interface ProductCardProps {
  product: ProductItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <Card className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group border-gray-100 ${product.isPopular ? 'ring-2 ring-blue-500 shadow-blue-500/10' : ''}`}>
      {product.isPopular && (
        <Badge className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-600">
          Más Popular
        </Badge>
      )}
      
      <CardHeader>
        <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-500 shadow-sm shadow-blue-500/5">
          <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-500" />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">{product.title}</CardTitle>
        <CardDescription className="text-gray-500 leading-relaxed min-h-[3rem]">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-3" role="list">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
              <span className="text-blue-500 mr-3 mt-1 font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-6 border-t border-gray-50 dark:border-gray-800">
        <div className="flex flex-col w-full">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">
            Inversión
          </span>
          <span className="text-3xl font-black text-gray-900 dark:text-white">
            {product.price}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
