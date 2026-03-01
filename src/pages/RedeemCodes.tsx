import { motion } from 'motion/react';
import { Copy, CheckCircle2, Clock, AlertTriangle, ShieldCheck, Flame } from 'lucide-react';
import { useState } from 'react';
import AIValidator from '../components/AIValidator';

export default function RedeemCodes() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const activeCodes = [
    { code: 'FFOB48GIFT26', reward: 'Diamond Royale Voucher', expires: '2h 14m', verified: true, region: 'Global' },
    { code: 'FFMAXNEON26', reward: 'Neon Rider Bundle', expires: '5h 30m', verified: true, region: 'Global' },
    { code: 'FFXRAMADAN26', reward: 'Ramadan Special Emote', expires: '12h 00m', verified: true, region: 'MENA/Asia' },
    { code: 'FF9M2GF14CBF', reward: 'Pumpkin Warrior (Bottom)', expires: '18h 45m', verified: false, region: 'India' },
    { code: 'FF7MUY4ME6SC', reward: 'Paleolithic Bundle', expires: '23h 10m', verified: true, region: 'Global' },
  ];

  const expiredCodes = [
    { code: 'FF11WFNPP956', reward: 'Killer Mind Surfboard', expiredAt: 'Yesterday' },
    { code: 'FF1164XNJZ2V', reward: 'Winterland\'s Snowboard', expiredAt: '2 days ago' },
    { code: 'FF119MB3PFA5', reward: 'Atlantic Warrior (Shoes)', expiredAt: '3 days ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold uppercase tracking-wider mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>Updated 10 mins ago</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4"
        >
          Free Fire <span className="text-ff-orange">Redeem Codes</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg max-w-3xl"
        >
          Get the latest working Free Fire and Free Fire MAX redeem codes for today. Claim free diamonds, bundles, emotes, and gun skins before they expire.
        </motion.p>
      </div>

      {/* Active Codes Grid */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Flame className="w-6 h-6 text-ff-orange" />
          <h2 className="font-display text-3xl font-bold text-white uppercase tracking-wide">
            Active Codes
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeCodes.map((item, index) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-ff-dark border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-ff-orange/50 transition-colors flex flex-col sm:flex-row gap-6"
            >
              {/* Left Side - Code & Copy */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {item.verified ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-green-500 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                        <ShieldCheck className="w-3 h-3" /> Verified Working
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                        <AlertTriangle className="w-3 h-3" /> Unverified
                      </span>
                    )}
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {item.region}
                    </span>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 mt-4 border border-white/5 flex justify-between items-center group-hover:border-ff-orange/30 transition-colors">
                    <code className="font-mono text-2xl text-ff-orange font-bold tracking-widest">{item.code}</code>
                    <button
                      onClick={() => handleCopy(item.code)}
                      className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
                      title="Copy Code"
                    >
                      {copiedCode === item.code ? <CheckCircle2 className="w-6 h-6 text-green-500" /> : <Copy className="w-6 h-6" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Details */}
              <div className="sm:w-1/3 flex flex-col justify-center sm:border-l border-white/10 sm:pl-6 pt-4 sm:pt-0 border-t sm:border-t-0">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Reward</p>
                <p className="text-white font-medium text-sm mb-4 leading-tight">{item.reward}</p>
                
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-ff-teal" />
                  Expires: <span className="text-ff-teal">{item.expires}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Validator */}
      <AIValidator />

      {/* How to Redeem Guide */}
      <div className="bg-ff-dark border border-white/10 rounded-xl p-8 mb-16">
        <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-6">
          How to Redeem Free Fire Codes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-ff-orange/10 border border-ff-orange/20 flex items-center justify-center text-ff-orange font-display text-2xl font-bold">1</div>
            <h4 className="text-white font-bold">Visit Official Site</h4>
            <p className="text-gray-400 text-sm">Go to the official Garena Free Fire Rewards Redemption Site (reward.ff.garena.com).</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-ff-orange/10 border border-ff-orange/20 flex items-center justify-center text-ff-orange font-display text-2xl font-bold">2</div>
            <h4 className="text-white font-bold">Login to Account</h4>
            <p className="text-gray-400 text-sm">Log in using your bound account (Facebook, VK, Google, Huawei, Apple, or Twitter).</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full bg-ff-orange/10 border border-ff-orange/20 flex items-center justify-center text-ff-orange font-display text-2xl font-bold">3</div>
            <h4 className="text-white font-bold">Enter & Confirm</h4>
            <p className="text-gray-400 text-sm">Paste the 12/16 character code and click 'Confirm'. Rewards will be sent to your in-game mail within 24 hours.</p>
          </div>
        </div>
      </div>

      {/* Expired Codes */}
      <div>
        <h2 className="font-display text-2xl font-bold text-gray-500 uppercase tracking-wide mb-6">
          Recently Expired Codes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {expiredCodes.map((item) => (
            <div key={item.code} className="bg-white/5 border border-white/5 rounded-lg p-4 opacity-60 grayscale">
              <div className="flex justify-between items-center mb-2">
                <code className="font-mono text-lg text-gray-400 font-bold tracking-widest line-through">{item.code}</code>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                  Expired
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-1">{item.reward}</p>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                Expired: {item.expiredAt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
