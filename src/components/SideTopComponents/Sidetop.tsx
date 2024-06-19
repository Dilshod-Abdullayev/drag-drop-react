import BtnsModal from "./BtnsModal";
import Logo from "./Logo";
import ThemeBtn from "./ThemeBtn";

export default function Sidetop() {
  return (
    <div className="flex justify-between items-center p-4 shadow-2xl">
      <Logo />
      <div className="flex gap-4">
        <BtnsModal />
        <ThemeBtn />
      </div>
    </div>
  )
}