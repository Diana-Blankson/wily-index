import { LucideIcon, TrendingUp } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  color?: string; 
}

const MetricCard = ({ title, value, change, icon: Icon, color }: MetricCardProps) => (
    <div className="bg-white p-6 rounded-lg border shadow-sm">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                {change && (
                    <p className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'} flex items-center`}>
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {change > 0 ? '+' : ''}{change}%
                    </p>
                )}
            </div>
            <Icon className={`w-8 h-8 ${color}`} />
        </div>
    </div>
);


export default MetricCard;