
export const UserCard = ({ data }) => {
    
console.log(data)
    return (
        <div>
            <img src={data.img} alt="contact photo" />
            <p>Name</p>
            <div>
                <p>Scecial</p>
                <p>Mail</p>
                <p>Phone</p>
            </div>
        </div>
    )
}