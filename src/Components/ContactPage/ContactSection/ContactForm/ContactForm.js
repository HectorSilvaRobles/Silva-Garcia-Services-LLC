import React, { Component } from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import './contactform.css'
import axios from 'axios'

const Formik = withFormik({
    mapPropsToValues(props){
        console.log(props)
        return {
            name: '',
            email: '',
            phone: '',
            zip_code: '',
            budget: '',
            description: ''
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(1, 'Must be real name')
            .max(100, 'Must be shorter than ')
            .required('Must enter a name'),
        phone: Yup.string()
            .min(7, 'Please enter valid phone number')
            .required('Please enter a valid phone number'),
        email: Yup.string()
            .email('Must be a valid Email')
            .max(150, 'Must be shorter than 150 characters')
            .required('Please enter an Email'),
        zip_code: Yup.number()
            .integer('Enter a valid Zip Code')
            .required('Zip Code is Required'),
        budget: Yup.number()
            .required('Must enter a budget'),
        description: Yup.string()
            .min(15, 'Description must be longer than 15 characters')
            .required('Please provide a short description of what you want done.')
    }),

    handleSubmit(values, {resetForm, setSubmitting}){
        setSubmitting(true)
        console.log(values)
        const {name, email, phone, zip_code, budget, description} = values

        axios.post('/api/contact-form', {name, email, phone, zip_code, budget, description})
        .then(res => console.log('we hit the back end'))
        .catch(err => {
            console.log(err, 'this was the error')
        })

        resetForm()
    }
})

function ContactForm(formikProps) {
        const { errors, touched, values, handleBlur, handleChange, handleSubmit, isSubmitting} = formikProps
        return (
            <Form className='form-container' onSubmit={handleSubmit} >
                <div className='cf-section1'>
                    <div className='input-box'>
                        <label htmlFor='name'>Name</label>
                        <Field
                            type='text'
                            name='name'
                            id='name'
                            placeholder='Enter your Name'
                            onChange={handleChange}
                            value={values.name}
                            onBlur={handleBlur}
                            className='cf-s1-name'
                        />
                        {touched.name && errors.name && (
                            <p>{errors.name}</p>
                        )}
                    </div>
                    <div className='input-box'>
                        <label htmlFor='email'>Email</label>
                        <Field
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Enter your Email'
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                        />
                        {touched.email && errors.email && (
                            <p>{errors.email}</p>
                        )}
                    </div>
                </div>
                <div className='cf-section2'>
                    <div className='input-box'>
                        <label htmlFor='phone'>Phone</label>
                        <Field
                            type='text'
                            name='phone'
                            id='phone'
                            placeholder='Phone Number'
                            onChange={handleChange}
                            value={values.phone}
                            onBlur={handleBlur}
                        />
                        {touched.phone && errors.phone && (
                            <p>{errors.phone}</p>
                        )}
                    </div>
                    <div className='input-box'>
                        <label htmlFor='zip_code'>Zip Code</label>
                        <Field
                            type='number'
                            name='zip_code'
                            id='zip_code'
                            placeholder='Zip Code'
                            onChange={handleChange}
                            value={values.zip_code}
                            onBlur={handleBlur}
                            />
                            {touched.zip_code && errors.zip_code && (
                                <p>{errors.zip_code}</p>
                            ) }
                    </div>
                    <div className='input-box'>
                        <label htmlFor='budget'>Budget</label>  
                        <Field
                            type='number'
                            name='budget'
                            id='budget'
                            placeholder='i.e $5000'
                            onChange={handleChange}
                            value={values.budget}
                            onBlur={handleBlur}
                        />
                            {touched.budget && errors.budget && (
                                <p>{errors.budget}</p>
                            )}
                    </div>
                </div>
                <div className='cf-section3'>
                    <div className='input-box'>
                        <label htmlFor='description'>Description</label>
                            <Field 
                            type='text'
                            name='description'
                            id='description'
                            placeholder='Provide a description of what you want.'
                            onChange={handleChange}
                            value={values.description}
                            onBlur={handleBlur}
                            />
                            {touched.description && errors.description && (
                                <p>{errors.description}</p>
                            ) }
                    </div>
                    <button className='send-info' type='submit' disabled={isSubmitting} >Submit</button>
                </div>
            </Form>
        )
    }

export default Formik(ContactForm)
