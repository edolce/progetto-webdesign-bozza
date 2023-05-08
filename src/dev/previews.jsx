import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import TopDownResume from "../9.Presets Resume/0.Free/0.Top Down/TopDownResume";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/TopDownResume">
                <TopDownResume/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews