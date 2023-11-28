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
      className={`font-poppins font-medium max-w-none md:max-w-fit py-2 px-8 rounded-3xl transition-colors duration-300 
        ${variant === "filled" ? 
          "bg-primary-500 hover:bg-primary-700 text-white " : 
          "bg-transparent border-2 border-primary-500 hover:bg-primary-500 text-primary-500 hover:text-white"
        }`
      }
    >
      {title}
    </button>
  )

}