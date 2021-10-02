import React, {useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './css/common.css';
import BasicComponent from "./component/BasicComponent";
import {MainContext} from "./Context";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(0),
		textAlign: 'center',
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.background
	},
}));

function App() {

	const classes = useStyles();

	const { state, dispatch } = React.useContext(MainContext);

	return (
		<div className={classes.root} id={"app-container"} key={"app-container"} >
			<Grid container spacing={0}>
				<BasicComponent message={state.message} />
			</Grid>
		</div>
	);
}

export default App;
