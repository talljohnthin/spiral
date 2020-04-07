import React, { useState } from 'react';
import axios from 'axios'
import useIsMounted from 'ismounted';
import { domain } from '../../helpers/backend.js'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from '@material-ui/lab';
import { getCategories } from './../../redux/actions/category/categoryActions'
import AddIcon from '@material-ui/icons/Add';
import {
    Container,
    CircularProgress,
    Grid,
    Button,
    TextField,
    Typography,
    CardContent,
    CardActions,
    Card,
    FormControl,
    Select,
    MenuItem,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton
} from '@material-ui/core';


const Add = (props) => {

    const [category, setCategory] = useState('')
    const [photos, setPhotos] = useState([])
    const [name, setName] = useState('')
    const [descriptions, setDescriptions] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedSegment, setSelectedSegment] = useState('')
    const [colors, setColors] = useState([])
    const [currentColor, setCurrentColor] = useState([])

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const isMounted = useIsMounted()
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.categories)
    const segments = useSelector(state => state.segment.segments)

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
                if (isMounted.current) setPhotos(prevPhoto => [...prevPhoto, photoObj])
            }).catch(err => {
                console.log(err)
                if (isMounted.current) setLoading(false)
                return
            })
        });

        axios.all(uploaders).then(() => {
            if (isMounted.current) setLoading(false)
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

    const handleRemoveColor = (index) => {
        console.log(index)
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
            if (isMounted.current) {
                setSuccess('Category added successfully.')
                setCategory('')
                setPhotos([])
            }
            setTimeout(() => { if (isMounted.current) setSuccess('') }, 3000)
        } catch (error) {
            if (isMounted.current) {
                setError(error.message)
            }
            setTimeout(() => { if (isMounted.current) setError('') }, 3000)
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
                    Add Product
                </Typography>
                {success ? <Alert severity="success" style={{ marginBottom: 15 }}>{success}</Alert> : null}
                {error ? <Alert severity="error" style={{ marginBottom: 15 }}>{error}</Alert> : null}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {/* name */}
                        <TextField
                            id="name"
                            label="name"
                            variant="outlined"
                            fullWidth
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="add-form-input"
                        />
                        {/* discriptions */}
                        <TextField
                            id="descriptions"
                            label="Descriptions"
                            multiline
                            rows="4"
                            variant="outlined"
                            fullWidth
                            className="add-form-input"
                            value={descriptions}
                            onChange={(e) => setDescriptions(e.target.value)}
                        />
                        {/* Category */}
                        <FormControl variant="outlined" fullWidth className="add-form-input">
                            <InputLabel htmlFor="outlined-category-native-simple">Category</InputLabel>
                            <Select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                label="Category"
                            >
                                {!categories.length ? null : categories.map(item => {
                                    return <MenuItem key={item._id} value={item.category}> {item.category}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        {/* Segment */}
                        <FormControl variant="outlined" fullWidth className="add-form-input">
                            <InputLabel htmlFor="outlined-segment-native-simple">Segment</InputLabel>
                            <Select
                                value={selectedSegment}
                                onChange={(e) => setSelectedSegment(e.target.value)}
                                label="Segment"
                            >
                                {!segments.length ? null : segments.map(item => {
                                    return <MenuItem key={item._id} value={item.segment}> {item.segment}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        {/* colors */}
                        <Card className="add-form-input">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Add Colors
                                </Typography>
                                <FormControl variant="outlined" fullWidth className="add-form-input">
                                    <InputLabel htmlFor="filled-adornment-colors">Colors</InputLabel>
                                    <OutlinedInput
                                        id="filled-adornment-colors"
                                        value={currentColor}
                                        onChange={(e) => setCurrentColor(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={()=> {
                                                        setColors([...colors, currentColor])
                                                        setCurrentColor('')
                                                    }}
                                                    edge="end"
                                                >
                                                    <AddIcon/>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <Typography variant="body2" color="textSecondary" component="ul">
                                    {
                                        !colors.length ? null : colors.map((color,index) => <li key={index}> {color} <span onClick={ ()=> handleRemoveColor(index)}>X</span></li>)
                                    }
                                </Typography>
                            </CardContent>
                        </Card>
                        
                        

                        {/* sizes */}
                        <FormControl variant="outlined" fullWidth className="add-form-input">
                            <InputLabel htmlFor="filled-adornment-sizes">Sizes</InputLabel>
                            <OutlinedInput
                                id="filled-adornment-sizes"
                                // value={values.password}
                                //onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            //onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            <AddIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        {/* stocks */}
                        <TextField
                            id="stocks"
                            label="stocks"
                            type="number"
                            variant="outlined"
                            fullWidth
                            autoComplete="stocks"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="add-form-input"
                        />
                        {/* price */}
                        <TextField
                            id="price"
                            label="price"
                            type="number"
                            variant="outlined"
                            fullWidth
                            autoComplete="price"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="add-form-input"
                        />
                        {/* status */}
                        <FormControl variant="outlined" fullWidth className="add-form-input">
                            <InputLabel htmlFor="outlined-segment-native-simple">Status</InputLabel>
                            <Select
                                //value={state.age}
                                //onChange={handleChange}
                                label="Status"
                                inputProps={{
                                    name: 'Status',
                                    id: 'outlined-status-native-simple',
                                }}
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </Select>
                        </FormControl>
                        {/* sale */}
                        <FormControl variant="outlined" fullWidth className="add-form-input">
                            <InputLabel htmlFor="outlined-segment-native-simple">Sale</InputLabel>
                            <Select
                                //value={state.age}
                                //onChange={handleChange}
                                label="Sale"
                                inputProps={{
                                    name: 'Sale',
                                    id: 'outlined-sale-native-simple',
                                }}
                            >
                                <MenuItem value={true}>True</MenuItem>
                                <MenuItem value={false}>False</MenuItem>
                            </Select>
                        </FormControl>

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