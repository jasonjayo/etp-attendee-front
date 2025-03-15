// These styles apply to every route in the application
import "./globals.css";
import Header from "./components/Header";
import FooterComponent from "./components/Footer";
import ReduxProvider from "./providers/ReduxProvider";
// import Head from 'next/head';

export const metadata = {
  title: "Event Ticketing Platform",
  description: "An event ticketing platform using Next.js and TailwindCSS.",
  icons: {
    icon: "/tickets_white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-white flex flex-col min-h-screen w-full overflow-x-hidden">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <ReduxProvider>{children}</ReduxProvider>
        </main>
        <FooterComponent />
      </body>
    </html>
  );
}
