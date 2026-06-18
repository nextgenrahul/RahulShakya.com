import Navbar from "@/app/(site)/components/layout/Navbar";
import Footer from "@/app/(site)/components/layout/Footer";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />

            <main>{children}</main>

            <Footer />
        </>
    );
}
