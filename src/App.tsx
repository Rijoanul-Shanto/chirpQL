import React, { useState } from 'react';
import { Search, ArrowRight, ArrowLeft, Copy, RefreshCw, Twitter } from 'lucide-react';
import * as QueryParser from 'twitter-search-query-parser';

function App() {
  const [plainQuery, setPlainQuery] = useState('from:twitter #react lang:en since:2023-01-01');
  const [parsedQuery, setParsedQuery] = useState('');
  const [structuredQuery, setStructuredQuery] = useState('');
  const [decodedQuery, setDecodedQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'encode' | 'decode'>('encode');

  const handleEncode = () => {
    try {
      const parsed = QueryParser.parse(plainQuery);
      const formatted = JSON.stringify(parsed, null, 2);
      setParsedQuery(formatted);
    } catch (error) {
      setParsedQuery(`Error: ${error instanceof Error ? error.message : 'Failed to parse query'}`);
    }
  };

  const handleDecode = () => {
    try {
      const parsed = JSON.parse(structuredQuery);
      const decoded = QueryParser.stringify(parsed);
      setDecodedQuery(decoded);
    } catch (error) {
      setDecodedQuery(`Error: ${error instanceof Error ? error.message : 'Failed to decode query'}`);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const loadExample = () => {
    if (activeTab === 'encode') {
      setPlainQuery('from:twitter #javascript OR #react lang:en since:2023-01-01 until:2024-01-01 -spam');
    } else {
      setStructuredQuery(`{
  "text": ["javascript"],
  "hashtags": ["react"],
  "from": ["twitter"],
  "lang": ["en"],
  "since": "2023-01-01",
  "until": "2024-01-01",
  "exclude": ["spam"]
}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Twitter className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Twitter Search Query Parser</h1>
              <p className="text-gray-600 text-sm">Parse and stringify Twitter search queries with ease</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8 w-fit mx-auto">
          <button
            onClick={() => setActiveTab('encode')}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
              activeTab === 'encode'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center space-x-2">
              <ArrowRight className="h-4 w-4" />
              <span>Encode (Parse)</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('decode')}
            className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
              activeTab === 'decode'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Decode (Stringify)</span>
            </div>
          </button>
        </div>

        {activeTab === 'encode' && (
          <div className="space-y-6">
            {/* Encode Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200/50 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Parse Query String</span>
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                  Convert a plain Twitter search query into a structured object
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Plain Query String
                      </label>
                      <button
                        onClick={loadExample}
                        className="text-xs text-blue-600 hover:text-blue-800 flex items-center space-x-1 transition-colors"
                      >
                        <RefreshCw className="h-3 w-3" />
                        <span>Load Example</span>
                      </button>
                    </div>
                    <textarea
                      value={plainQuery}
                      onChange={(e) => setPlainQuery(e.target.value)}
                      placeholder="Enter your Twitter search query (e.g., from:twitter #react lang:en)"
                      className="w-full h-24 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-mono text-sm"
                    />
                  </div>
                  
                  <button
                    onClick={handleEncode}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span>Parse Query</span>
                  </button>
                  
                  {parsedQuery && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Structured Object
                        </label>
                        <button
                          onClick={() => copyToClipboard(parsedQuery)}
                          className="text-xs text-gray-600 hover:text-gray-800 flex items-center space-x-1 transition-colors"
                        >
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </button>
                      </div>
                      <pre className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-lg overflow-auto font-mono text-sm">
                        {parsedQuery}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'decode' && (
          <div className="space-y-6">
            {/* Decode Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200/50 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <ArrowLeft className="h-5 w-5" />
                  <span>Stringify Object</span>
                </h2>
                <p className="text-indigo-100 text-sm mt-1">
                  Convert a structured query object back into a plain search string
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Structured Query Object (JSON)
                      </label>
                      <button
                        onClick={loadExample}
                        className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center space-x-1 transition-colors"
                      >
                        <RefreshCw className="h-3 w-3" />
                        <span>Load Example</span>
                      </button>
                    </div>
                    <textarea
                      value={structuredQuery}
                      onChange={(e) => setStructuredQuery(e.target.value)}
                      placeholder="Enter JSON object representing the parsed query"
                      className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none font-mono text-sm"
                    />
                  </div>
                  
                  <button
                    onClick={handleDecode}
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 font-medium"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Stringify Object</span>
                  </button>
                  
                  {decodedQuery && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Decoded Query String
                        </label>
                        <button
                          onClick={() => copyToClipboard(decodedQuery)}
                          className="text-xs text-gray-600 hover:text-gray-800 flex items-center space-x-1 transition-colors"
                        >
                          <Copy className="h-3 w-3" />
                          <span>Copy</span>
                        </button>
                      </div>
                      <div className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm">
                        {decodedQuery}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-blue-50/50 border border-blue-200/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">About Twitter Search Query Parser</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-blue-800">
            <div>
              <h4 className="font-medium mb-2">Supported Query Features:</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• <code className="bg-blue-100 px-1 rounded">from:username</code> - Tweets from user</li>
                <li>• <code className="bg-blue-100 px-1 rounded">to:username</code> - Tweets to user</li>
                <li>• <code className="bg-blue-100 px-1 rounded">#hashtag</code> - Tweets with hashtag</li>
                <li>• <code className="bg-blue-100 px-1 rounded">lang:en</code> - Language filter</li>
                <li>• <code className="bg-blue-100 px-1 rounded">since:2023-01-01</code> - Date range</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Advanced Operators:</h4>
              <ul className="space-y-1 text-blue-700">
                <li>• <code className="bg-blue-100 px-1 rounded">OR</code> - Boolean OR operator</li>
                <li>• <code className="bg-blue-100 px-1 rounded">-term</code> - Exclude terms</li>
                <li>• <code className="bg-blue-100 px-1 rounded">"exact phrase"</code> - Exact match</li>
                <li>• <code className="bg-blue-100 px-1 rounded">until:2024-01-01</code> - End date</li>
                <li>• <code className="bg-blue-100 px-1 rounded">min_retweets:10</code> - Minimum RTs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;