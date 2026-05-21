import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { handleImageError } from '../utils/handleImageError';

const CollectionCard = ({ collection }) => (
  <motion.div whileHover={{ y: -6 }} className="h-full">
    <Link
      to={`/restaurants?collection=${collection.id}`}
      className="group relative block h-full overflow-hidden rounded-[28px]"
    >
      <img
        src={collection.image}
        alt={collection.title}
        onError={handleImageError}
        className="food-image absolute inset-0 transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
      <div className="relative flex min-h-[320px] flex-col justify-end p-6 text-white">
        <span className="chip w-fit border-white/20 bg-white/10 text-white">
          {collection.places}
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold">{collection.title}</h3>
        <p className="mt-2 max-w-sm text-sm text-white/75">{collection.description}</p>
      </div>
    </Link>
  </motion.div>
);

export default CollectionCard;
