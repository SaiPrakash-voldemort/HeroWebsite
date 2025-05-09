import { motion } from 'framer-motion';

interface AnimatedBannerProps {
  title: string;
  subtitle: string;
  bgClass?: string;
}

const AnimatedBanner: React.FC<AnimatedBannerProps> = ({ 
  title, 
  subtitle, 
  bgClass = "bg-gradient-to-r from-primary-600 to-secondary-600" 
}) => {
  return (
    <motion.div
      className={`${bgClass} text-white p-8 md:p-12 rounded-lg mb-8 shadow-lg`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      
      <motion.p
        className="text-lg md:text-xl text-white/90"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedBanner;