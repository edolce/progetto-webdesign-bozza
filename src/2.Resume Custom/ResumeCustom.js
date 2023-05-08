import {Component} from "react";
import BlockAddingPopUp from "./BlockAddingPopUp"; // This is the css file
import "./ResumeCustom.css" // This is the css file

class ResumeCustom extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        return (
            <>
                <div className="custom-resume-container">
                    <div className="dropdown-skills">
                        <div className="dropdown-skills-button">
                            <span>+</span>
                        </div>
                        <div className="dropdown-skills-content">
                            <div className="dropdown-skills-content-item">
                            </div>
                        </div>
                    </div>
                    <div className="resume-container">
                        {this.props.resumeHTML}
                    </div>
                </div>
                <BlockAddingPopUp
                    skills={this.props.skillList}
                    skillTypeFilter={this.props.skillTypeFilter}
                    visibility={this.props.popupVisibility}
                    popupVisibilityHook={this.props.popupVisibilityHook}
                    insertBlockHook={this.props.insertBlockHook}
                    removeBlockHook={this.props.removeBlockHook}
                />
            </>
        )
    }
}

export default ResumeCustom