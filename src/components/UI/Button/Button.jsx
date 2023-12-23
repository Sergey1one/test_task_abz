import './Button.scss'

export  const Button = ({text,loadMore=null, submitForm=null}) => {
    const handleClick = (e) => {
        console.log(e.target.textContent);
        const btnVal = e.target.textContent;
        if (btnVal === "Try me") {
            console.log("SHOW MORE")
           return loadMore()
        }
        console.log("FORM ")
        // return submitForm()
    }

    return ( 
        <button className="button " onClick={e => ( loadMore || submitForm ) && handleClick(e)}>{text}</button>
        
    )
}