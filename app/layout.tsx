import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <FavoritesProvider>
            <Navbar />
            {children}
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
