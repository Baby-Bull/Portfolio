import { Person, MailOutline, ReorderOutlined, Close } from "@material-ui/icons"
import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">.Something</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+444 555 666</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon" />
                        <span>abc@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <ReorderOutlined className="rightIcon rightReorderIcon" />
                        <Close className="rightIcon rightCloseIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
