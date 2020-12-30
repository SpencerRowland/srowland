import React, { Component } from 'react';
import { Collapse } from 'reactstrap';


class CollapsiblePanel extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: this.props.collapse };
    }
  
    toggle() {
      this.setState(state => ({ collapse: !state.collapse }));
    }
  
    render() {
      return (
        <div className="panel panel-default">
            <div className="panel-heading" role="tab">
                <h4 className="panel-title faq-title">
                {/* eslint-disable-next-line */}
                <a onClick={this.toggle} href="#">
                    {this.props.header}
                </a>
                </h4>
            </div>
            <Collapse isOpen={this.state.collapse}>
                <div className="panel-body">
                {this.props.bodyText}
                </div>
            </Collapse>
        </div>
      );
    }
  }
  
  export default CollapsiblePanel;