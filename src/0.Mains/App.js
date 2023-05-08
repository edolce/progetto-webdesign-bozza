import './App.css';
import FastSkillPage from "../1.FastSkillList/FastSkillPage";
import {Component, useState} from "react";
import ResumeCustom from "../2.Resume Custom/ResumeCustom";
import ResumePrev from "../3.Resume Preview/ResumePrev";
import TopDownResume from "../9.Presets Resume/0.Free/0.Top Down/TopDownResume";
import ToFillBlock from "../9.Presets Resume/9.Blocks/ToFillBlock";
import MinimalisticMainBlock from "../9.Presets Resume/9.Blocks/0.Main/MinimalisticMainBlock";
import MinimalisticSkillBlock from "../9.Presets Resume/9.Blocks/0.Main/MinimalisticSkillBlock";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            skillList: [{
                id: 1,
                type: "Portfolio Item",
                name: "Portfolio Item NAME",
                description: "Portfolio Item Description",
                link: "Portfolio Item Link"
            },
                {
                    id: 2,
                    type: "Certificate",
                    name: "Certificate NAME",
                    description: "Certificate Description",
                    link: "Certificate Link"
                },
                {id: 3, type: "Work", name: "Work NAME", description: "Work Description", link: "Work Link"},
                {
                    id: 4,
                    type: "General",
                    name: "General NAME",
                    description: "General Description",
                    link: "General Link"
                },
                {id: 5, type: "Degree", name: "Degree NAME", description: "Degree Description", link: "Degree Link"},
                {
                    id: 6,
                    type: "Personal Info",
                    name: "Personal Info NAME",
                    description: "Sono Cristiano Ronaldo, un atleta professionista con una forte etica del lavoro e una passione per il calcio. Ho trascorso oltre 20 anni a giocare a calcio a livello professionale, sviluppando una vasta gamma di abilità e conoscenze sul campo. Sono noto per il mio attivismo e la mia capacità di motivare i miei compagni di squadra a raggiungere il massimo delle loro potenzialità. Ho vissuto e giocato in vari paesi, lavorando con persone di diverse culture e sfondi, il che mi ha reso un comunicatore abile e un appassionato di apprendimento di lingue straniere. Sono un leader naturale e ho la capacità di gestire un team e raggiungere obiettivi sfidanti. Sono alla ricerca di una nuova sfida dove le mie abilità e la mia passione per il calcio possano essere impiegate per il successo di un'organizzazione professionale.",
                    link: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
                },
            ],
            pageHandler: "FastSkillList",
            popupVisibility: "hidden",
            popupSkillTypeFilter: ["none"],
            resumeDATA: [],
            resumeHTML: <TopDownResume
                HeaderBlockHTML={<ToFillBlock blockType="HEADER"
                                              visibilityHook={this.popupVisibilityHook}
                                              skillTypeHook={(filter) => {this.setState({popupSkillTypeFilter: filter})}}
                />}
                FooterBlockHTML={<ToFillBlock blockType="FOOTER" 
                                              visibilityHook={this.popupVisibilityHook}
                                              skillTypeHook={(filter) => {this.setState({popupSkillTypeFilter: filter})}}
                />}
                displayMode={"edit"}
                popupVisibilityHook={this.popupVisibilityHook}
                popupFilterHook={
                    (filter) => {
                        this.setState({popupSkillTypeFilter: filter})
                    }
                }
                resumeDATA={this.state.resumeDATA}
            />,
        }
    }

    popupVisibilityHook = () => {
        this.setState({popupVisibility: (this.state.popupVisibility === "hidden" ? "visible" : "hidden")})
    }

    render() {

        let currentPage;

        //Page Handler
        if (this.state.pageHandler === "FastSkillList") {
            //Fast Skill Page is a component that contains the list of skills:
            // - skillList: the list of skills
            // - setSkillList: the function to set the list of skills
            currentPage = <FastSkillPage skillList={this.state.skillList}
                                         setSkillList={(skillList) => this.setState({skillList: skillList})}/>
        } else if (this.state.pageHandler === "ResumeCustom") {

            //Resume Custom is a component that contains the resume:
            // - resumeHTML: the resume HTML
            // - popupVisibility: the visibility of the popup
            // - popupVisibilityHook: the function to set the visibility of the popup
            currentPage = <ResumeCustom
                resumeHTML={this.state.resumeHTML}
                popupVisibility={this.state.popupVisibility}
                skillTypeFilter={this.state.popupSkillTypeFilter}
                popupVisibilityHook={this.popupVisibilityHook}
                skillList={this.state.skillList}
                insertBlockHook={() => {
                }}
                removeBlockHook={() => {
                }}
            />
        } else if (this.state.pageHandler === "ResumePreview") {
            //Resume Preview is a component that contains the resume:
            // - resumeHTML: the resume HTML
            // - popupVisibility: the visibility of the popup
            // - popupVisibilityHook: the function to set the visibility of the popup
            currentPage = <ResumePrev/>
        }


        return (
            <div className="App">
                {/*HEADER*/}
                <div className="recall-header">
                    <header className="main-header">
                        <h1>Fast Skill SITE</h1>
                        <ul>
                            <li onClick={
                                () => {
                                    this.setState({pageHandler: "FastSkillList"})
                                }
                            }>Skills
                            </li>
                            <li onClick={
                                () => {
                                    this.setState({pageHandler: "ResumeCustom"})
                                }
                            }>Resume Custom
                            </li>
                            <li onClick={
                                () => {
                                    this.setState({pageHandler: "ResumePreview"})
                                }
                            }>Resume Preview
                            </li>
                        </ul>
                    </header>
                </div>
                {/*CONTENT*/}
                {currentPage}
            </div>
        );
    }
}

export default App;
