import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { handleImageError } from '../utils/handleImageError';

const CategoryCard = ({ category }) => (
  <motion.div whileHover={{ y: -6 }} className="h-full">
    <Link to={category.route} className="card-surface flex flex-col h-full overflow-hidden rounded-[24px]">
      <div className="relative h-20 sm:h-32 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          onError={handleImageError}
          className="food-image transition duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
      <div className="flex flex-col flex-grow items-center justify-center p-2.5 sm:p-4 text-center">
        <h3 className="font-display text-xs sm:text-base font-semibold leading-tight">{category.title}</h3>
        <p className="mt-1 text-[10px] sm:text-xs text-[color:var(--text-secondary)] line-clamp-1">
          {category.subtitle}
        </p>
      </div>
    </Link>
  </motion.div>
);

export default CategoryCard;
