import {createHttpEffect} from '@servicenow/ui-effect-http';

export const fetchUserEffect = createHttpEffect('api/now/table/incident?sysparm_display_value=true&sysparm_fields=incident_state%2Cshort_description%2Cnumber%2Cstate%2Cassignment_group%2Cassigned_to%2Csys_updated_on', 
{
	method: 'GET',
	headers: {
		'Host': 'https://dev72521.service-now.com/',
		'Accept':'application/json',
		'Content-Type': 'application/json',
	},
	successActionType: 'INCIDENTS_FETCH_SUCCESS',
	errorActionType: 'INCIDENTS_FETCH_ERROR'
});

export const fetchIncidentsSuccess=(coeffects)=>{
	const {action, updateState}=coeffects;
	const {result}=action.payload;
	
	updateState({incidents:result});
};

export const fetchIncidentsError=(coeffects)=>{
	const {error, details}=coeffects.action.payload;
	console.log('Error in event handler: ', {error, details});
};