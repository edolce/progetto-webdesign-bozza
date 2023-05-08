import "./BlockAddingPopUp.css"
import {Component} from "react";
import MinimalisticMainBlock from "../9.Presets Resume/9.Blocks/0.Main/MinimalisticMainBlock";
import MinimalisticSkillBlock from "../9.Presets Resume/9.Blocks/0.Main/MinimalisticSkillBlock";

function skillToInsert(props) {
    let newBlock;

    if(props.skill.type === "main"){
            newBlock ={HtmlBlock:<MinimalisticMainBlock
            skill={props.skill}
            removeBlockHook={() =>props.removeBlockHook(newBlock)}
        />, height:0.5}
    } else {
        newBlock = {HtmlBlock:<MinimalisticSkillBlock
            skill={props.skill}
            removeBlockHook={() =>props.removeBlockHook(newBlock)}
            height={"125%"}
        />, height:0.125}
    }

    return (
        <div className="skill-to-insert" onClick={() => props.insertBlockHook(newBlock)}>
            <div className="left">

                <div className="skill-to-insert-name">
                    {props.skill.name}
                </div>
                <div className="skill-to-insert-type">
                    {props.skill.type}
                </div>

            </div>
            <div className="right">
                <div className="skill-to-insert-description">
                    {props.skill.description}
                </div>
                <div className="skill-to-insert-link">
                    {props.skill.link}
                </div>
            </div>
        </div>
    )
}

class BlockAddingPopUp extends Component {

    //calculate content
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
        console.log(this.props)
    }


    render() {
        return (
            <div className="block-adding-popup" style={{visibility: this.props.visibility}}>
                <div className="close-button" onClick={this.props.popupVisibilityHook}>
                    <span>x</span>
                </div>
                <div className="block-adding-popup-content">
                {
                    //check if the skill type is in the filter types array
                    this.props.skills.filter(skill =>
                        this.props.skillTypeFilter.includes(skill.type)
                    ).map(
                    skill => skillToInsert({skill: skill,insertBlockHook: this.props.insertBlockHook,removeBlockHook: this.props.removeBlockHook})
                )
                }
                </div>
            </div>
        )
    }
}

export default BlockAddingPopUp