import React, { Component } from 'react';
import Modal from 'react-modal';
import TextField from 'material-ui/TextField';
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
export default class NewSectionPopup extends Component {
	createNewSection() {
		const sectionName = this.refs.name.getValue();
		this.props.addNewSection(sectionName);
	}
	render() {
		return (
			<div>
				<Modal isOpen={this.props.isOpen} contentLabel="添加新区域" style={styles}>
					<TextField hintText="新区域名" ref='name'/><br /><br /><br />
					<RaisedButton onClick={this.createNewSection.bind(this)} label="创建" primary={true} />
					<RaisedButton onClick={this.props.onCancel.bind(this)} label="取消" secondary={true} />
        </Modal>
			</div>
		)
	}
}
