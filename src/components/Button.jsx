const Button = ({ label, width, bgColor, textColor, fontWeight }) => (
  <button className={`px-6 py-3 ${bgColor} text-[16px] ${textColor} ${width} ${fontWeight} tracking-wide rounded-lg font-poppins hover:opacity-90 transition-all`}>{label}</button>
)

export default Button