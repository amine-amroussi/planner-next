import Breadcumbs from "@/components/Breadcumbs";

export default function RootLayout({ children }) {
    return <div className="py-6" >
        <Breadcumbs />
        {children}
    </div>
}