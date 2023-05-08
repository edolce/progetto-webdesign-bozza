import {Component} from "react";

import "./MinimalisticSkillBlock.css" // This is the css file


class MinimalisticSkillBlock extends Component {

    availableBlocks = ["topDown", "leftRight"]

    compatibleSkills = ["Portfolio Item", "Certificate", "Work", "General", "Degree"]

    topDownHtml = (
        <div className="skill-block-container block-container" style={{height:this.props.height}} onClick={this.props.removeBlockHook}>
            <div className="remove-overlay">
                REMOVE ITEM
            </div>
            <div className="skill-block">
                <div className="left-side">
                    <div className="title-container">
                        <span className="title">
                            {this.props.skill.title}
                        </span>
                    </div>
                    <div className="type-container">
                        <span className="type">
                            {this.props.skill.type}
                        </span>
                    </div>
                </div>
                <div className="right-side">
                    <div className="text-space-container">
                        <span className="text">
                            {this.props.skill.description}
                        </span>
                    </div>
                    <div className="link-container">
                        <a className="link">
                            {this.props.skill.link}
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )

    leftRightHtml = (
        <div>

        </div>
    )


    render() {
        if (!this.compatibleSkills.includes(this.props.skill.type)) return null

        return (this.topDownHtml)
    }
}

export default MinimalisticSkillBlock