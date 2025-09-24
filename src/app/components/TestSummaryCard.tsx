export type TestType = 'passed' | 'failed' | 'flaky';


interface TestSummaryCardProps {
  title: string;
  value: number;
  percentage: number;
  color: string; 
  testType: TestType
  onClick: (testType: TestType) => void;
}


const TestSummaryCard = ({ title, value, percentage, color, testType, onClick }: TestSummaryCardProps) => (
    <div
        className="bg-white p-6 rounded-lg border shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => onClick(testType)}
    >
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-medium text-gray-600">{title}</p>
                <p className="text-3xl font-bold text-gray-900">{value?.toLocaleString()}</p>
                <p className={`text-sm ${color} flex items-center`}>
                    {percentage.toFixed(1)}% of total tests
                </p>
            </div>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                testType === 'passed' ? 'bg-green-100' :
                    testType === 'failed' ? 'bg-red-100' :
                        'bg-yellow-100'
            }`}>
      <span className={`text-2xl font-bold ${color}`}>
        {testType === 'passed' ? '✓' :
            testType === 'failed' ? '✗' :
                '⚠'}
      </span>
            </div>
        </div>
    </div>
);

export default TestSummaryCard;