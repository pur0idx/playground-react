interface SocialButtonProps {
  href: string;
  icon: string;
  label: string;
}

const SocialButton = ({ href, icon, label }: SocialButtonProps) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2.5 px-5 py-2.5 bg-[#FFFFFF] text-dark border border-[#d0d7de] rounded-md text-[17px] font-bold no-underline transition-all duration-200 hover:bg-[#f3f4f6] hover:border-[#c0c0c0]"
    >
      <img src={icon} className="w-6 h-6" />
      <span>{label}</span>
    </a>
  );
};

const SocialButtons = () => {
  const socialLinks = [
    {
      href: "https://github.com/pur0idx",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      label: "GitHub"
    },
    {
      href: "https://linkedin.com/in/chayutphong-s-21213a212/",
      icon: "https://cdn-icons-png.flaticon.com/512/61/61109.png",
      label: "LinkedIn"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5 sm:gap-6 sm:mt-7">
      {socialLinks.map((link) => (
        <SocialButton
          key={link.label}
          href={link.href}
          icon={link.icon}
          label={link.label}
        />
      ))}
    </div>
  );
};

export default SocialButtons;