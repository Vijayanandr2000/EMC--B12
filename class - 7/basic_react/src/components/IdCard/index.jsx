import CustomHeader from "../Customheader"
import "./style.css"

const IdCard = ({ image, name, age }) => {


    return (
        <div className="idcard">
            <section className="idcard-header">
                <CustomHeader title={"EMC"} />
            </section>
            <section className="idcard-body">
                <img src={image} alt="User Profile Image" />
                <h2>{name}</h2>
                <h4>Age: {age}</h4>
            </section>
        </div>

    )

}

export default IdCard