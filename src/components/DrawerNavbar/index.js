import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { useListMenu } from '@bb-backend/controller';
import MutiList from './components/MutiList';
import PropTypes from 'prop-types';

export default function DrawerLabel(props) {
    const { open, handleDrawerOpen, handleDrawerClose, children, title } = props;
    const classes = useStyles();
    const theme = useTheme();
    const { list } = useListMenu()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                {list.map((subM, index) => (
                    <MutiList
                        key={index}
                        title={subM.title}
                        path={subM.path}
                        icon={<subM.icon />}
                        submenu={subM.submenu}
                        classes={classes}
                    />
                ))}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    )
}

DrawerLabel.propTypes = {
    handleDrawerClose: PropTypes.func.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
    // children: PropTypes.node,
    open: PropTypes.bool,
    title: PropTypes.string
}