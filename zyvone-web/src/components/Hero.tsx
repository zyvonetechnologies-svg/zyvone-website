import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Transform Your Vision Into Reality";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* ================= BACKGROUND ORBS ================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="gradient-orb gradient-orb-violet w-[520px] h-[520px] top-[-160px] left-1/2 -translate-x-1/2 opacity-60" />
        <div className="gradient-orb gradient-orb-blue w-[600px] h-[600px] bottom-[-220px] left-1/2 -translate-x-1/2 opacity-50" />
      </div>

      {/* ================= GRID OVERLAY ================= */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(263 70% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(263 70% 50% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full px-6 pt-32 pb-24">
        <div className="mx-auto max-w-5xl text-center flex flex-col items-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Now accepting new clients for 2026
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">{displayText}</span>
            {displayText.length < fullText.length && (
              <span className="inline-block w-1 h-12 md:h-16 bg-primary ml-1 animate-pulse align-bottom" />
            )}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            We craft cutting-edge digital experiences that drive growth,
            inspire action, and position your brand at the forefront of
            innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="btn-glow group flex items-center justify-center gap-2 px-8 py-4 rounded-full text-primary-foreground font-semibold text-lg"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#about"
              className="btn-outline-glow flex items-center justify-center gap-2 px-8 py-4 rounded-full text-foreground font-semibold text-lg"
            >
              <Play className="w-5 h-5" />
              Watch Our Story
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-20 pt-12 border-t border-border/30 w-full"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by industry leaders worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60">
              {["Microsoft", "Google", "Amazon", "Meta", "Apple"].map(
                (company) => (
                  <span
                    key={company}
                    className="text-xl md:text-2xl font-display font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
