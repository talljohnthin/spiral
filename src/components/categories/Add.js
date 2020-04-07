import React, { useState } from 'react';
import axios from 'axios'
import useIsMounted from 'ismounted';
import { domain } from '../../helpers/backend.js'
import { useDispatch } from 'react-redux'
import { Container, CircularProgress, Grid, Button, TextField, Typography, CardContent, CardActions, Card } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { getCategories } from './../../redux/actions/category/categoryActions'

const Add = (props) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState('')
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const isMounted = useIsMounted();


    const uploadMultipleFiles = (e) => {
        e.preventDefault()
        setLoading(true)
        const uploaders = Array.from(e.target.files).map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "cloudimages");
            return axios.post("https://api.cloudinary.com/v1_1/forsale/image/upload", formData).then(response => {
                const data = response.data;
                const photoObj = {
                    fileName: data.public_id,
                    url: data.secure_url,
                    signature: data.signature
                }
                if(isMounted.current) setPhotos(prevPhoto => [...prevPhoto, photoObj])
            }).catch(err => {
                console.log(err)
                if(isMounted.current) setLoading(false)
                return
            })
        });

        axios.all(uploaders).then(() => {
            if(isMounted.current) setLoading(false)
        })

    }

    const handleClick = () => {
        document.getElementById("selectImage").click()
    }

    const handleRemoveImage = (index) => {
        const newPhotos = [...photos]
        if (newPhotos.length) {
            newPhotos.splice(index, 1)
            setPhotos(newPhotos)
        }
    }

    const handleAddCategory = async () => {
            setError('')
            const newCategory = {
                category,
                category_image_url: photos[0]?.url
            }
            try {
                await axios.post(`${domain}/categories/add`, newCategory)
                dispatch(getCategories())
                if(isMounted.current) {
                    setSuccess('Category added successfully.')
                    setCategory('')
                    setPhotos([])
                }
                setTimeout(() => { if(isMounted.current) setSuccess('') }, 3000)
            } catch (error) {
                if(isMounted.current) {
                    setError(error.message)
                }
                setTimeout(() => { if(isMounted.current) setError('') }, 3000)
            }
    }

    const renderImages = () => {
        return <div className="category-images">
            {photos.map((photo, index) => (<Card key={index} variant="outlined" className="category-card">
                <CardActions>
                    <Button onClick={() => handleRemoveImage(index)} size="small">Remove</Button>
                </CardActions>
                <CardContent>
                    <img src={photo.url} alt="..." style={{ width: '100%' }} />
                </CardContent>
            </Card>)
            )}
        </div>
    }

    return (
        <React.Fragment>
            <Container maxWidth="sm">
                <Typography variant="h6" gutterBottom>
                    Add Category
                </Typography>
                {success ? <Alert severity="success" style={{ marginBottom: 15 }}>{success}</Alert> : null}
                {error ? <Alert severity="error" style={{ marginBottom: 15 }}>{error}</Alert> : null}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="category"
                            label="Category"
                            variant="outlined"
                            fullWidth
                            autoComplete="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />

                        {photos.length ? renderImages() : null}

                        <input type="file" id="selectImage" style={{ display: 'none' }} className="form-control" onChange={(e) => uploadMultipleFiles(e)} />

                        {!photos.length && <Button className={loading ? 'untouchable' : ''} onClick={() => handleClick()} variant="contained" size="large" color="primary" style={uploadButtonStyle.style1}>
                            {loading ? <CircularProgress color="secondary" style={{ width: 30, height: 30 }} /> : 'Upload Image'}
                        </Button>}
                        <Button className={loading ? 'untouchable' : ''} variant="contained" size="large" color="primary" style={{ width: '100%', marginTop: 10, float: 'right' }} onClick={() => handleAddCategory()}>
                            Add Category
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Add

const uploadButtonStyle = {
    style1: {
        width: '100%',
        marginTop: 10,
        float: 'right'
    },
    style2: {
        pointerEvents: 'none'
    }
}