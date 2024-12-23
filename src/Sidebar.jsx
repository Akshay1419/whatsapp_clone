import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Sidebar = () => {
    return (
        <>

            <div className="sidebar">
                <div className="sidebar_header">
                    <Avatar />

                    <div className="header_right">
                        <IconButton>
                            <DonutLargeIcon />

                        </IconButton>
                        <IconButton>

                            <ChatIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>

                    </div>
                </div>

            </div>

        </>
    )
}

export default Sidebar