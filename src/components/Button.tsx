import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'filled' | 'outlined';
  icon?: IconType;
  fullWidth?: boolean;
}

export function Button({ onPress, title, variant = 'filled', icon: Icon, fullWidth = false }: ButtonProps) {
  return (
    <button
      onClick={onPress}
      className={`font-poppins font-medium py-2 px-8 rounded-3xl transition-colors duration-300 flex flex-row items-center justify-center
        ${variant === 'filled' ?
          'bg-primary-500 hover:bg-primary-700 text-white' : 
          'bg-transparent border-2 border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white'
        } ${fullWidth ? 'w-full' : 'w-auto'}`
      }
    >
      {Icon && <Icon className="mr-2" />}
      {title}
    </button>
  );
}
