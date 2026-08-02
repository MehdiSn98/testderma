export default function NavLink({ href, active, children, onClick, isMobile = false }) {
  if (isMobile) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`block py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 text-center mx-auto ${
          active
            ? 'text-[#3b271a] font-bold bg-[#ebdcc9] scale-[1.02]'
            : 'text-[#5c4636] hover:text-[#2d1f15] hover:bg-[#f3ebe1] hover:scale-[1.01]'
        }`}
      >
        {children}
      </a>
    )
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative px-3 py-2 rounded-xl transition-all duration-300 group overflow-hidden ${
        active
          ? 'text-[#3b271a] font-bold bg-[#ebdcc9]/60 shadow-sm'
          : 'text-[#5c4636] hover:text-[#2d1f15] hover:bg-[#f3ebe1]/70'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute bottom-0 right-0 h-0.5 bg-[#3b271a] transition-all duration-300 ${
          active ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </a>
  )
}
