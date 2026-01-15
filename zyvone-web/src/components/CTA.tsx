import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-cta-gradient opacity-90" />
      
      {/* Animated Orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] gradient-orb gradient-orb-violet opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] gradient-orb gradient-orb-blue opacity-30" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px),
                           linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your{" "}
            <span className="text-lavender">Digital Future?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Join hundreds of forward-thinking companies who trust us to deliver 
            exceptional digital experiences. Let's build something extraordinary together.
          </p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-violet-900 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          {/* Trust Text */}
          <p className="mt-8 text-white/60 text-sm">
            ✓ Free consultation &nbsp; ✓ No commitment required &nbsp; ✓ Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;