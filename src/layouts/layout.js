import Footer from "../components/footer/footer";
import { TopNavigationPanel } from "../components/topNavigationPanel/topNavigationPanel";

export default function CommonLayout({children}){
    return (
        <>
        <TopNavigationPanel></TopNavigationPanel>
        {children}
        <Footer></Footer>
        </>
    )
}