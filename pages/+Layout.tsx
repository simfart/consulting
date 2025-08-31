import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
