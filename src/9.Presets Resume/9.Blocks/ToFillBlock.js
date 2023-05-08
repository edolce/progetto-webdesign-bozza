import {Component} from "react";

class ToFillBlock extends Component{

    blockTypeLINK = {
        "MAIN": ["Personal Info","Portfolio"],
        "SKILL": ["Portfolio", "Certificate", "Work", "General", "Degree"],
        "FOOTER": ["Footer"],
        "HEADER": ["Header"],
    }

    clickHandler = () => {
        this.props.visibilityHook()
        if (this.blockTypeLINK[this.props.blockType]!==undefined)
            this.props.skillTypeHook(this.blockTypeLINK[this.props.blockType])
        else
            this.props.skillTypeHook([])
    }

        render() {
            return(
                <div className={"TO-FILL "+this.props.blockType} style={{height:this.props.height}}>
                    <div className="add-button-block" onClick={this.clickHandler}>
                        <span>+</span>
                    </div>
                </div>
            )
        }
}

export default ToFillBlock