
/**
@file React container
@author Amit Thakur <thakuramit3@hotmail.com>
@description list of actions for fetching places from openapi
**/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlacesOfHelsinki } from '../actions/city-actions';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../helsinki.jpg';
import flag from '../fi_flag.svg';

class Places extends Component {
	constructor(props) {
		super(props)
		this.getAddress = this.getAddress.bind(this);
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(getPlacesOfHelsinki())
	}

  /** 
   * @description Concatenate the strings for the address
   */
	getAddress(item) {
		if(item) {
			return `${item.location.address.street_address}, ${item.location.address.postal_code}, ${item.location.address.locality}`
		}
	}

	render() {
		const { places } = this.props;

		// let the service wait for the response from the API call
		if (!places || !Object.keys(places).length) {
			return <p> There are no places at the moment ! </p>
		}

		return (
			<div className="App">
				<header align="center">
          <img src={logo} alt="logo" />
        </header>
				<h2 align="center" color="primary"> 
					Places to visit in Helsinki 
	        <img className ="finnish_flag" src={flag} height="20" width="40" alt="logo" />
				</h2>
				<Grid container spacing={2}>
	        {places.map((item) => (
	        	<Grid key={item.id}item xs={3}>
	        		<Grid key={item.id}>
			          <Card key={item.id}>
						      <CardHeader
						        avatar={
						          <Avatar aria-label="recipe">
						            {item.name.en && item.name.en.charAt(0)}
						          </Avatar>
						        }
						        title={item.name.en}
						        subheader={this.getAddress(item)}
						      />
						      <CardContent>
						        <Typography variant="body2" color="primary" component="p">
						        </Typography>
						      </CardContent>
			    			</Card>
		    			</Grid>
	    			</Grid>
	        ))}
	       </Grid>
    </div>
   );
	}
}

const mapStateToProps = (state) => ({
  places: state.places.cityReducer.places
});

export default connect(mapStateToProps, null)(Places)
