import PropTypes from "prop-types";

function Profile({data,imgsource}){
    return(
        <div >
            <img className="profileimage" src={imgsource} alt="" />
            <p className="fullName"> {data.fullName}</p>
            <p className="bio">{data.bio}</p>
            <p className="profession">{data.profession}</p>
            <Handlename name = {data.fullName}/>

        </div>
    );
    function Handlename(name){
        alert(name.name)
    }
}
export default Profile
Profile.defaultPr = {
    fullName:'unknown',
    bio:'unknown',
    profession:'unknown'
};



Profile.propTypes = {
    FullName:PropTypes.number,
    bio:PropTypes.string,
    profession:PropTypes.string
}