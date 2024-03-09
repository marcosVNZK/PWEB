import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo, faCommentAlt, faCommentDollar, faCommentDots, faCommentSms, faComments, faInfo, faMagnifyingGlass, faShoppingBag, faStore, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { comment } from 'postcss'

export default function CompPrincipal(){
return(<>
        <div className="cabecalho">
            <h1 className="img"></h1>

            <div>
                <form action="">
                <FontAwesomeIcon className='lupa' icon={faMagnifyingGlass} />
                <input type="search" className='search' placeholder="Old Skooll..."/>
                </form>
        
                <select>
                    <option>MAIS</option>
                    <option>Calças</option>
                    <option>Blusas</option>
                    <option>Tenis</option>
                </select>

                <p className='Atend'>ATENDIMENTO </p>
                <FontAwesomeIcon className='coment' icon={faComments} />
                <p className='Ajuda'>AJUDA</p>
                <FontAwesomeIcon className='info' icon={faCircleInfo} />
                <p className='Lojas'>NOSSAS LOJAS</p>
                <FontAwesomeIcon className='store' icon={faStore} />
                <p className='Conta'>MINHA CONTA</p>
                <FontAwesomeIcon className='user' icon={faUserAlt} />

                <div className='tracoBord'>
                <FontAwesomeIcon className='bolsa' icon={faShoppingBag} />

                </div>
                
            </div>
        </div>
    </>)
    }