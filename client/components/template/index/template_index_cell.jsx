import React from 'react';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import { browserHistory } from 'react-router';
import { setDefaultTemplate } from '../../../../imports/api/template_api';
import ToggleStar from 'material-ui/svg-icons/toggle/star';

const styles = {
	titleStyle: {
		color: 'rgb(0, 188, 212)',
	}
}
function navigateToTemplatePage(companyId, templateId) {
	const url = `/company/${companyId}/template/${templateId}`;
	browserHistory.push(url);
}
const TemplateIndexCell = ({template, isDefault}) => {
	const star = isDefault ?
							<IconButton><ToggleStar onClick={() => setDefaultTemplate(template.companyId, template._id)} color="rgb(0, 188, 212)" /></IconButton>
							:
							<IconButton><StarBorder onClick={() => setDefaultTemplate(template.companyId, template._id)} color="rgb(0, 188, 212)" /></IconButton>
	return <GridTile
					key={template._id}
					title={template.name}
					actionIcon={star}
					titleStyle={styles.titleStyle}
					titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
				>
					<img src='http://placehold.it/350x150' onClick={() => {navigateToTemplatePage(template.companyId, template._id)}} />
				</GridTile>
}

export default TemplateIndexCell;
