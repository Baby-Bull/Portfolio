import { useState, useEffect } from "react";
import { contentPortfolio, designPortfolio, featuredPortfolio, mobilePortfolio, webPortfolio } from "../../dataPortfolio";
import "./portfolio.scss";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState(featuredPortfolio);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured": {
                setData(featuredPortfolio);
                break;
            }
            case "web": {
                setData(webPortfolio);
                break;
            }
            case "mobile": {
                setData(mobilePortfolio);
                break;
            }
            case "design": {
                setData(designPortfolio)
                break;
            }
            case "content": {
                setData(contentPortfolio);
                break;
            }
            default: {
                setData(featuredPortfolio);
            }
        }
        const listTitle = document.getElementsByClassName("titleItems");
        [].forEach.call(listTitle, function (title) {
            title.classList.remove("active");
        });
        document.getElementById(selected).classList.add("active");
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <li id={item.id} className="titleItems" onClick={() => setSelected(item.id)} > {item.title} </li>
                ))}
            </ul>

            <div className="container">
                {
                    data.map((dataItem) => (
                        <div className="item">
                            <img src={dataItem.img} alt="" />
                            <h3>{dataItem.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}
