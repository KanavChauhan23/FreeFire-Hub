import { motion } from 'motion/react';
import { Shield, Zap, Heart, Target, Info, Search, Filter } from 'lucide-react';
import { useState } from 'react';

export default function Characters() {
  const [activeTier, setActiveTier] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tiers = ['All', 'S Tier', 'A Tier', 'B Tier', 'C Tier'];

  const characters = [
    {
      id: 1,
      name: 'Alok',
      tier: 'S Tier',
      role: 'Support',
      skill: 'Drop the Beat',
      image: 'https://picsum.photos/seed/ff-alok/200/200',
      description: 'Creates a 5m aura that increases movement speed and restores HP. Essential for rush gameplay and team support.',
      stats: { hp: 90, speed: 95, damage: 50 },
      icon: <Heart className="w-4 h-4 text-green-500" />
    },
    {
      id: 2,
      name: 'Orion',
      tier: 'S Tier',
      role: 'Rusher',
      skill: 'Crimson Crush',
      image: 'https://picsum.photos/seed/ff-orion/200/200',
      description: 'Replaces EP with Crimson Energy. Consumes energy to become immune to damage and absorb HP from nearby enemies.',
      stats: { hp: 100, speed: 80, damage: 90 },
      icon: <Shield className="w-4 h-4 text-red-500" />
    },
    {
      id: 3,
      name: 'Kelly (Awakened)',
      tier: 'A Tier',
      role: 'Flanker',
      skill: 'Deadly Velocity',
      image: 'https://picsum.photos/seed/ff-kelly/200/200',
      description: 'Increases sprinting speed. After sprinting for 4s, the first shot inflicts 106% damage.',
      stats: { hp: 70, speed: 100, damage: 85 },
      icon: <Zap className="w-4 h-4 text-yellow-500" />
    },
    {
      id: 4,
      name: 'Homer',
      tier: 'A Tier',
      role: 'Scout',
      skill: 'Senses Shockwave',
      image: 'https://picsum.photos/seed/ff-homer/200/200',
      description: 'Releases a drone to the nearest frontal enemy, creating a 5m pulse explosion that reduces movement and firing speed.',
      stats: { hp: 80, speed: 75, damage: 70 },
      icon: <Target className="w-4 h-4 text-blue-500" />
    },
    {
      id: 5,
      name: 'Chrono',
      tier: 'B Tier',
      role: 'Defender',
      skill: 'Time Turner',
      image: 'https://picsum.photos/seed/ff-chrono/200/200',
      description: 'Creates a force field that blocks 800 damage. Cannot attack outside from within. Good for revives in open areas.',
      stats: { hp: 85, speed: 85, damage: 40 },
      icon: <Shield className="w-4 h-4 text-purple-500" />
    },
    {
      id: 6,
      name: 'Wukong',
      tier: 'B Tier',
      role: 'Survivor',
      skill: 'Camouflage',
      image: 'https://picsum.photos/seed/ff-wukong/200/200',
      description: 'Transforms into a bush with reduced movement speed. Cooldown resets upon taking down an enemy.',
      stats: { hp: 75, speed: 60, damage: 60 },
      icon: <Zap className="w-4 h-4 text-green-600" />
    },
  ];

  const filteredCharacters = characters.filter(char => {
    const matchesTier = activeTier === 'All' || char.tier === activeTier;
    const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          char.skill.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTier && matchesSearch;
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'S Tier': return 'text-ff-orange border-ff-orange bg-ff-orange/10';
      case 'A Tier': return 'text-purple-500 border-purple-500 bg-purple-500/10';
      case 'B Tier': return 'text-blue-500 border-blue-500 bg-blue-500/10';
      case 'C Tier': return 'text-gray-400 border-gray-400 bg-gray-400/10';
      default: return 'text-white border-white/20 bg-white/5';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4"
        >
          Character <span className="text-ff-orange">Tier List</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-3xl"
        >
          The ultimate OB48 character rankings for ranked matches. Updated weekly based on pro player pick rates and meta analysis.
        </motion.p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-ff-dark p-4 rounded-xl border border-white/5">
        {/* Tier Filters */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {tiers.map(tier => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier)}
              className={`px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all border ${
                activeTier === tier
                  ? getTierColor(tier)
                  : 'text-gray-400 border-transparent hover:bg-white/5'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search characters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-ff-teal focus:ring-1 focus:ring-ff-teal transition-all text-sm"
          />
        </div>
      </div>

      {/* Tier List Grid */}
      <div className="space-y-12">
        {['S Tier', 'A Tier', 'B Tier', 'C Tier'].map(tierLevel => {
          const tierChars = filteredCharacters.filter(c => c.tier === tierLevel);
          
          if (tierChars.length === 0) return null;

          return (
            <div key={tierLevel} className="relative">
              {/* Tier Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center font-display text-3xl font-bold border ${getTierColor(tierLevel)}`}>
                  {tierLevel.charAt(0)}
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
                    {tierLevel === 'S Tier' ? 'God Tier (Must Pick)' : 
                     tierLevel === 'A Tier' ? 'Excellent (Meta)' : 
                     tierLevel === 'B Tier' ? 'Good (Situational)' : 'Average'}
                  </h2>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                    {tierChars.length} Characters
                  </p>
                </div>
              </div>

              {/* Character Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tierChars.map((char, index) => (
                  <motion.div
                    key={char.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-ff-dark border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors group flex flex-col"
                  >
                    <div className="flex p-4 gap-4 border-b border-white/5">
                      <div className="w-20 h-20 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 relative">
                        <img src={char.image} alt={char.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        <div className="absolute bottom-0 right-0 bg-black/80 p-1 rounded-tl-lg">
                          {char.icon}
                        </div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide group-hover:text-ff-orange transition-colors">
                          {char.name}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                          <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">{char.role}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex-grow flex flex-col">
                      <div className="mb-4">
                        <p className="text-xs font-bold text-ff-teal uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Zap className="w-3 h-3" /> Skill: {char.skill}
                        </p>
                        <p className="text-sm text-gray-400 line-clamp-3">
                          {char.description}
                        </p>
                      </div>
                      
                      {/* Stats Bars */}
                      <div className="mt-auto space-y-2 pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="w-16 text-gray-500 font-bold uppercase tracking-wider">Survive</span>
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: `${char.stats.hp}%` }} />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="w-16 text-gray-500 font-bold uppercase tracking-wider">Mobility</span>
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${char.stats.speed}%` }} />
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="w-16 text-gray-500 font-bold uppercase tracking-wider">Damage</span>
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 rounded-full" style={{ width: `${char.stats.damage}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Analysis Box */}
      <div className="mt-16 bg-gradient-to-r from-ff-orange/10 to-ff-teal/10 border border-white/10 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-16 h-16 rounded-full bg-ff-dark border border-white/20 flex items-center justify-center flex-shrink-0">
          <Info className="w-8 h-8 text-white" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-2">
            AI Meta Analysis (OB48)
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Based on recent patch data analyzed by Gemini AI, the current meta heavily favors aggressive rushers with self-sustain (Orion, Alok). Defensive characters like Chrono have seen a 15% drop in pick rate due to the shield duration nerf. We recommend pairing a strong rusher with a scout (Homer) for optimal squad synergy.
          </p>
        </div>
      </div>
    </div>
  );
}
