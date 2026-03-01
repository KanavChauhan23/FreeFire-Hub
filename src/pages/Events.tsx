import { motion } from 'motion/react';
import { Calendar, Gift, Clock, ArrowRight, Star } from 'lucide-react';

export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Ramadan Special 2026',
      type: 'Major Event',
      status: 'Ongoing',
      endDate: 'Ends in 14 Days',
      image: 'https://picsum.photos/seed/ff-event-ramadan/800/400',
      description: 'Celebrate Ramadan with exclusive daily login rewards, special missions, and a chance to win the new Crescent Moon bundle.',
      rewards: ['Magic Cube', 'Crescent Moon Bundle', 'Custom Room Cards'],
      featured: true,
    },
    {
      id: 2,
      title: 'OB48 Login Rewards',
      type: 'Login Event',
      status: 'Ending Soon',
      endDate: 'Ends in 2 Days',
      image: 'https://picsum.photos/seed/ff-event-login/600/300',
      description: 'Log in for 7 consecutive days to claim the new OB48 exclusive avatar, banner, and weapon loot crates.',
      rewards: ['Avatar', 'Banner', 'Weapon Crates'],
      featured: false,
    },
    {
      id: 3,
      title: 'Top-Up Bonus: Zephyr',
      type: 'Top-Up',
      status: 'Upcoming',
      endDate: 'Starts Tomorrow',
      image: 'https://picsum.photos/seed/ff-event-topup/600/300',
      description: 'Top up 100 diamonds to get the new character Zephyr for free. Top up 500 diamonds for his exclusive bundle.',
      rewards: ['Zephyr Character', 'Zephyr Bundle'],
      featured: false,
    },
    {
      id: 4,
      title: 'Ranked Season 42 Rush',
      type: 'Ranked',
      status: 'Ongoing',
      endDate: 'Ends in 30 Days',
      image: 'https://picsum.photos/seed/ff-event-ranked/600/300',
      description: 'Push your rank to Heroic before the season ends to claim the exclusive Season 42 Heroic shirt and banner.',
      rewards: ['Heroic Shirt', 'Rank Tokens'],
      featured: false,
    },
    {
      id: 5,
      title: 'FFWS 2026 Global Finals',
      type: 'Esports',
      status: 'Upcoming',
      endDate: 'Starts Nov 2026',
      image: 'https://picsum.photos/seed/ff-event-ffws/600/300',
      description: 'The biggest esports event of the year. Watch the global finals to earn exclusive viewer rewards, including the FFWS 2026 Champion bundle and custom emotes.',
      rewards: ['FFWS Bundle', 'Emote', 'Diamond Vouchers'],
      featured: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl md:text-6xl font-bold text-white uppercase tracking-tight mb-4"
        >
          Event <span className="text-ff-orange">Calendar</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-3xl"
        >
          Never miss a free reward. Track all ongoing and upcoming Free Fire events, top-up bonuses, and special collaborations.
        </motion.p>
      </div>

      {/* Featured Event */}
      {events.filter(e => e.featured).map((event) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 relative rounded-2xl overflow-hidden border border-ff-orange/30 group"
        >
          <div className="aspect-[21/9] md:aspect-[3/1] relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ff-black via-ff-black/80 to-transparent" />
          </div>
          
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center w-full md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-ff-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-1">
                <Star className="w-3 h-3" /> {event.type}
              </span>
              <span className="flex items-center gap-1 text-xs text-green-400 font-bold uppercase tracking-wider bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded backdrop-blur-sm">
                <Clock className="w-3 h-3" /> {event.endDate}
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-wide mb-4">
              {event.title}
            </h2>
            
            <p className="text-gray-300 text-base md:text-lg mb-6">
              {event.description}
            </p>
            
            <div className="mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Rewards:</p>
              <div className="flex flex-wrap gap-2">
                {event.rewards.map(reward => (
                  <span key={reward} className="flex items-center gap-1 text-sm font-bold text-white bg-white/10 px-3 py-1.5 rounded border border-white/20">
                    <Gift className="w-4 h-4 text-ff-teal" /> {reward}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="w-fit bg-ff-orange hover:bg-[#ff5500] text-white font-display text-xl font-bold uppercase tracking-wider px-8 py-3 rounded-lg transition-colors flex items-center gap-2">
              View Event Guide <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      ))}

      {/* Event Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.filter(e => !e.featured).map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-ff-dark border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors flex flex-col group"
          >
            <div className="relative aspect-video">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  {event.type}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border backdrop-blur-md ${
                  event.status === 'Ongoing' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                  event.status === 'Ending Soon' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                  'bg-blue-500/20 text-blue-400 border-blue-500/30'
                }`}>
                  {event.status}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-2 group-hover:text-ff-orange transition-colors">
                {event.title}
              </h3>
              
              <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">
                <Calendar className="w-3 h-3" />
                {event.endDate}
              </div>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {event.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Rewards:</p>
                <div className="flex flex-wrap gap-1">
                  {event.rewards.map(reward => (
                    <span key={reward} className="text-[10px] font-bold text-gray-300 uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/5">
                      {reward}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
