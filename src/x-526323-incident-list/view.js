export default (state) => {
	
	const {incidents}=state;
	
	return (
		<div id='incident-list'>
			{
				incidents?incidents.map(incident=>
					<now-template-card-assist 
							tagline={{"icon":"tree-view-long-outline","label":"Incidents"}} 
							actions={[{"id":"add","label":"Open Record"},{"id":"delete","label":"Delete"}]} 
							heading={{"label": incident.short_description}} 
							content={[{"label":"Number","value":{"type":"string","value":incident.number}},{"label":"State","value":{"type":"string","value":incident.state}},{"label":"Assignment Group","value":{"type":"string","value":incident.assignment_group.display_value}},{"label":"Assigned To","value":{"type":"string","value":incident.assigned_to.display_value}}]} 
							footerContent={{"label":"Updated","value":incident.sys_updated_on}} 
							configAria={{}} 
							contentItemMinWidth="200"
					></now-template-card-assist>
				):<div className="item1"><now-loader label="Loading..."  size="lg"></now-loader></div>
			}
		</div>
	);
};