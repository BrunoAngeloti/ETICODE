interface ButtonProps {
  onPress: () => void
  title: string
  variant?: "filled" | "outlined"
}

export function Button({ 
  onPress, 
  title, 
  variant = "filled" 
}: ButtonProps) {
  return (
    <button
      onClick={onPress}
      className={`font-poppins font-medium w-full py-2 px-5 rounded-3xl transition-colors duration-300 
        ${variant === "filled" ? 
          "bg-primary-500 hover:bg-primary-600 text-white " : 
          "bg-transparent border-2 border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white"
        }`
      }
    >
      {title}
    </button>
  )

}