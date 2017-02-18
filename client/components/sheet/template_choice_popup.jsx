import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
const styles = {
  overlay : {
    position          : 'fixed',
    top               : 100,
    left              : 100,
    right             : 100,
    bottom            : 100,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '120px',
    left                       : '120px',
    right                      : '120px',
    bottom                     : '120px',
    border                     : '2px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '20px',
    outline                    : 'none',
    padding                    : '20px'

  }
}
export default class TemplateChoicePopup extends Component {
	constructor(props) {
		super(props);
    const { templates } = this.props;
    if(templates && templates.length > 0) {
      this.state = {
        selectedTemplate: templates[0]._id
      }
    } else {
      this.state = {
  			selectedTemplate: null
  		}
    }
	}
	confirm() {
		this.props.onConfirm(this.state.selectedTemplate);
	}
	renderFooterButton() {
		return <div>
				<RaisedButton onClick={this.confirm.bind(this)} label="确认" primary={true} />
				<RaisedButton onClick={this.props.onCancel} label="取消" secondary={true} />
		</div>
	}
  handleChange(event, index, selectedTemplate){
		this.setState({selectedTemplate});
	}
	renderSelections() {
		return <div>
  			<SelectField
            floatingLabelText="选择模板"
            value={this.state.selectedTemplate}
            onChange={this.handleChange.bind(this)}
          >
          {this.props.templates.map( template => {
            return <MenuItem value={template._id} primaryText={template.name} />
          })}
        </SelectField>
				<br />
		</div>
	}
	render() {
		return <div>
			<Modal isOpen={this.props.isOpen} contentLabel="选择模板" style={styles}>
				{this.renderSelections()}
				{this.renderFooterButton()}
			</Modal>
		</div>
	}
}
