import React from 'react';
import { IconType } from 'react-icons';
import { LoadingSpin } from './LoadingSpin';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'filled' | 'outlined';
  color?: 'primary' | 'red';
  icon?: IconType;
  fullWidth?: boolean;
  fullWidthMobile?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({
  onPress,
  title,
  variant = 'filled',
  color = 'primary',
  icon: Icon,
  fullWidth = false,
  fullWidthMobile = false,
  disabled = false,
  loading = false
}: ButtonProps) {

  const baseStyle = 'font-poppins font-medium py-2 px-8 rounded-3xl transition-colors duration-300 flex flex-row items-center justify-center';
  const fullWidthStyle = fullWidthMobile ? 'w-full md:w-fit' : fullWidth ? 'w-full' : 'w-auto';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const colorStyles = {
    primary: {
      filled: 'bg-primary-500 hover:bg-primary-700 text-white',
      outlined: 'bg-transparent border-2 border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white'
    },
    red: {
      filled: 'bg-red-500 hover:bg-red-700 text-white',
      outlined: 'bg-transparent border-2 border-red-500 hover:bg-red-500 text-red-500 hover:text-white'
    }
  };

  const variantStyle = colorStyles[color][variant];

  return (
    <button
      onClick={onPress}
      className={`${baseStyle} ${variantStyle} ${fullWidthStyle} ${disabledStyle}`}
      disabled={disabled || loading}
    >
      {loading ? <LoadingSpin /> : Icon && <Icon />}
      <span className="ml-2">{title}</span>
    </button>
  );
}
