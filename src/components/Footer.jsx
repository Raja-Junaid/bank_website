import { socialIcons, footerLinks } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="max-container px-8 lg:px-20">
      <div className="py-10 flex flex-col gap-y-12 lg:py-14 xl:py-16 xl:flex-row xl:justify-between xl:items-start">
        <div>
          <h2 className="font-markazi text-5xl font-normal text-white tracking-normal mb-2">Junaid.</h2>
          <p className="text-blue-200 font-poppins text-[18px] max-w-[350px] xl:max-w-[300px] md:leading-[30px]">A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-y-0 xl:gap-x-14">
          {footerLinks.map((footerLink) => (
            <ul key={footerLink.id}>
              <p className="font-poppins text-white font-semibold text-[18px] tracking-wide mb-4">{footerLink.title}</p>
              {footerLink.links.map((link, index) => (
                <li className={`list-none text-gray-300 font-poppins ${index === footerLink.links.length - 1 ? 'mb-0' : 'mb-4'} hover:text-blue-200 transition-all ease-in-out cursor-pointer`}>{link.title}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <hr class="w-full mx-auto border-t border-gray-500 pb-6 md:pb-7" />

      <div className="pb-10 flex flex-col gap-y-5 md:flex-row md:gap-y-0 md:justify-between">
        <p className="text-white font-poppins">Copyright {currentYear} Raja Junaid. All Rights Reserved.</p>
        
        <div className="flex gap-x-6 md:gap-x-8">
          {socialIcons.map((socialIcon) => (
            <div>
              <a key={socialIcon.id} href={`${socialIcon.link}`} target="_blank" className="flex flex-row">
                <img src={socialIcon.icon} alt="Social Link" className="w-[28px] h-[28px] object-contain filter invert" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer