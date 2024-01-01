const Feature = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 xl:gap-y-2.5">
      <img src={icon} alt="Feature Icon" className="w-[60px] h-[60px]" />
      <h3 className="text-xl font-semibold font-poppins lg:text-[22px]">{title}</h3>
      <p className="text-gray-500 font-poppins max-w-[300px]">{content}</p>
    </div>
  )
}

export default Feature