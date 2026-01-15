import { motion } from "framer-motion";
import { 
  Award, 
  Clock, 
  HeartHandshake, 
  Lightbulb, 
  Target, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award-Winning Team",
    description: "Recognized globally for excellence in digital innovation and design.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver quality work exactly when promised.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "24/7 support and maintenance to keep your business running smoothly.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Forward-thinking approaches that keep you ahead of the competition.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision we make is focused on achieving your business goals.",
  },
  {
    icon: Users,
    title: "Transparent Process",
    description: "Clear communication and visibility throughout every project phase.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient Line */}
      <div className="glow-line w-full mb-24" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              We Build Digital Experiences That{" "}
              <span className="gradient-text">Inspire & Convert</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With over a decade of experience and hundreds of successful projects, 
              we've mastered the art of turning complex ideas into elegant digital solutions 
              that drive real business results.
            </p>
            
            {/* Key Stats */}
            <div className="flex gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">98%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Team Experts</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">3x</div>
                <div className="text-sm text-muted-foreground mt-1">Faster Delivery</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;