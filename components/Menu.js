import Link from 'next/Link'

const layoutLink = {
    color: '#333',
    textDecoration: 'none'

}
const layoutMenu = {
    display: 'inline-block',
    minWidth: '150px',
    fontFamily: 'calibri',
    color: '#333'
}
let categories = [
    {
        label:'JavaScript',
        link:'/javascript',
        icon: '../public/images/js.png'
     },
     {
        label:'PHP 7',
        link:'/php',
        icon: '../public/images/php.png'
     },
     {
        label:'HTML5',
        link:'/html5',
        icon: '../public/images/html5.png'
     },
     {
        label:'Bootstrap 4',
        link:'/bootstrap',
        icon: '../public/images/bootstrap.png'
     }
    ]
     
const Menu = props => (
    <nav>
        <ul>
            {
            categories.map(items =>(
            <li style={layoutMenu}>
                <Link href={items.link}>
                <a style={layoutLink} >{items.label}</a>
            </Link></li>
            ))
            }
        </ul>
    </nav>
)

export default Menu