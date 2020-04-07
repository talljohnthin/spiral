import React, { useState } from 'react';
import { Container, Paper, Tabs, Tab } from '@material-ui/core';
import { Add, ListSegments} from '../components/segments';

const Segments = () => {
    const [tabActive, setTabActive] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setTabActive(newValue);
    };

    return (
        <React.Fragment>
            <Container maxWidth="sm" style={{marginBottom:40}}>
                <Paper square >
                    <Tabs
                        value={tabActive}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChangeTab}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="List" />
                        <Tab label="Add" />
                    </Tabs>
                </Paper>
            </Container>
            { tabActive === 1 ? <Add /> : <ListSegments />}
        </React.Fragment>
    );
}

export default Segments