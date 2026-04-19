import React from 'react';
import { 
  Gamepad2, 
  Bike, 
  Music, 
  Trophy, 
  Github, 
  Twitter, 
  Instagram, 
  Mail,
  Quote
} from 'lucide-react';
import { motion } from 'motion/react';

/* 
  DANISH: PLEASE PROVIDE THE FOLLOWING ASSETS IN YOUR PUBLIC/ ASSETS FOLDER:
  - hero.jpg     (Hero header background)
  - riding.jpg   (The Motion/Riding section background)
  - thoughts.jpg (The Thoughts section background)
  - aleemrk.jpg  (The Music section background)
  - football.jpg (The Football/AC Milan section background)
*/

const Flashcard = ({ children, className = "", delay = 0, style }: { children: React.ReactNode, className?: string, delay?: number, style?: React.CSSProperties }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.05 }}
    style={style}
    className={`glass rounded-2xl p-6 transition-all duration-500 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

const SectionVisual = ({ bgSrc, title, subtitle, children, className = "", bgPosition = "center" }: { bgSrc: string, title?: string, subtitle?: string, children?: React.ReactNode, className?: string, bgPosition?: string }) => (
  <section 
    className={`relative min-h-[80vh] w-full bg-visual rounded-[2rem] overflow-hidden flex flex-col justify-end p-8 md:p-16 mb-12 shadow-2xl ${className}`}
    style={{ backgroundImage: `url(${bgSrc})`, backgroundPosition: bgPosition }}
  >
    <div className="absolute inset-0 overlay-dark" />
    <div className="relative z-10 space-y-4 max-w-4xl">
      {title && (
        <div className="relative">
          <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter text-white uppercase leading-[0.8] drop-shadow-2xl">
            {title}
          </h2>
        </div>
      )}
      {subtitle && <p className="font-serif italic text-2xl md:text-5xl text-white/80">{subtitle}</p>}
      {children}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 space-y-12">
      
      {/* Hero Header */}
      <section className="relative min-h-[60vh] md:min-h-screen w-full rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-8 md:p-16 mb-12 shadow-2xl">
        {/* Layered Background Image with subtle zoom to hide watermark/logo */}
        <div 
          className="absolute inset-0 bg-visual"
          style={{ 
            backgroundImage: `url('https://i.ibb.co/BVj3DHQz/Gemini-Generated-Image-jhwz3ojhwz3ojhwz.png')`,
            backgroundPosition: 'center 15%',
            backgroundSize: '120% auto', // Increased zoom to definitely hide the logo
          }} 
        />
        <div className="absolute inset-0 overlay-dark opacity-30" />
      </section>

      {/* Riding Section - Narrative approach */}
      <SectionVisual 
        bgSrc="https://i.ibb.co/V0sTP4n0/xsr155.jpg" // Danish: This is your riding action
        bgPosition="center top"
        title="MOTION"
        subtitle="Chasing Precision"
      >
        <div className="pt-6 space-y-4">
          <p className="text-lg md:text-xl font-light text-white/60 leading-relaxed max-w-xl">
            It isn't about the machine, it's about the silence within the speed. When I'm on the Yamaha XSR 155, the world loses its noise, and only the line remains. I ride to find focus.
          </p>
          <div className="flex items-center gap-3 text-white/40">
            <Bike size={20} />
            <span className="text-xs tracking-[0.3em] font-medium uppercase">Heritage Ride</span>
          </div>
        </div>
      </SectionVisual>

      {/* Thoughts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full min-h-[400px] rounded-[2rem] overflow-hidden relative glass bg-visual p-12 flex flex-col justify-center"
          style={{ backgroundImage: `url('https://i.ibb.co/vx9d1DzX/ancientphylosophy.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <Quote className="text-white/10 absolute top-8 left-8" size={120} strokeWidth={0.5} />
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
              Design is more than aesthetic. It's an <span className="font-serif italic">unspoken trust</span>.
            </h3>
            <p className="text-white/80 text-lg md:text-xl font-light max-w-md">
              Logic builds the skeleton, but honesty builds the soul. My philosophy is simple: Do it right, or don't do it at all.
            </p>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full min-h-[400px] rounded-[2rem] glass bg-visual relative overflow-hidden flex items-center justify-center p-12"
          style={{ backgroundImage: `url('https://i.ibb.co/N23n0C97/honesty.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
          <div className="relative z-10 text-center space-y-2">
            <p className="text-6xl font-black text-white uppercase tracking-tighter">HONESTY</p>
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold uppercase">True wealth is found in Honesty</p>
          </div>
        </motion.div>
      </section>

      {/* Hobby Flashcards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* BGMI Flashcard */}
        <Flashcard 
          className="flex flex-col justify-between bg-visual relative min-h-[300px]"
          style={{ backgroundImage: `url('https://i.ibb.co/zCTWTm2/PUBG.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <Gamepad2 className="text-white/40" size={32} strokeWidth={1} />
              <div className="flex gap-1">
                {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-red-500/50" />)}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl font-extrabold tracking-tighter text-white">RESET</h3>
              <p className="text-white/80 text-lg leading-snug">
                When work gets noisy. 4-finger claw, battle-hardened. Not a sport, a stress reliever.
              </p>
            </div>
          </div>
        </Flashcard>

        {/* Music Flashcard */}
        <Flashcard 
          className="bg-visual relative group min-h-[300px]"
          style={{ backgroundImage: `url('https://i.ibb.co/zVCrx1Yd/aleemrk.jpg')` }} // Danish: This is your music background
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
          <div className="relative z-10 h-full flex flex-col justify-between">
            <Music className="text-white/40" size={24} strokeWidth={1} />
            <div className="space-y-2">
              <h3 className="text-sm uppercase tracking-[0.3em] text-white/40 font-bold">FAVOURITE SINGER / RAPPER</h3>
              <p className="text-3xl font-light">Aleemrk</p>
              <p className="text-white/60 text-xs font-mono uppercase">Track: HASRAT</p>
            </div>
          </div>
        </Flashcard>

      </div>

      {/* Football Section - Right before footer */}
      <section 
        className="relative h-[60vh] w-full bg-visual rounded-[2rem] overflow-hidden flex flex-col justify-center items-center text-center p-8 mb-12"
        style={{ backgroundImage: `url('https://i.ibb.co/FkVWnBJW/real-madrid.avif')` }} // Danish: This is your football allegiance
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        <div className="relative z-10 space-y-6">
          <Trophy className="text-yellow-500 mx-auto mb-4" size={48} strokeWidth={1} />
          <h3 className="text-5xl md:text-8xl font-black text-white tracking-widest uppercase italic">REAL MADRID</h3>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-white/80 font-serif italic uppercase tracking-wider">Hala Madridistas VAMOOSSS!!</p>
            <p className="text-xs uppercase tracking-[0.8em] text-yellow-500/60 font-bold">History • Heritage • Hustle</p>
          </div>
        </div>
      </section>

      {/* Honest Footer */}
      <footer className="w-full bg-white text-black p-8 md:p-12 rounded-[2rem] mb-8 shadow-2xl">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl md:text-3xl font-medium leading-tight tracking-tight">
            You aren't just looking at a site, <span className="font-serif italic">you're looking at Danish</span>. Every line of code, every design decision, and every project I touch is backed by unshakeable honesty and a commitment to get it done right, on time. When I say 'I got you', I mean it.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-8 pt-8 border-t border-black/10">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">Social Hub</p>
              <div className="flex gap-6">
                <a href="https://github.com/D4nishkhan" target="_blank" rel="noopener noreferrer">
                  <Github size={20} strokeWidth={1.5} className="hover:opacity-50 transition-opacity" />
                </a>
                <a href="https://x.com/D4nish_10" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} strokeWidth={1.5} className="hover:opacity-50 transition-opacity" />
                </a>
                <a href="https://www.instagram.com/khan_danish_10" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} strokeWidth={1.5} className="hover:opacity-50 transition-opacity" />
                </a>
                <a href="mailto:danishkhan801017@gmail.com">
                  <Mail size={20} strokeWidth={1.5} className="hover:opacity-50 transition-opacity" />
                </a>
              </div>
            </div>
            <p className="font-hand text-4xl select-none">Danish Khan</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
