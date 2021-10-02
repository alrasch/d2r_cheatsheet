import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default function BasicComponent({message}) {
	const classes = useStyles();

	return (
		<Grid container item className={classes.root}>
			{message}
		</Grid>
	);
};
