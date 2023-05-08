import {Component} from "react";
import "./fastSkills.css" // This is the css file

class FastSkillPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            name: '',
            description: '',
            link: ''
        }
    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.skillList)
    }



    handleOptionChange = e => {
        this.setState({selectedOption: e.target.value});
    }



    submit = () => {
        if (this.state.selectedOption === '') return alert("Please select a skill type")
        alert(this.state.selectedOption + " submitted")
        //TODO PUSH TO BACKEND
        this.props.setSkillList([...this.props.skillList, {
            id: this.props.skillList.length + 1,
            type: this.state.selectedOption,
            name: this.state.name,
            description: this.state.description,
            link: this.state.link
        }])
    }

    addToCv(id) {
    }

    deleteSkill(id){
        this.props.setSkillList(this.props.skillList.filter(skill => skill.id !== id))
    }

    render() {
        return (
            <div className="fast-skill-page">
                <div className="container">
                    <div className="header">
                        <span className="title">
                            FAST SKILL
                        </span>
                    </div>
                    <div className="body">
                        <div className="left">
                            <div className="left-header">
                                <span className="title">
                                    INSERT YOUR FAST SKILL HERE
                                </span>
                            </div>
                            <div className="left-body">
                                <div className="skill-type-selection">
                                    <select name="skill-type" id="skill-type" onChange={this.handleOptionChange}>
                                        <option value="" selected disabled hidden>Select a type</option>
                                        <option value="Portfolio">Portfolio Item</option>
                                        <option value="Certificate">Certificate</option>
                                        <option value="Work">Work Experience</option>
                                        <option value="General">General Skill</option>
                                        <option value="Degree">Degree</option>
                                        <option value="Personal Info">Personal Info</option>
                                    </select>
                                </div>
                                {
                                    this.state.selectedOption === 'Portfolio' && (<div className="portfolio-item">
                                        <div className="portfolio-item-input">
                                            <input type="text" placeholder="Portfolio Item Name" value={this.state.name}
                                                   onChange={
                                                       e => this.setState({name: e.target.value})
                                                   }/>
                                        </div>
                                        <div className="portfolio-item-input">
                                            <input type="text" placeholder="Portfolio Item Description"
                                                   value={this.state.description} onChange={
                                                e => this.setState({description: e.target.value})}
                                            />
                                            }
                                        </div>
                                        <div className="portfolio-item-input">
                                            <input type="text" placeholder="Portfolio Item Link" value={this.state.link}
                                                   onChange={e => this.setState({link: e.target.value})}
                                            />
                                        </div>
                                    </div>)
                                }
                                {
                                    this.state.selectedOption === 'Certificate' && (
                                        <div className="certificate-item">
                                            <div className="certificate-item-input">
                                                <input type="text" placeholder="Certificate Name"
                                                       onChange={e => this.setState({name: e.target.value})}
                                                />
                                            </div>
                                            <div className="certificate-item-input">
                                                <input type="text" placeholder="Certificate Description"
                                                       onChange={e => this.setState({description: e.target.value})}
                                                />
                                            </div>
                                            <div className="certificate-item-input">
                                                <input type="text" placeholder="Certificate Link"
                                                       onChange={e => this.setState({link: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    this.state.selectedOption === 'Work' && (
                                        <div className="work-item">
                                            <div className="work-item-input">
                                                <input type="text" placeholder="Work Name"
                                                       onChange={e => this.setState({name: e.target.value})}

                                                />
                                            </div>
                                            <div className="work-item-input">
                                                <input type="text" placeholder="Work Description"
                                                       onChange={e => this.setState({description: e.target.value})}
                                                />
                                            </div>
                                            <div className="work-item-input">
                                                <input type="text" placeholder="Work Link"
                                                       onChange={e => this.setState({link: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    this.state.selectedOption === 'General' && (
                                        <div className="general-item">
                                            <div className="general-item-input">
                                                <input type="text" placeholder="General Name"
                                                       onChange={e => this.setState({name: e.target.value})}
                                                />
                                            </div>
                                            <div className="general-item-input">
                                                <input type="text" placeholder="General Description"
                                                       onChange={e => this.setState({description: e.target.value})}
                                                />
                                            </div>
                                            <div className="general-item-input">
                                                <input type="text" placeholder="General Link"
                                                       onChange={e => this.setState({link: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                    )

                                }
                                {
                                    this.state.selectedOption === 'Degree' && (
                                        <div className="degree-item">
                                            <div className="degree-item-input">
                                                <input type="text" placeholder="Degree Name"
                                                       onChange={e => this.setState({name: e.target.value})}
                                                />
                                            </div>
                                            <div className="degree-item-input">
                                                <input type="text" placeholder="Degree Description"
                                                       onChange={e => this.setState({description: e.target.value})}
                                                />
                                            </div>
                                            <div className="degree-item-input">
                                                <input type="text" placeholder="Degree Link"
                                                       onChange={e => this.setState({link: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    this.state.selectedOption === 'Personal Info' && (
                                        <div className="personal-info-item">
                                            <div className="personal-info-item-input">
                                                <input type="text" placeholder="Personal Info Name"
                                                       onChange={e => this.setState({name: e.target.value})}
                                                />
                                            </div>
                                            <div className="personal-info-item-input">
                                                <input type="text" placeholder="Personal Info Description"
                                                       onChange={e => this.setState({description: e.target.value})}
                                                />
                                            </div>
                                            <div className="personal-info-item-input">
                                                <input type="text" placeholder="Personal Info Link"
                                                       onChange={e => this.setState({link: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="add-button">
                                    <button className="title" onClick={this.submit}>
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="right-header">
                                <span className="title">
                                    FAST SKILL LIST
                                </span>
                            </div>
                            <div className="right-body">
                                <div className="skill-list">
                                    {
                                        this.props.skillList.map(skill => (
                                            <div className="skill-item">
                                                <div className="skill-item-header">

                                                        <span className="name">
                                                            {skill.name}
                                                        </span>
                                                    <span className="type">
                                                        {skill.type}
                                                    </span>
                                                </div>
                                                <div className="skill-item-body">
                                                    <div className="skill-item-body-description">
                                                        <span className="title">
                                                            {skill.description}
                                                        </span>
                                                    </div>
                                                    <div className="skill-item-body-link">
                                                        <span className="title">
                                                            {skill.link}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="skill-item-footer">
                                                    <button className="title" onClick={() => this.deleteSkill(skill.id)}>
                                                        DELETE
                                                    </button>

                                                    <button className="add-to-cv" onClick={() => this.addToCv(skill.id)}>
                                                        ADD TO CV
                                                    </button>


                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default FastSkillPage