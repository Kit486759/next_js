import headerStyles from '../styles/Header.module.css'

export default function Header() {


    const blue = true

    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> news
            </h1>
            <p className={headerStyles.description}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>


            {/* ============= conditional styling ================= */}

            {/* <h1 className="title">
                <span>WebDev</span> news
            </h1>
            <style jsx>
                {`.title {color:${blue? "blue" : "red"};}`}
            </style> */}

        </div>
    )
}
