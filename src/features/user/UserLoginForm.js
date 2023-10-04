import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, selectCurrentUser } from './userSlice';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from 'reactstrap';
import { Formik, Field, Form } from 'formik';
import defaultAvatar from '../../app/assets/img/unicorn.png';

const UserLoginForm = () => {   //comment form uses ({campsiteId})
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const currentUser = useSelector(selectCurrentUser);

    const dispatch = useDispatch();

    const handleLogin = (values) => {
        const currentUser = {
            id: Date.now(),
            avatar: defaultAvatar,
            username: values.username,
            password: values.password
        };
        dispatch(setCurrentUser(currentUser));
        setLoginModalOpen(false);
    };

    return (
        <>
           <span className = 'navbar-text ml-auto'>
            {currentUser ? (
                <div style={{ width: '4rem', height: '4rem' }}>
                    <img
                        src={currentUser.avatar}
                        alt={'user'}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            ) : (
                <Button
                    outline
                    onClick={() => setLoginModalOpen(true)}
                    style={{ color: 'white', border: '1px solid white' }}
                >
                    <i className='fa fa-sign-in fa-lg' /> Login
                </Button>
            )}
           </span>
           <Modal isOpen = {loginModalOpen}>
                <ModalHeader toggle = {() => setLoginModalOpen(false)}>
                    Login
                </ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues={{
                            userName : '',
                            password :''
                        }} 
                        onSubmit={handleLogin}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor='username'>
                                    Username
                                </Label>
                                <Field 
                                    id='username'
                                    name='username'
                                    placeholder='Username'
                                    className='form-control'
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label html='password'>
                                    Password
                                </Label>
                                <Field 
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Login
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
           </Modal>
        </>
    )
};

export default UserLoginForm;


/*const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText,
            date: new Date(Date.now()).toISOString()
        };
        console.log(comment);
        dispatch(addComment(comment));
        setModalOpen(false);
    };

    return (
        <>
            <Button outline onClick = {() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
                <ModalHeader toggle = {() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    <Formik 
                        initialValues = {{
                            rating: undefined, 
                            author: '',
                            commentText: ''
                    }}           
                        onSubmit = {handleSubmit}
                        validate ={validateCommentForm}
                    >
                        <Form>
                            <FormGroup>
                                <Label htmlFor = 'rating'>
                                    Rating
                                </Label>
                                <Field
                                    name='rating'
                                    as='select'
                                    className='form-control'
                                >
                                    <option>Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Field>
                                <ErrorMessage name= 'rating'>
                                    {(msg) => <p className = 'text-danger'>{msg}</p>}   
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor = 'author'>Your Name</Label>
                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                                <ErrorMessage name='author'>
                                    {(msg) => <p className = 'text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor = 'commentText'>Comment</Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>

                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )
};


export default CommentForm;*/