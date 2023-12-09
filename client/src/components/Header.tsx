import { IconInput } from './Input';
import { Logo } from "../components/Logo";
import { PageType } from '../data/constants';
import { Hamburguer } from './Hamburguer';

{/* TODO: Colocar aqui essa página para levar para sobre o projeto 
    TODO: Mostrar apenas o command para quando a tela for grande
*/}
type HeaderStyle = {
    mainBackground: string,
    logoColor: string,
    hamburgerTheme: string,
    menuListBackground: string,
    menuListBorder: string, 
    inputBackground: string,
    inputForeground: string
    colorText: string
}

const chooseHeaderStyle = (type: PageType): HeaderStyle => {
    switch (type) {
        case 'HE':
            return {
                mainBackground: 'he-background',
                logoColor: 'white',
                hamburgerTheme: 'whiteAlpha',
                menuListBackground: '#3A3A3E',
                inputBackground: "#5B5B5B",
                menuListBorder: "white", 
                inputForeground: "white",
                colorText: "white" 
            };
        case 'SHE':
            return {
                mainBackground: 'she-background',
                logoColor: 'she-logo-color',
                hamburgerTheme: 'gray',
                menuListBackground: 'white',
                inputBackground: "black",
                menuListBorder: "black", 
                inputForeground: "black",
                colorText: "white" 
            };
        case 'US':
            return {
                mainBackground: 'white',
                logoColor: 'black',
                hamburgerTheme: 'blackAlpha',
                menuListBackground: '#F1F1F1',
                inputBackground: "white",
                menuListBorder: "black", 
                inputForeground: "black",
                colorText: "white" 
            };
        case 'DEFAULT':
            return {
                mainBackground: 'white',
                logoColor: 'black',
                hamburgerTheme: 'default-hamburguer-color',
                menuListBackground: 'white',
                inputBackground: "black",
                menuListBorder: "black", 
                inputForeground: "black",
                colorText: "white" 
            };
        default:
            throw new Error(`Invalid page type: ${type}`);
    }
};


const headerItens = () => {
    return (
        <div className="hidden flex-row space-x-20 justify-between text-white text-md  place-items-center font-inter text-xl font-light">
            <div>
                <p className='cursor-pointer'>She</p>
            </div>
            <div>
                <p className='cursor-pointer'>Us</p>
            </div>
            <div>
                <p className='cursor-pointer'>He</p>
            </div>
        </div>
    )
}


/* Colorscheme on dark mode is whiteAlpha and on white mode is default" */
export function Header({ type }: { type: PageType }) {

    const headerStyle = chooseHeaderStyle(type)
    const searchInput = IconInput({backgroundColor: headerStyle.inputBackground, foregroundColor: headerStyle.inputForeground});
    const hamburger = Hamburguer({theme: headerStyle.hamburgerTheme, menuListBackground: headerStyle.menuListBackground, textColor: headerStyle.colorText})

    return (

        <div className={`fixed top-0 left-0 right-0 bg-${headerStyle.mainBackground} flex justify-between py-1 px-5 place-items-center`}>
            <Logo color={headerStyle.logoColor}/>

            {headerItens()}

            <div className='flex place-items-center'>
                {searchInput}
            </div>
            {hamburger}
        </div>
    )

}