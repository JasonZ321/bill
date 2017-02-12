import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
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
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
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
  navigateToTemplatePage() {
    //TODO
  }
	renderTemplates() {
		const {templates} = this.props;
		debugger;
		return (
			<div style={styles.root}>
		    <GridList style={styles.gridList} cols={2.2}>
		      {
						templates.map((template) => {
				        return <GridTile
							          key={template._id}
							          title={template.name}
							          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
							          titleStyle={styles.titleStyle}
							          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
							        >
												<img onClick={this.navigateToTemplatePage} src='http://placehold.it/350x150' />
				        			</GridTile>
							}
			      )
					}
		    </GridList>
	  	</div>
		)
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
