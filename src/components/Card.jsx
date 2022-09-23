import { Avatar } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";


const Card = ({ img }) => {
    return (
        <div className="div1" style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center"
        }}>
            <Avatar src={img} style={{ width: 150, height: 150, marginBottom: 10 }} />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quam, consequatur at voluptate repellendus suscipit hic incidunt nulla ipsam iusto pariatur maiores molestiae optio! Tenetur vel sequi sapiente fuga assumenda? </p>
            <p> <span style={{ fontWeight: 600, color: "blue" }}>Mark wougher </span> , Lorem ipsum dolor sit amet</p>
        </div>
    )
}

export default Card;