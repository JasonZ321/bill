import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import TemplateIndexCell from './template_index_cell';
import {GridList} from 'material-ui/GridList';
import { browserHistory } from 'react-router';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  }
};

class TemplateIndex extends Component {
	navigateToAddPage() {
		const url = `/company/${this.props.companyId}/newtemplate`;
		browserHistory.push(url);
	}
	renderAddButton() {
		return <div style={{'text-align': 'right', 'marginBottom': 20, 'marginRight': 20}}>
			<FloatingActionButton onClick={this.navigateToAddPage.bind(this)} ><ContentAdd /></FloatingActionButton>
		</div>
	}
	renderTemplates() {
		const {templates, companyId} = this.props;
    if(templates && templates.length >0) {
      return (
        <div style={styles.root}>
          <GridList style={styles.gridList} cols={2.2}>
            {
              templates.map((template) => {
                  return <TemplateIndexCell key={template._id} template={template} />
                }
              )
            }
          </GridList>
        </div>
      )
    } else {
      return <div>你还没有添加任何模板</div>
    }
	}
	render() {
		return (
			<div>
				{this.renderAddButton()}
				{this.renderTemplates()}
			</div>
		)
	}
}

export default TemplateIndex;
