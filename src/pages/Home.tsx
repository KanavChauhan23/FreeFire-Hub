import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Clock, Copy, CheckCircle2, AlertCircle, ShieldAlert, Target, Zap, Map } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const activeCodes = [
    { code: 'FFOB48GIFT26', reward: 'Diamond Royale Voucher', expires: '2h 14m' },
    { code: 'FFMAXNEON26', reward: 'Neon Rider Bundle', expires: '5h 30m' },
    { code: 'FFXRAMADAN26', reward: 'Ramadan Special Emote', expires: '12h 00m' },
  ];

  const latestUpdates = [
    {
      title: 'OB48 Patch Notes Breakdown',
      category: 'Patch Notes',
      date: '2 hours ago',
      image: 'https://picsum.photos/seed/ff-patch/600/400',
      summary: 'Massive changes to the ranked system and new character abilities revealed.',
    },
    {
      title: 'New Character Leak: "Zephyr"',
      category: 'Leaks',
      date: '5 hours ago',
      image: 'https://picsum.photos/seed/ff-char/600/400',
      summary: 'First look at the upcoming wind-based character and their active skill.',
    },
    {
      title: 'Top 5 Weapons for Rank Push',
      category: 'Meta Guide',
      date: '1 day ago',
      image: 'https://picsum.photos/seed/ff-gun/600/400',
      summary: 'The current meta has shifted. Here are the best guns to use in OB48.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ff-dark pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.15)_0%,transparent_70%)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ff-orange/5 rounded-full blur-[120px]" />
          {/* Hex Grid Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M30 0l25.98 15v30L30 60 4.02 45V15z\\' fill-opacity=\\'0.03\\' fill=\\'%23ffffff\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ff-orange/10 border border-ff-orange/20 text-ff-orange text-sm font-bold uppercase tracking-wider mb-6"
            >
              <Flame className="w-4 h-4" />
              <span>OB48 Update is Live</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold text-white uppercase tracking-tight leading-[0.9] mb-6"
            >
              DOMINATE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-ff-orange to-yellow-500">BATTLEGROUND</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Get the latest Free Fire updates, daily active redeem codes, patch notes, and pro tier lists before anyone else.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/codes"
                className="w-full sm:w-auto px-8 py-4 bg-ff-orange hover:bg-[#ff5500] text-white font-display text-xl font-bold uppercase tracking-wider rounded-lg transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] flex items-center justify-center gap-2"
              >
                Get Today's Codes
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-display text-xl font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2">
                Join Telegram (50K+)
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Redeem Codes Section */}
      <section className="py-16 bg-ff-black border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-500 font-bold uppercase tracking-wider text-sm">Live Updates</span>
              </div>
              <h2 className="font-display text-4xl font-bold text-white uppercase tracking-wide">
                Active Redeem Codes
              </h2>
            </div>
            <Link to="/codes" className="text-ff-teal hover:text-white font-bold uppercase tracking-wider text-sm flex items-center gap-1 transition-colors">
              View All Codes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeCodes.map((item, index) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ff-dark border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-ff-orange/50 transition-colors"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border border-green-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </div>

                <div className="mb-4">
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Reward</p>
                  <p className="text-white font-medium">{item.reward}</p>
                </div>

                <div className="bg-black/50 rounded-lg p-4 mb-4 border border-white/5 flex justify-between items-center">
                  <code className="font-mono text-xl text-ff-orange font-bold tracking-widest">{item.code}</code>
                  <button
                    onClick={() => handleCopy(item.code)}
                    className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
                    title="Copy Code"
                  >
                    {copiedCode === item.code ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  Expires in: <span className="text-ff-teal">{item.expires}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-ff-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-display text-4xl font-bold text-white uppercase tracking-wide">
              Latest Intel
            </h2>
            <Link to="/updates" className="text-ff-orange hover:text-white font-bold uppercase tracking-wider text-sm flex items-center gap-1 transition-colors">
              All Updates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestUpdates.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-ff-orange text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                  <Clock className="w-3 h-3" />
                  {post.date}
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-ff-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {post.summary}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Roadmap Section */}
      <section className="py-16 bg-gradient-to-b from-ff-dark to-ff-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.05)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ff-teal/10 border border-ff-teal/20 text-ff-teal text-sm font-bold uppercase tracking-wider mb-4"
            >
              <Target className="w-4 h-4" />
              <span>Looking Ahead</span>
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
              Free Fire <span className="text-ff-teal">2026 Roadmap</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'OB50 Milestone Update',
                icon: <Zap className="w-8 h-8 text-ff-orange" />,
                desc: 'The massive OB50 update is slated for Q2 2026, bringing a completely overhauled graphics engine and new physics.',
                date: 'Expected: June 2026'
              },
              {
                title: 'New Battle Royale Map',
                icon: <Map className="w-8 h-8 text-ff-teal" />,
                desc: 'A brand new 8x8 map featuring vertical cityscapes, underground bunkers, and interactive environments.',
                date: 'Expected: August 2026'
              },
              {
                title: 'FFWS 2026 Global Finals',
                icon: <Target className="w-8 h-8 text-yellow-500" />,
                desc: 'The biggest esports event in Free Fire history with a record-breaking prize pool and exclusive viewer rewards.',
                date: 'Expected: November 2026'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="mb-4 p-3 bg-black/30 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {item.desc}
                </p>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {item.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Push CTA */}
      <section className="py-20 bg-ff-black relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/ff-bg-dark/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-ff-black via-ff-black/80 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShieldAlert className="w-16 h-16 text-ff-teal mx-auto mb-6 opacity-80" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4">
            Never Miss A <span className="text-ff-teal">Redeem Code</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Codes expire fast. Join 50,000+ players who get instant push notifications the second a new Free Fire redeem code drops.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-ff-teal focus:ring-1 focus:ring-ff-teal transition-all"
            />
            <button
              type="submit"
              className="bg-ff-teal hover:bg-[#00e6b8] text-ff-black font-display text-xl font-bold uppercase tracking-wider px-8 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Notify Me
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4 font-bold uppercase tracking-wider">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
