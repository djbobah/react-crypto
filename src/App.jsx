import { CryptoContextProvider } from "./context/crypto-context";
import AppLayuot from "./components/layout/AppLayout";
// const { Header, Footer, Sider, Content } = Layout;

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayuot />
    </CryptoContextProvider>
  );
}
