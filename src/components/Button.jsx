const Button = ({ label, width }) => (
  <button className={`px-6 py-3 btnBgColor text-[17px] text-white ${width} font-medium tracking-wide rounded-lg hover:opacity-90 transition-all`}>{label}</button>
)

export default Button