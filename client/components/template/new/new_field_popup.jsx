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
export default class NewFieldPopup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'text_field',
		};
	}
	handleChange(event, index, type){
		this.setState({type});
	}
	createNewField() {
		const fieldName = this.refs.name.getValue();
    this.setState({type: 'text_field'});
		this.props.addNewField({name: fieldName, type: this.state.type});
	}
	renderSelections() {
		return <div>
  			<SelectField
            floatingLabelText="类型"
            value={this.state.type}
            onChange={this.handleChange.bind(this)}
          >
          <MenuItem value={'text_field'} primaryText="单行文本框" />
          <MenuItem value={'text_area'} primaryText="多行文本框" />
        </SelectField>
				<br />
		</div>
	}
  cancel() {
    this.setState({type: 'text_field'});
    this.props.onCancel();
  }
	renderFooterButton() {
		return <div>
				<RaisedButton onClick={this.createNewField.bind(this)} label="创建" primary={true} />
				<RaisedButton onClick={this.cancel.bind(this)} label="取消" secondary={true} />
		</div>
	}
	render() {
		return <div>
			<Modal isOpen={this.props.isOpen} contentLabel="添加" style={styles}>
				<TextField hintText="名字" ref="name" /> <br />
				{this.renderSelections()}
				{this.renderFooterButton()}
			</Modal>
		</div>
	}
}
