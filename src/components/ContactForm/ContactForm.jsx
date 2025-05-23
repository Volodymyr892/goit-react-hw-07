import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import css from './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";


const UserSchema = Yup.object().shape(
    {
        name: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      number: Yup.string()
        .min(3, "Too Short!")
        .max(13, "Too Long!")
        .required("Required")
    }
)

export default function ContactForm(){
    const dispatch = useDispatch();

    const handleSubmit =(values, actions)=> {
    dispatch(addContact(values));
    actions.resetForm()
    };
    
    return(
        <Formik initialValues={{
            id: "",
            name: "",
            number: ""
        }}
        validationSchema={UserSchema}
        onSubmit ={handleSubmit}
        
        >
            <Form className={css.formContainer}>
                <div className={css.formField}>
                    <p className={css.fielP}>Name</p>
                    <Field className={css.inputField} type="text" name="name" />
                    <ErrorMessage className={css.errorMessage} name="name" component="span"/>
                </div>
                <div className={css.formField}>
                    <p className={css.fielP}>Number</p>
                    <Field className={css.inputField} type="text" name="number"/>
                    <ErrorMessage className={css.errorMessage} name="number" component="span"/>
                </div>
                <button type="submit" className={css.submitButton}>Add contact</button>
            </Form>
        </Formik>
    )
}