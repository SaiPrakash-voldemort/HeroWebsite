import { motion } from 'framer-motion';

interface AnimatedBannerProps {
  title: string;
  subtitle: string;
  bgClass?: string;
}

const AnimatedBanner: React.FC<AnimatedBannerProps> = ({ 
  title, 
  subtitle, 
  bgClass = "bg-gradient-to-r from-primary-500 to-secondary-500" 
}) => {
  return (
    <motion.div 
      className={`${bgClass} rounded-2xl p-8 md:p-12 mb-8 text-white shadow-lg overflow-hidden relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -ml-20 -mb-20"></div>
      
      <div className="relative z-10">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl opacity-90 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AnimatedBanner;
