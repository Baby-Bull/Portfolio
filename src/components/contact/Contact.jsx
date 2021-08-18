import "./contact.scss";
import { Room, Send, Phone, Email, Public, Facebook, Instagram, LinkedIn, GitHub } from "@material-ui/icons";

export default function Contact() {
    return (
        <div className="contact" id="contact" >
            <h2 className="title">Contact</h2>
            <div className="contactWrapper">
                <div className="contactLeft">
                    <img className="contactLeftImg" src="assets/contact.webp" alt="" ></img>
                </div>
                <div className="contactRight">
                    <form action="" className="formContact">
                        <div className="contactInput">
                            <input placeholder="Name" type="text" className="input name" />
                            <input placeholder="Email" type="text" className="input email" />
                            <input placeholder="Title" type="text" className="input title" />
                            <textarea placeholder="Content" type="text" className="input message" />
                        </div>
                        <button className="buttonSend"><Send />Send</button>
                    </form>
                    <div className="socialContact">
                        <div className="firstItemsContact">
                            <div className="firstItem">
                                <Room />
                                <p>số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
                            </div>
                            <div className="firstItem">
                                <Phone />
                                <p>037.848.XXXX</p>
                            </div>
                            <div className="firstItem">
                                <Email />
                                <p>thangngo24102000tb@
                                    gmail.com</p>
                            </div>
                            <div className="firstItem">
                                <Public />
                                <p>baby-bull.example.com</p> 
                            </div>
                        </div>
                        <div className="secondItemsContact">
                            <a href="https://www.facebook.com/ducthangisme"><Facebook style={{fontSize : 35}} /></a>
                            <a href="https://www.instagram.com/thang_ducng/"><Instagram style={{fontSize : 35}} /></a>
                            <a href="https://github.com/Baby-Bull"><GitHub style={{fontSize : 35}} /></a>
                            <a href="https://baby-bull.github.io/Personal-Profile/"><LinkedIn style={{fontSize : 35}} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
