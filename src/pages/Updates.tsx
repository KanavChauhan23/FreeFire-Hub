import { motion } from 'motion/react';
import { Clock, ArrowRight, FileText, Settings, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Updates() {
  const updates = [
    {
      id: 5,
      title: 'Free Fire 2026 Official Roadmap: What to Expect',
      category: 'News',
      date: '12 hours ago',
      author: 'FF Hub AI',
      image: 'https://picsum.photos/seed/ff-roadmap-2026/800/400',
      summary: 'Garena has unveiled the massive 2026 roadmap for Free Fire, featuring a completely revamped battle royale map, the integration of new graphics engine elements, and the highly anticipated OB50 milestone update.',
      tags: ['Roadmap', '2026', 'OB50'],
      featured: true,
    },
    {
      id: 1,
      title: 'OB48 Patch Notes: Complete Breakdown',
      category: 'Patch Notes',
      date: '2 hours ago',
      author: 'FF Hub AI',
      image: 'https://picsum.photos/seed/ff-patch-main/800/400',
      summary: 'The OB48 update brings massive changes to the ranked system, weapon balancing, and introduces the new character Zephyr. Here is everything you need to know before jumping into the new season.',
      tags: ['OB48', 'Ranked', 'Balancing'],
      featured: false,
    },
    {
      id: 2,
      title: 'New Character Leak: "Zephyr" Abilities Explained',
      category: 'Leaks',
      date: '5 hours ago',
      author: 'FF Hub AI',
      image: 'https://picsum.photos/seed/ff-char-leak/600/400',
      summary: 'First look at the upcoming wind-based character Zephyr. His active skill "Gale Force" provides a massive movement speed boost and temporary shield to allies.',
      tags: ['Characters', 'Leaks'],
      featured: false,
    },
    {
      id: 3,
      title: 'Top 5 Weapons for Rank Push in OB48',
      category: 'Meta Guide',
      date: '1 day ago',
      author: 'FF Hub AI',
      image: 'https://picsum.photos/seed/ff-gun-meta/600/400',
      summary: 'The current meta has shifted significantly after the recent SMG nerfs. Here are the top 5 weapons you should be using to reach Grandmaster this season.',
      tags: ['Weapons', 'Guide', 'Ranked'],
      featured: false,
    },
    {
      id: 4,
      title: 'Ramadan Special Event Calendar Revealed',
      category: 'Events',
      date: '2 days ago',
      author: 'FF Hub AI',
      image: 'https://picsum.photos/seed/ff-event-ramadan/600/400',
      summary: 'Garena has officially announced the Ramadan 2026 event calendar. Players can expect free Magic Cubes, exclusive bundles, and daily login rewards.',
      tags: ['Events', 'Free Rewards'],
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
          Latest <span className="text-ff-orange">Updates</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-3xl"
        >
          Stay ahead of the meta. Get real-time patch notes, character leaks, weapon balancing details, and event guides.
        </motion.p>
      </div>

      {/* Featured Update */}
      {updates.filter(u => u.featured).map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 group cursor-pointer"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-ff-orange/50 transition-colors">
            <div className="aspect-[21/9] md:aspect-[3/1] relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ff-black via-ff-black/50 to-transparent" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-ff-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-300 font-bold uppercase tracking-wider bg-black/50 px-3 py-1.5 rounded backdrop-blur-sm">
                  <Clock className="w-3 h-3" /> {post.date}
                </span>
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase tracking-wide mb-4 group-hover:text-ff-orange transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mb-6 line-clamp-2 md:line-clamp-none">
                {post.summary}
              </p>
              
              <div className="flex items-center gap-4">
                <Link to={`/updates/${post.id}`} className="inline-flex items-center gap-2 text-ff-teal font-bold uppercase tracking-wider hover:text-white transition-colors">
                  Read Full Breakdown <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Grid Updates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {updates.filter(u => !u.featured).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer bg-ff-dark border border-white/10 rounded-xl overflow-hidden hover:border-ff-orange/50 transition-colors flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                {post.category}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">
                <Clock className="w-3 h-3" />
                {post.date}
                <span className="mx-2 opacity-50">•</span>
                By {post.author}
              </div>
              
              <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-3 group-hover:text-ff-orange transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                {post.summary}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-white/5 px-2 py-1 rounded border border-white/5">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <Link to={`/updates/${post.id}`} className="inline-flex items-center gap-2 text-ff-teal text-sm font-bold uppercase tracking-wider hover:text-white transition-colors mt-auto">
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Categories */}
      <div className="mt-20 pt-12 border-t border-white/5">
        <h3 className="font-display text-2xl font-bold text-white uppercase tracking-wide mb-8">
          Browse by Category
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/category/patch-notes" className="bg-ff-dark border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-ff-orange hover:bg-ff-orange/5 transition-colors group">
            <FileText className="w-8 h-8 text-gray-400 group-hover:text-ff-orange transition-colors" />
            <span className="font-bold uppercase tracking-wider text-sm text-gray-300 group-hover:text-white">Patch Notes</span>
          </Link>
          <Link to="/category/leaks" className="bg-ff-dark border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-ff-teal hover:bg-ff-teal/5 transition-colors group">
            <Zap className="w-8 h-8 text-gray-400 group-hover:text-ff-teal transition-colors" />
            <span className="font-bold uppercase tracking-wider text-sm text-gray-300 group-hover:text-white">Leaks & Rumors</span>
          </Link>
          <Link to="/category/guides" className="bg-ff-dark border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-yellow-500 hover:bg-yellow-500/5 transition-colors group">
            <Settings className="w-8 h-8 text-gray-400 group-hover:text-yellow-500 transition-colors" />
            <span className="font-bold uppercase tracking-wider text-sm text-gray-300 group-hover:text-white">Meta Guides</span>
          </Link>
          <Link to="/category/events" className="bg-ff-dark border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-purple-500 hover:bg-purple-500/5 transition-colors group">
            <Clock className="w-8 h-8 text-gray-400 group-hover:text-purple-500 transition-colors" />
            <span className="font-bold uppercase tracking-wider text-sm text-gray-300 group-hover:text-white">Events</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
