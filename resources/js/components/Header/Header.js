import React, { Component } from 'react';


export default class Header extends Component {
    render() {
        return (
            <AppBar 
                position="static"
                style={{ color: "black", backgroundColor: "#F2AA4CFF" }}
            >
                
                <Toolbar
                    style={{ display: " flex", justifyContent: "space-between" }}
                >
                    <Typography variant="h6">
                        Todo List Collegia
                    </Typography>          
                </Toolbar>
            </AppBar>
        );
    }
}
