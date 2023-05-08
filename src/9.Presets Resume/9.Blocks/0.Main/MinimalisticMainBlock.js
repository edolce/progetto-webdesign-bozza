import {Component} from "react";

import "./MinimalisticMainBlock.css" // This is the css file

/*
** In the mains blocks, we have 2 types of blocks:
*  - topDown
*  - leftRight
*
*  Each of these blocks have a size, which is a number between 0 and 1.
*  The sum of the sizes of the blocks in a row must be 1.
*
*  The topDown block is a block that follows the top-down logic.
*  The leftRight block is a block that follows the left-right logic.
*
*  The infos displayed in main blocks are:
*  - personal infos
*  - portfolio item
*  - work experience
*
*  So variables to store are:
*  - 1 image
*  - 1 title
*  - 1 description (text)
*  - 1 link *optional*
*
 */

class MinimalisticMainBlock extends Component {

    availableBlocks = ["topDown", "leftRight"]

    compatibleSkills = ["Personal Info", "portfolioItem", "workExperience"]

    blockSizes = {
        "topDown": 0.5,
        "leftRight": 0.5
    }

    topDownHtml = (
        <div className="main-block-container block-container" onClick={this.props.removeBlockHook}>

            <div className="remove-overlay">
                REMOVE ITEM
            </div>
            <div className="main-block">
                <div className="left-side">
                    <div className="image-container">
                        <img src={this.props.skill.link} alt=""/>
                    </div>
                </div>
                <div className="right-side">
                    <div className="title-container">
                    <span className="title">
                        {this.props.skill.name}
                    </span>
                    </div>
                    <div className="text-space-container">
                    <span className="text">
                        {this.props.skill.description}
                    </span>

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

export default MinimalisticMainBlock