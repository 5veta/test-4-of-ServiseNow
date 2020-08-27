import {createCustomElement, actionTypes} from '@servicenow/ui-core';
const {COMPONENT_BOOTSTRAPPED}=actionTypes;
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import '../../node_modules/@servicenow/now-template-card';
import '../../node_modules/@servicenow/now-loader';
import styles from './styles.scss';
import {fetchUserEffect, fetchIncidentsSuccess, fetchIncidentsError} from './actions-shandlers';
import view from './view';

createCustomElement('x-526323-incident-list', {
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: (coeffects) => {
		  const {dispatch} = coeffects;
		  dispatch('FETCH_INCIDENTS');
		},
		'FETCH_INCIDENTS':fetchUserEffect,
		'INCIDENTS_FETCH_SUCCESS':fetchIncidentsSuccess,
		'INCIDENTS_FETCH_ERROR':fetchIncidentsError,
	},
	renderer: {type: snabbdom},
	view,
	styles
});
