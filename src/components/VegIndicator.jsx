import React from 'react';

const VegIndicator = ({ className = '' }) => {
  return (
    <span
      className={`inline-flex items-center justify-center border-2 border-emerald-600 p-[2.5px] w-4.5 h-4.5 rounded-[4px] bg-white dark:bg-neutral-900 shrink-0 select-none ${className}`}
      title="Pure Veg"
    >
      <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
    </span>
  );
};

export default VegIndicator;
