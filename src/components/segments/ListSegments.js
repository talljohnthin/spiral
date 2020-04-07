import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useIsMounted from 'ismounted';
import { useSelector, useDispatch } from 'react-redux'
import { Container, Dialog,  DialogTitle, DialogContent, DialogContentText, DialogActions, Button,   Avatar, ListItemAvatar, ListItemText, ListItemSecondaryAction, ListItem, List } from '@material-ui/core';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import { Alert } from '@material-ui/lab';
import { getSegments } from '../../redux/actions/segment/segmentActions'
import { domain } from '../../helpers/backend.js'

const ListSegments = () => {
    const segments = useSelector(state => state.segment.segments)
    const [open, setOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const dispatch = useDispatch()
    const isMounted = useIsMounted();

    const handleClickOpen = (id) => {
        setIdToDelete(id)
        setOpen(true);
    };
    const handleClose = () => {
        handleDeleteSegment(idToDelete)
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const handleDeleteSegment = async(id) => {
        try {
            await axios.delete(`${domain}/segments/${id}`)
            setSuccess('Segment added successfully.')
            dispatch(getSegments())
            setTimeout(()=> {  if(isMounted.current) setSuccess('') },3000)
        } catch (error) {
            if(isMounted.current) setError(error.message)
            setTimeout(()=> {  if(isMounted.current) setError('') },3000)
        }
    }
    

    useEffect(() => {
        if(isMounted.current) {
            dispatch(getSegments())
        }
    }, [segments, isMounted, dispatch])

    return (
        <Container maxWidth="sm">
            { success ? <Alert severity="success" style={{marginBottom:15}}>{success}</Alert> : null }
            { error ? <Alert severity="error" style={{marginBottom:15}}>{error}</Alert> : null }
            <List dense >
                {segments.length && segments.map((item, index) => {
                    const labelId = `checkbox-list-secondary-label-${index}`;
                    return (
                        <ListItem key={index} button>
                            <ListItemAvatar>
                                <Avatar
                                    src={item.segment_image_url}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={item.segment} />
                            <ListItemSecondaryAction>
                                <DeleteOutlineRoundedIcon style={{ cursor: 'pointer' }} onClick={() => handleClickOpen(item._id)} />
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Delete Segment:</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this segment?
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Delete
          </Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default ListSegments