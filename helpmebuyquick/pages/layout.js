import "./globals.css";

export const metadata = {
  title: "HelpMeBuyQuick",
  description: "Buy and sell items quickly and safely",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
