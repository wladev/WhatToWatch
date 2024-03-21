import s from "../Logo/Logo.module.css"




export function Logo({image, title, substitle}) {
    return (
    <>
        <div className={s.container}>
            <img src={image} alt="Logo" className={s.img}/>
            <span className={s.title}>{title}</span>
            {/* console.log({image}, {title}, {substitle}); */}
        </div>
            <span className={s.substitle}>{substitle}</span>
    </>
    )
}