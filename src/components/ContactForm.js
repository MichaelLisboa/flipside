import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "./presentation/Button";
import * as Yup from "yup";

const getSchema = () => Yup.object().shape({
    name: Yup.string()
        .required('Please enter your first name'),
    email: Yup.string()
        .email('Please enter a valid email address')
        .required('Please enter your email address'),
    comment: Yup.string()
        .required('Please enter your message'),
});

class ContactForm extends Component {

    handleSubmit = data => {
        const body = {
                name: data.name,
                email: data.email,
                comment: data.comment
            };
        console.log("FORM SUBMIT", body)
    }

    render() {
        return (
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    comment: ""
                }}
                validationSchema={getSchema}
                onSubmit={this.handleSubmit}
                render={({ handleChange, handleBlur, values, errors, touched, isSubmitting, validateForm }) => (
                    <Form className="uk-width-4-5@m uk-align-center">
                        <fieldset className="uk-fieldset">
                            <div className="uk-grid-small uk-child-width-1-2@m" data-uk-grid>
                                <div>
                                    <label htmlFor="name">Name
                                        <Field
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            name="name"
                                            label={errors.name && touched.name ? errors.name : "First name"}
                                            placeholder={errors.name && touched.name && errors.name}
                                            className={`uk-input uk-form-large uk-border-rounded ${errors.name && touched.name ? "uk-form-danger" : "uk-form"}`}
                                            required
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="email">Email address
                                        <Field
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            name="email"
                                            label="Email address"
                                            placeholder={errors.email && touched.email && errors.email}
                                            className={`uk-input uk-form-large uk-border-rounded ${errors.email && touched.email ? "uk-form-danger" : "uk-form"}`}
                                            required
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="uk-margin-small-top">
                                <label htmlFor="comment">Your message
                                <Field
                                    component="textarea"
                                    name="comment"
                                    label={errors.comment && touched.comment ? errors.comment : "Your message"}
                                    placeholder={errors.comment && touched.comment && errors.comment}
                                    rows="4"
                                    className={`uk-textarea uk-form-large uk-border-rounded ${errors.comment && touched.comment ? "uk-form-danger" : null}`}
                                    required
                                />
                                </label>
                            </div>

                            <div className="uk-margin-medium-top uk-text-center">
                                <Button type="submit" size="large" format="primary" disabled={isSubmitting}>Submit</Button>
                            </div>
                        </fieldset>
                    </Form>
                )}
            />
        )
    }
}

export default ContactForm;
