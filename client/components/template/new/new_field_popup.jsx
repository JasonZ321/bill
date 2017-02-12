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
			value: 'text_field',
		};
	}
	handleChange(event, index, value){
		this.setState({value});
	}
	createNewField() {
		const fieldName = this.refs.name.getValue();
		this.props.addNewField(fieldName);
	}
	renderSelections() {
		return <div>
			<SelectField
          floatingLabelText="类型"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={'text_field'} primaryText="单行文本框" />
          <MenuItem value={'text_area'} primaryText="多行文本框" />
        </SelectField>
				<br />
		</div>
	}
	renderFooterButton() {
		return <div>
				<RaisedButton onClick={this.createNewField.bind(this)} label="创建" primary={true} />
				<RaisedButton onClick={this.props.onCancel.bind(this)} label="取消" secondary={true} />
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
