import react from "react";
import st from './sidebarStyle.module.css'
import { BsHouse, BsReverseLayoutTextWindowReverse, BsChevronRight } from 'react-icons/bs'
import { PiArrowBendRightUpBold , PiGoogleDriveLogoDuotone, PiSubtractSquareDuotone, PiCardsLight } from 'react-icons/pi'
import { AiOutlineCreditCard, AiOutlineInbox } from 'react-icons/ai'
import { HiOutlineArchiveBox } from 'react-icons/hi2'
import { BiCrown } from 'react-icons/bi'

export default function Sidebar() {
    return (
        <>
            <div className={st.sidebar}>
                <div className={st.container}>
                    <div className={st.logo}>
                        <PiArrowBendRightUpBold className={st.icon}/>
                        sneat
                    </div>

                    <div className={st.itens}>
                        <div className={st.itemSingle}> <BsHouse/> Dashboard <BsChevronRight className={st.arrow}/> <div className={st.bar}></div> </div>
                        <div className={st.itemSingle}> <BsReverseLayoutTextWindowReverse/> Layouts <BsChevronRight className={st.arrow}/> <div className={st.bar}></div> </div>
                    </div>

                    <div className={st.itens} id='titulo1'>
                        <label htmlFor="titulo1">PAGES</label>
                        <div className={st.itemSingle}> <AiOutlineInbox/> Account Settings <BsChevronRight className={st.arrow}/> <div className={st.bar}></div> </div>
                        <div className={st.itemSingle}> <AiOutlineCreditCard/> Authentications <BsChevronRight className={st.arrow}/> <div className={st.bar}></div> </div>
                        <div className={st.itemSingle}> <PiGoogleDriveLogoDuotone/> Misc <BsChevronRight className={st.arrow}/> <div className={st.bar}></div> </div>
                    </div>

                    <div className={st.itens} id='titulo2'>
                        <label htmlFor="titulo2">COMPONENTS</label>
                        <div className={st.itemSingle}> <PiCardsLight/> Cards <BsChevronRight className={st.arrow}/> <div className={st.bar}></div> </div>
                        <div className={st.itemSingle}> <HiOutlineArchiveBox/> User Interface <BsChevronRight className={st.arrow}/> <div className={st.bar}></div> </div>
                        <div className={st.itemSingle}> <PiSubtractSquareDuotone/> Extended UI <BsChevronRight className={st.arrow}/> <div className={st.bar}></div> </div>
                        <div className={st.itemSingle}> <BiCrown/> Boxicons <BsChevronRight className={st.arrow}/> <div className={st.bar}></div> </div>
                    </div>
                </div>
            </div>
        </>
    );
}
