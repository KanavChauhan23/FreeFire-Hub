import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Loader2, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export default function AIValidator() {
  const [code, setCode] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ status: 'valid' | 'invalid' | 'unknown', message: string } | null>(null);

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || code.length < 12) return;

    setIsAnalyzing(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Check if this Free Fire redeem code format is valid: ${code}. Analyze the format pattern (usually 12 or 16 characters, uppercase letters and numbers). Estimate if it is likely to be active based on known Garena code patterns. Return a JSON object with two fields: "status" (either "valid", "invalid", or "unknown") and "message" (a short explanation).`,
        config: {
          responseMimeType: 'application/json',
          systemInstruction: 'You are FreeFire Hub AI — an expert Free Fire game analyst. You validate redeem codes based on format and known patterns.',
        }
      });

      const text = response.text;
      if (text) {
        const parsed = JSON.parse(text);
        setResult(parsed);
      } else {
        setResult({ status: 'unknown', message: 'Could not analyze the code at this time.' });
      }
    } catch (error) {
      console.error('Error validating code:', error);
      setResult({ status: 'unknown', message: 'An error occurred during analysis.' });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-ff-dark to-ff-black border border-white/10 rounded-xl p-8 mb-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-ff-teal/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-ff-teal" />
            <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
              AI Code Validator
            </h3>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            Not sure if a code you found online is real? Paste it here and our Gemini-powered AI will analyze its format and likelihood of working.
          </p>
          
          <form onSubmit={handleValidate} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="ENTER 12/16 CHAR CODE"
              maxLength={16}
              className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white font-mono uppercase placeholder-gray-600 focus:outline-none focus:border-ff-teal focus:ring-1 focus:ring-ff-teal transition-all"
            />
            <button
              type="submit"
              disabled={isAnalyzing || code.length < 12}
              className="bg-ff-teal/10 hover:bg-ff-teal/20 text-ff-teal border border-ff-teal/20 font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Validate'
              )}
            </button>
          </form>
        </div>

        {/* Result Area */}
        <div className="w-full md:w-1/3 min-h-[100px] flex items-center justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
          {result ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full"
            >
              <div className={`flex items-start gap-3 p-4 rounded-lg border ${
                result.status === 'valid' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                result.status === 'invalid' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
              }`}>
                {result.status === 'valid' ? <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" /> :
                 result.status === 'invalid' ? <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" /> :
                 <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
                <div>
                  <p className="font-bold uppercase tracking-wider text-sm mb-1">
                    {result.status === 'valid' ? 'Likely Valid' :
                     result.status === 'invalid' ? 'Invalid Format' : 'Unknown Status'}
                  </p>
                  <p className="text-xs opacity-80">{result.message}</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center text-gray-500 text-sm">
              <Sparkles className="w-8 h-8 mx-auto mb-2 opacity-20" />
              <p>Awaiting code input...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
