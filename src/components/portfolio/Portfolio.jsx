import { useState, useEffect } from "react";
import { otherPortfolio, mernPortfolio, allPortfolio, purePortfolio, reactjsPortfolio } from "../../dataPortfolio";
import "./portfolio.scss";
import { HighlightOff } from "@material-ui/icons"

export default function Portfolio() {
    const [selected, setSelected] = useState("allPortfolio");
    const [data, setData] = useState(allPortfolio);
    const [modalMode, setModalMode] = useState(false);
    const [modal, setModal] = useState([]);
    const [countSlide, setCountSlide] = useState(0)

    const list = [
        {
            id: "allPortfolio",
            title: "All",
        },
        {
            id: "reactjsPortfolio",
            title: "Reactjs",
        },
        {
            id: "purePortfolio",
            title: "HTML JS",
        },
        {
            id: "mernPortfolio",
            title: "MERN stack",
        },
        {
            id: "otherPortfolio",
            title: "Other",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "allPortfolio": {
                setData(allPortfolio);
                break;
            }
            case "reactjsPortfolio": {
                setData(reactjsPortfolio);
                break;
            }
            case "purePortfolio": {
                setData(purePortfolio);
                break;
            }
            case "mernPortfolio": {
                setData(mernPortfolio)
                break;
            }
            case "otherPortfolio": {
                setData(otherPortfolio);
                break;
            }
            default: {
                setData(allPortfolio);
            }
        }
        const listTitle = document.getElementsByClassName("titleItems");

        [].forEach.call(listTitle, function (title) {
            title.classList.remove("active");
        });
        document.getElementById(selected).classList.add("active");
    }, [selected]);

    console.log(modal);

    const handleClick = (way) => {
        (way === "left") ?
            setCountSlide(countSlide > 0 ? countSlide - 1 : modal.length - 1)
            : setCountSlide(countSlide < modal.length - 1 ? countSlide + 1 : 0);
    }

    return (
        <div className="portfolio" id="portfolio">
            {
                modalMode &&
                <div className="portfolioModal">
                    <h3 className="productTitle">Demo</h3>
                    <HighlightOff onClick={() => setModalMode(false)} className="closeItem" style={{ fontSize: 40, color: "white" }} />
                    <div className="productSlide" style={{ transform: `translateX(-${countSlide * 100}vw)` }} >
                        {
                            modal.map((singleSlide) => (
                                <div className="container">
                                    <div className="slideItem">
                                        <div className="rightItem">
                                            <img src={singleSlide.img} alt="" />
                                        </div>
                                        <div className="leftItem">
                                            <h3 className="itemSum">{singleSlide.sum}</h3>
                                            <p className="itemDesc">{singleSlide.des}</p>
                                            <label className="labelItem">Source Code: </label>
                                            <a href={singleSlide.link} className="itemLink">{singleSlide.link}</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")} />
                    <img src="assets/arrow.png" alt="" className="arrow right" onClick={() => handleClick("right")} />
                </div>
            }
            <div className="portfolioWrapper">
                <h1>Portfolio</h1>
                <ul>
                    {list.map((item) => (
                        <li id={item.id} className="titleItems" onClick={() => setSelected(item.id)} > {item.title} </li>
                    ))}
                </ul>

                <div className="container">
                    {
                        data.map((dataItem) => (
                            <div className="item" onClick={() => {
                                setModalMode(true);
                                setModal(dataItem.demo)
                            }}>
                                <img src={dataItem.img} alt="" />
                                <h3>{dataItem.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}
