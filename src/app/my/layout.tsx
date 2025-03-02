import LoadPages from "@/components/load-pages";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export default function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <div className="pages">
        <LoadPages>{children}</LoadPages>
      </div>
    </ThemeProvider>
  );
}
