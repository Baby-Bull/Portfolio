import { Person, MailOutline, ReorderOutlined, Close } from "@material-ui/icons"
import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">NDT</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+84 37 848 2XXX</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon" />
                        <a href='mailto:thangngo24102000tb@gmail.com'>thangngo24102000tb@gmail.com</a>
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
