import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import PropTypes from 'prop-types';

const Contact = ({data}) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(data.id))
    }
    return (
        <div className={css.item}>
            <div className={css.infoSide}>
                <div className={css.infoPart}>
                    <IoPerson />
                    <h3>{data.name}</h3>
                </div>
                <div className={css.infoPart}>
                    <FaPhoneAlt />
                    <p>{data.number}</p>
                </div>
            </div>  
            <button type="button" onClick={handleDelete}>Delete</button>
        </div>
    )
}

Contact.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired, // Якщо id є числом, замініть на PropTypes.number
  }).isRequired,
};

export default Contact;