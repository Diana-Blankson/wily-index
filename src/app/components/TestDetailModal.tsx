import { TestType } from "./TestSummaryCard";

export interface TestDetail {
  name: string;
  testId: string;
  repository: string;
  duration: number;  
  lastRun: string;  
  failReason?: string;
  flakyPattern?: string;
  successRate?: number;
}

interface TestDetailModalProps {
  testType?: TestType;
  tests: TestDetail[];
  onClose: () => void;
}





const TestDetailModal = ({ testType, tests, onClose }: TestDetailModalProps) => {
    if (!testType) return null;

    const getStatusColor = (type: TestType) => {
        switch(type) {
            case 'passed': return 'text-green-600 bg-green-50';
            case 'failed': return 'text-red-600 bg-red-50';
            case 'flaky': return 'text-yellow-600 bg-yellow-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-bold capitalize">{testType} Tests ({tests.length})</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        ×
                    </button>
                </div>
                <div className="overflow-y-auto max-h-[60vh] p-6">
                    <div className="space-y-4">
                        {tests.map((test, index) => (
                            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{test.name}</h3>
                                        <p className="text-sm text-gray-600">{test.testId} • {test.repository}</p>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(testType)}`}>
                  {testType.charAt(0).toUpperCase() + testType.slice(1)}
                </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <span className="text-gray-500">Duration: </span>
                                        <span className="font-medium">{test.duration}s</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Last Run: </span>
                                        <span className="font-medium">{test.lastRun}</span>
                                    </div>
                                    {test.failReason && (
                                        <div className="md:col-span-1">
                                            <span className="text-gray-500">Reason: </span>
                                            <span className="font-medium text-red-600">{test.failReason}</span>
                                        </div>
                                    )}
                                    {test.flakyPattern && (
                                        <div className="md:col-span-2">
                                            <span className="text-gray-500">Pattern: </span>
                                            <span className="font-medium text-yellow-600">{test.flakyPattern}</span>
                                        </div>
                                    )}
                                    {test.successRate && (
                                        <div>
                                            <span className="text-gray-500">Success Rate: </span>
                                            <span className="font-medium">{(test.successRate * 100).toFixed(1)}%</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestDetailModal;