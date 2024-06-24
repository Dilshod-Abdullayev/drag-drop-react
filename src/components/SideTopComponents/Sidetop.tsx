import BtnsModal from "./BtnsModal";
import Logo from "./Logo";
import ThemeBtn from "./ThemeBtn";

export default function Sidetop() {
  return (
    <div className="flex dark:text-white dark:border-white dark:shadow-white dark:shadow-md justify-between items-center p-4 shadow-2xl">
      <Logo />
      <div className="flex gap-4">
        <BtnsModal />
        <ThemeBtn />
      </div>
    </div>
  )
}