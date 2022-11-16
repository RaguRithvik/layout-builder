// import React from 'react'
const intialSate = {position: "text-left", color: "", header: true, footer: true, drawer_overlay: true, left_side_drawer: true, right_side_drawer: true, header_menu: true, footer_menu: true }

const Reducers = (state=intialSate, action) =>{
    switch(action.type){
        case "Company_Logo":
        state = {...state, position:action.payload}
        return state

        case "Preset_Color":
        state = {...state, color:action.payload}
        return state

        case "Header_Fixed":
        state = {...state, header:action.payload}
        return state

        case "Footer_Fixed":
        state = {...state, footer:action.payload}
        return state

        case "Drawer_Overlay":
        state = {...state, drawer_overlay:action.payload}
        return state

        case "Left_Side_Drawer":
        state = {...state, left_side_drawer:action.payload}
        return state

        case "Right_Side_Drawer":
        state = {...state, right_side_drawer:action.payload}
        return state

        case "Navigation_Tabs":
        state = {...state, header_menu:action.payload}
        return state

        case "Bottom_Menu":
        state = {...state, footer_menu:action.payload}
        return state

        default:
        return state
    }
}
export default Reducers
