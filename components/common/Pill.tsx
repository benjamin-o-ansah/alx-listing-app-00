// components/common/Pill.tsx
import { React } from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => (
  <button 
    onClick={onClick}
    className="px-6 py-2 border border-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all text-sm font-medium whitespace-nowrap"
  >
    {label}
  </button>
);

export default Pill;