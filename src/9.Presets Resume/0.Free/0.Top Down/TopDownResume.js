import './TopDownResume.css';
import ToFillBlock from "../../9.Blocks/ToFillBlock";
import MinimalisticMainBlock from "../../9.Blocks/0.Main/MinimalisticMainBlock";
import MinimalisticSkillBlock from "../../9.Blocks/0.Main/MinimalisticSkillBlock";

//check if the display mode is preview or edit

function TopDownResume(props) {

    if (props.displayMode === "preview"){

    }else if (props.displayMode === "edit"){

    }

    let mainBlock=undefined;
    let skillsBlocks=[];

    props.resumeDATA.forEach(block => {
        if (block.position === 0){
            mainBlock = block.HtmlBlock;
        }else {
            skillsBlocks.push({HtmlBlock:block.HtmlBlock, height:block.height});
        }
    })

    if (mainBlock === undefined){
        mainBlock = <ToFillBlock blockType="MAIN" visibilityHook={props.popupVisibilityHook} skillTypeHook={props.popupFilterHook} height={"50%"}/>
    }

    if (skillsBlocks.length === 0){
        skillsBlocks.push({HtmlBlock:<ToFillBlock blockType="SKILL" visibilityHook={props.popupVisibilityHook} skillTypeHook={props.popupFilterHook} height={"50%"}/>, height:0.5})
    } else{
        let totalHeight = 0;
        skillsBlocks.forEach(block => {
            totalHeight += block.height;
        })
        if (totalHeight < 50){
            skillsBlocks.push({HtmlBlock:<ToFillBlock blockType="SKILL" visibilityHook={props.popupVisibilityHook} skillTypeHook={props.popupFilterHook} height={(50-totalHeight).toString()+"%"}/>, height:0.5})
        }
    }

    console.log("mainBlock", mainBlock)
    console.log("skillBlock",skillsBlocks)
    return (
        <div className="resume-container">
            <div className="resume-container-header">
                {props.FooterBlockHTML}
            </div>
            <div className="resume-container-body">
                {mainBlock}
                {/*<MinimalisticMainBlock
                    skill={{
                        link:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
                        name:"John Doe",
                        description:"Sono Cristiano Ronaldo, un atleta professionista con una forte etica del lavoro e una passione per il calcio. Ho trascorso oltre 20 anni a giocare a calcio a livello professionale, sviluppando una vasta gamma di abilità e conoscenze sul campo. Sono noto per il mio attivismo e la mia capacità di motivare i miei compagni di squadra a raggiungere il massimo delle loro potenzialità. Ho vissuto e giocato in vari paesi, lavorando con persone di diverse culture e sfondi, il che mi ha reso un comunicatore abile e un appassionato di apprendimento di lingue straniere. Sono un leader naturale e ho la capacità di gestire un team e raggiungere obiettivi sfidanti. Sono alla ricerca di una nuova sfida dove le mie abilità e la mia passione per il calcio possano essere impiegate per il successo di un'organizzazione professionale.",
                        type:"Personal Info"
                    }}/>*/}
                {skillsBlocks.map((skillsBlock) => (skillsBlock.HtmlBlock))}

                {/*<ToFillBlock blockType="MAIN"/>*/}

                {/*<ToFillBlock blockType="SKILL" visibilityHook={props.popupVisibilityHook} skillTypeHook={props.popupFilterHook}/>*/}
                {/*<MinimalisticSkillBlock skill={{
                    title:"Diploma di maturità scientifica",
                    description:"Liceo Scientifico Statale 'G. Galilei' con voto finale 100/100",
                    type:"General",
                    link:"https://www.liceogalilei.it/"
                }}/>*/}
                {/*<ToFillBlock blockType="SKILL" visibilityHook={props.popupVisibilityHook} skillTypeHook={props.popupFilterHook} height={"37.5%"}/>*/}
            </div>
            <div className="resume-container-footer">
                {props.FooterBlockHTML}
            </div>
        </div>
    )
}

export default TopDownResume