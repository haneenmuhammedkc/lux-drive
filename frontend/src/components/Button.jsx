import React from 'react'

const Button = ({ children, onClick, type = "button", variant = "primary", className = "" }) => {

  const baseStyle = "px-5 py-2 rounded-lg font-medium transition duration-400 cursor-pointer"

  const variants = {
    primary: "bg-sky-950 text-white hover:bg-sky-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-sky-950 bg-zinc-50 text-sky-950 hover:bg-sky-950 hover:text-white",
    cancel: "border border-sky-950 text-sky-950 hover:font-semibold hover:bg-zinc-100"
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}

export default Button