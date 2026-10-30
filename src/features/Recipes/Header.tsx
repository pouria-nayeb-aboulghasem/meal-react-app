function Header() {
  return (
    <header className="border-b border-stone-200/80 bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-5 sm:px-8">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-xl"
        >
          🍋
        </span>
        <span className="text-lg font-bold tracking-tight">FoodParty</span>
        <span className="ml-auto hidden text-sm text-stone-500 sm:block">
          A little inspiration for your next meal
        </span>
      </div>
    </header>
  );
}

export default Header;
