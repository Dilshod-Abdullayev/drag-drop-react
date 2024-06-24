import { useSelector } from "react-redux";
import { RootState } from './context/store';
import Main from "./components/Main";
export default function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  return (
    <div className={`${theme ? 'dark' : ''} container mx-auto`}>
      <Main />
    </div>
  );
}
